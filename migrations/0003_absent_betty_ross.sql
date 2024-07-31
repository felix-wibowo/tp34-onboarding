CREATE TABLE IF NOT EXISTS "bike_routes" (
	"id" serial NOT NULL,
	"geo_shape" json NOT NULL,
	"type" text NOT NULL,
	"latitude" real NOT NULL,
	"longitude" real NOT NULL
);
--> statement-breakpoint
ALTER TABLE "accidents" RENAME COLUMN "accident_date" TO "accident_datetime";--> statement-breakpoint
ALTER TABLE "accidents" ALTER COLUMN "accident_datetime" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "accidents" DROP COLUMN IF EXISTS "accident_time";