CREATE TABLE IF NOT EXISTS "accidents" (
	"accident_no" text PRIMARY KEY NOT NULL,
	"accident_datetime" timestamp NOT NULL,
	"accident_type" text NOT NULL,
	"severity" text NOT NULL,
	"speed_zone" text NOT NULL,
	"road_name" text NOT NULL,
	"road_type" text NOT NULL,
	"latitude" real NOT NULL,
	"longitude" real NOT NULL,
	"bicyclist" integer NOT NULL,
	"serious_injury" integer NOT NULL,
	"other_injury" integer NOT NULL,
	"non_injured" integer NOT NULL,
	"fatality" integer NOT NULL,
	"post_code" integer DEFAULT 3000 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_routes" (
	"id" serial PRIMARY KEY NOT NULL,
	"geo_shape" json NOT NULL,
	"type" text NOT NULL,
	"latitude" real NOT NULL,
	"longitude" real NOT NULL,
	"direction" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_codes" (
	"post_code" integer PRIMARY KEY NOT NULL,
	"suburb_name" text NOT NULL,
	"boundary_geo_json" json
);
