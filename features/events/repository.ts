import { prisma } from "@/lib/prisma";
import { CreateEventInput } from "./schema";

export async function listEvents() {
  return prisma.eventRequest.findMany({
    orderBy: { createdAt: "desc" },
    where: { status: { in: ["OPEN", "MATCHING", "CONFIRMED"] } },
  });
}

export async function createEvent(ownerId: string, input: CreateEventInput) {
  return prisma.eventRequest.create({
    data: { ...input, ownerId },
  });
}

export async function getEventDetail(eventId: string) {
  const event = await prisma.eventRequest.findUnique({ where: { id: eventId } });
  if (!event) return null;

  const applications = await prisma.application.findMany({
    where: { eventId },
    include: { organizer: { select: { displayName: true } } },
    orderBy: { createdAt: "asc" },
  });

  return { event, applications };
}
