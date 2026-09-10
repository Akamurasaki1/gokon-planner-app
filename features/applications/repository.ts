import { prisma } from "@/lib/prisma";
import { AppError } from "@/lib/errors";
import { CreateApplicationInput } from "./schema";

export async function createApplication(organizerId: string, input: CreateApplicationInput) {
  const exists = await prisma.application.findUnique({
    where: {
      eventId_organizerId: {
        eventId: input.eventId,
        organizerId,
      },
    },
  });

  if (exists) {
    throw new AppError("この案件には既に応募済みです", "DUPLICATE_APPLICATION");
  }

  return prisma.application.create({
    data: {
      eventId: input.eventId,
      organizerId,
      offeredGender: input.offeredGender,
      offeredCount: input.offeredCount,
      ageBandComposition: input.ageBandComposition,
      affiliationComposition: input.affiliationComposition,
      contactableHours: input.contactableHours,
      note: input.note,
    },
  });
}
