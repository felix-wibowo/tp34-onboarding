import { z } from 'zod';

export const AccidentValidation = z.object({
  accident_no: z.number(),
  accident_date: z.date(),
  accident_time: z.date(),
  node_id: z.number(),
  severity: z.string(),
  speed_zone: z.string(),
});

export const DeleteAccidentValidation = z.object({
  accident_no: z.coerce.number(),
});
