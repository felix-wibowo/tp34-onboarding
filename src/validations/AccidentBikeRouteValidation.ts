import { z } from "zod";

export const AccidentBikeRouteValidation = z.object({
  accident_no: z.number(),
  geo_point: z.number(),
  distance: z.number(),
});
