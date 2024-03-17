import { EmailList, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(EmailList).values({
    email: "test@gmail.com",
    createdAt: new Date(),
  });
}
