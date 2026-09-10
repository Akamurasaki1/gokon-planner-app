"use server";

import { revalidatePath } from "next/cache";
import { createApplicationSchema } from "./schema";
import { createApplication } from "./repository";
import { redirect } from "next/navigation";

function getDummyOrganizerId(): string {
  const id = process.env.DUMMY_ORGANIZER_ID;
  if (!id) {
    throw new Error("DUMMY_ORGANIZER_ID is not set. Run seed and set .env value.");
  }
  return id;
}

export async function createApplicationAction(formData: FormData) {
  const parsed = createApplicationSchema.safeParse({
    eventId: formData.get("eventId"),
    offeredGender: formData.get("offeredGender"),
    offeredCount: formData.get("offeredCount"),
    ageBandComposition: formData.get("ageBandComposition"),
    affiliationComposition: formData.get("affiliationComposition"),
    contactableHours: formData.get("contactableHours") || undefined,
    note: formData.get("note") || undefined,
  });

  if (!parsed.success) {
    throw new Error(parsed.error.errors[0]?.message ?? "入力が不正です");
  }

  const organizerId = getDummyOrganizerId();
  await createApplication(organizerId, parsed.data);

  revalidatePath(`/events/${parsed.data.eventId}`);
  redirect(`/events/${parsed.data.eventId}`);
}
