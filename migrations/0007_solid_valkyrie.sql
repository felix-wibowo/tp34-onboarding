CREATE TABLE IF NOT EXISTS "post_codes" (
	"post_code" integer PRIMARY KEY NOT NULL,
	"suburb_name" text NOT NULL,
	"boundary_geo_json" json
);
--> statement-breakpoint
DROP TABLE "post_code";