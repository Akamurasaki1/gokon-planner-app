"use server";

import { createEventSchema } from "./schema";
import { createEvent } from "./repository";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function getDummyOrganizerId(): string {
  const id = process.env.DUMMY_ORGANIZER_ID;
  if (!id) {
    throw new Error("DUMMY_ORGANIZER_ID is not set. Run seed and set .env value.");
  }
  return id;
}

export async function createEventAction(formData: FormData) {
  const parsed = createEventSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description") || undefined,
    areaPrefecture: formData.get("areaPrefecture"),
    areaStation: formData.get("areaStation") || undefined,
    scheduleText: formData.get("scheduleText"),
    timeSlot: formData.get("timeSlot"),
    budgetMin: formData.get("budgetMin"),
    budgetMax: formData.get("budgetMax"),
    missingGender: formData.get("missingGender"),
    missingCount: formData.get("missingCount"),
    expectedTotalCount: formData.get("expectedTotalCount"),
    preferredAgeBand: formData.get("preferredAgeBand"),
    preferredAffiliation: formData.get("preferredAffiliation"),
  });

  if (!parsed.success) {
    throw new Error(parsed.error.errors[0]?.message ?? "入力が不正です");
  }

  const ownerId = getDummyOrganizerId();
  await createEvent(ownerId, parsed.data);

  revalidatePath("/events");
  redirect("/events");
}
