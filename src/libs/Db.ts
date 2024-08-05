import { PGlite } from '@electric-sql/pglite';
import { drizzle as drizzlePg } from 'drizzle-orm/node-postgres';
import { migrate as migratePg } from 'drizzle-orm/node-postgres/migrator';
import type { PgDatabase } from 'drizzle-orm/pg-core';
import { drizzle as drizzlePglite } from 'drizzle-orm/pglite';
import { migrate as migratePglite } from 'drizzle-orm/pglite/migrator';
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants';
import path from 'path';
import { Client } from 'pg';

import * as schema from '@/models/Schema';

import { Env } from '@/libs/Env';
import { logger } from '@/libs/Logger';

class DatabaseManager {
  private static instance: DatabaseManager | null = null;
  private client!: Client | PGlite;
  private drizzle!: PgDatabase<any, any, any>;
  private closed = false;

  private constructor() {}

  public static getInstance(): DatabaseManager {
    if (!this.instance) {
      this.instance = new DatabaseManager();
    }
    return this.instance;
  }

  async init() {
    if (process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD && Env.DATABASE_URL) {
      this.client = new Client({ connectionString: Env.DATABASE_URL });
      await this.client.connect();
      this.drizzle = drizzlePg(this.client, { schema });
      await migratePg(this.drizzle, { migrationsFolder: path.join(process.cwd(), 'migrations') });
      logger.info("Connected to ", this.client.host)
    } else {
      const global = globalThis as unknown as { client: PGlite };
      if (!global.client) {
        global.client = new PGlite();
        await global.client.waitReady;
      }
      this.client = global.client;
      this.drizzle = drizzlePglite(this.client, { schema });
      await migratePglite(this.drizzle, { migrationsFolder: path.join(process.cwd(), 'migrations') });
      logger.info("Connected to pglite")
    }
  }

  get db() {
    return this.drizzle;
  }

  async closeConnections() {
    if (this.closed) return;
    try {
      if (this.client instanceof Client) {
        await this.client.end(); // Close PostgreSQL connection
      } else if (this.client instanceof PGlite) {
        await this.client.close(); // Close PGLite connection
      }
      this.closed = true;
    } catch (error) {
      console.error('Error closing database connection:', error);
    }
  }

  // Listen for process signals to gracefully shut down
  listenForShutdown() {
    process.on('SIGINT', () => this.shutdown("SIGINT"));
    process.on('SIGTERM', () => this.shutdown("SIGTERM"));
  }

  shutdown(type: string) {
    logger.info(`Shutting down gracefully... ${type}`);
    this.closeConnections().then(() => {
      logger.info('Database connections closed.');
      process.exit(0); // Exit cleanly
    }).catch((error) => {
      logger.error('Failed to close database connections:', error);
      process.exit(1); // Exit with error
    });
  }
}

// Initialize the database manager
const dbManager = DatabaseManager.getInstance();
await dbManager.init();

dbManager.listenForShutdown();

export const db = dbManager.db;
