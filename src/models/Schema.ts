import { pgTable, serial, text, timestamp, integer, numeric } from 'drizzle-orm/pg-core';

// NODE table schema
export const nodeSchema = pgTable('node', {
  node_id: integer('node_id').primaryKey(),
  lga_name: text('lga_name').notNull(),
  latitude: numeric('latitude').notNull(),
  longitude: numeric('longitude').notNull(),
  accident_no: integer('accident_no').notNull().references(() => accidentSchema.accident_no),
});

// ACCIDENT table schema
export const accidentSchema = pgTable('accident', {
  accident_no: integer('accident_no').primaryKey(),
  accident_date: timestamp('accident_date', { mode: 'date' }).notNull(),
  accident_time: timestamp('accident_time', { mode: 'date' }).notNull(),
  severity: text('severity').notNull(),
  speed_zone: text('speed_zone').notNull(),
});

// BikeRoute table schema
export const bikeRouteSchema = pgTable('bike_route', {
  geo_point: serial('geo_point').primaryKey(),
  type: text('type').notNull(),
  geo_shape: text('geo_shape').notNull(),
  name: text('name').notNull(),
});

// AccidentBikeRoute table schema
export const accidentBikeRouteSchema = pgTable('accident_bike_route', {
  accident_no: integer('accident_no').notNull().references(() => accidentSchema.accident_no),
  geo_point: integer('geo_point').notNull().references(() => bikeRouteSchema.geo_point),
  distance: numeric('distance').notNull(),
});
