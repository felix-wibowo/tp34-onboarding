import { z } from 'zod';

export const NodeValidation = z.object({
  accident_no: z.number(),
  node_id: z.number(),
  lga_name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});
