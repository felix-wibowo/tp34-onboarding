import {
  pgTable,
  text,
  integer,
  real,
  serial,
  json,
  timestamp,
} from "drizzle-orm/pg-core";

export const accidentSchema = pgTable("accidents", {
  accident_no: text("accident_no").primaryKey(),
  accident_datetime: timestamp("accident_datetime").notNull(),
  accident_type: text("accident_type").notNull(),
  severity: text("severity").notNull(),
  speed_zone: text("speed_zone").notNull(),
  road_name: text("road_name").notNull(),
  road_type: text("road_type").notNull(),
  lga_name: text("lga_name").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  vicgrid_x: real("vicgrid_x").notNull(),
  vicgrid_y: real("vicgrid_y").notNull(),
  bicyclist: integer("bicyclist").notNull(),
  serious_injury: integer("serious_injury").notNull(),
  other_injury: integer("other_injury").notNull(),
  non_injured: integer("non_injured").notNull(),
  fatality: integer("fatality").notNull(),
});

export const bikeRoute = pgTable("bike_routes", {
  id: serial("id").primaryKey(),
  geo_shape: json("geo_shape").notNull(),
  type: text("type").notNull(),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  direction: text("direction").notNull(),
});
