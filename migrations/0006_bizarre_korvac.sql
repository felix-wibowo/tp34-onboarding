CREATE TABLE IF NOT EXISTS "post_code" (
	"post_code" integer PRIMARY KEY NOT NULL,
	"suburb_name" text NOT NULL,
	"boundary_geo_json" json
);
--> statement-breakpoint
ALTER TABLE "accidents" ADD COLUMN "post_code" integer DEFAULT 3000 NOT NULL;