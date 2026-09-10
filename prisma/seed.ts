import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const organizer = await prisma.organizer.upsert({
    where: { email: "demo-organizer@example.com" },
    update: {},
    create: {
      email: "demo-organizer@example.com",
      passwordHash: "dummy_hash",
      displayName: "Demo幹事",
      ageVerified: true,
      ageBand: "25-29",
      affiliationCategory: "社会人",
      activityArea: "東京都",
    },
  });

  console.log("DUMMY_ORGANIZER_ID=", organizer.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
