import { z } from "zod";

export const createEventSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  areaPrefecture: z.string().min(1),
  areaStation: z.string().optional(),
  scheduleText: z.string().min(1),
  timeSlot: z.string().min(1),
  budgetMin: z.coerce.number().int().min(0),
  budgetMax: z.coerce.number().int().min(0),
  missingGender: z.enum(["MALE", "FEMALE", "OTHER"]),
  missingCount: z.coerce.number().int().min(1).max(20),
  expectedTotalCount: z.coerce.number().int().min(2).max(40),
  preferredAgeBand: z.string().min(1),
  preferredAffiliation: z.string().min(1),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
