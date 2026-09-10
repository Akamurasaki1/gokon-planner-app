import { z } from "zod";

export const createApplicationSchema = z.object({
  eventId: z.string().min(1),
  offeredGender: z.enum(["MALE", "FEMALE", "OTHER"]),
  offeredCount: z.coerce.number().int().min(1).max(20),
  ageBandComposition: z.string().min(1),
  affiliationComposition: z.string().min(1),
  contactableHours: z.string().optional(),
  note: z.string().optional(),
});

export type CreateApplicationInput = z.infer<typeof createApplicationSchema>;
