import { column, defineDb, defineTable } from "astro:db";

const EmailList = defineTable({
  columns: {
    email: column.text({ primaryKey: true }),
    createdAt: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { EmailList },
});
