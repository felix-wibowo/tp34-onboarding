import { z } from "zod";

export const BikeRouteValidation = z.object({
  geo_point: z.number(),
  type: z.string(),
  geo_shape: z.string(),
  name: z.string(),
});
