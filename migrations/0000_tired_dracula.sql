CREATE TABLE IF NOT EXISTS "accident_bike_route" (
	"accident_no" integer NOT NULL,
	"geo_point" integer NOT NULL,
	"distance" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "accident" (
	"accident_no" integer PRIMARY KEY NOT NULL,
	"accident_date" timestamp NOT NULL,
	"accident_time" timestamp NOT NULL,
	"severity" text NOT NULL,
	"speed_zone" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_route" (
	"geo_point" serial PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"geo_shape" text NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "node" (
	"accident_no" integer NOT NULL,
	"node_id" integer PRIMARY KEY NOT NULL,
	"lga_name" text NOT NULL,
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accident_bike_route" ADD CONSTRAINT "accident_bike_route_accident_no_accident_accident_no_fk" FOREIGN KEY ("accident_no") REFERENCES "public"."accident"("accident_no") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accident_bike_route" ADD CONSTRAINT "accident_bike_route_geo_point_bike_route_geo_point_fk" FOREIGN KEY ("geo_point") REFERENCES "public"."bike_route"("geo_point") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "node" ADD CONSTRAINT "node_accident_no_accident_accident_no_fk" FOREIGN KEY ("accident_no") REFERENCES "public"."accident"("accident_no") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
