import { Hono } from "hono";
import { hc } from "hono/client";
import emails from "./email";
import { cors } from "hono/cors";

/* -------------------------------------------------------------------------- */
/*                                     Middleware                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
const app = new Hono().basePath("/api");

app.use("/api/*", cors());

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

const routes = app
  .route("/emails", emails)
  .get("/", (c) => c.json({ message: "server is healthy" }));

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */
export default app;
export type AppType = typeof routes;

export const client = hc<AppType>("/");
export type ClientType = typeof client;
