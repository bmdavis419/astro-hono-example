// routes/users.ts
import { zValidator } from "@hono/zod-validator";
import { EmailList, db } from "astro:db";
import { Hono } from "hono";
import { z } from "zod";

const emails = new Hono()
  .get("/", async (c) => {
    const emailList = await db.select().from(EmailList);

    return c.json({ emailList });
  })
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        email: z.string(),
      }),
    ),
    async (c) => {
      const data = c.req.valid("json");

      await db.insert(EmailList).values({
        email: data.email,
        createdAt: new Date(),
      });

      return c.json({ success: true });
    },
  );

export default emails;
export type UsersType = typeof emails;
