import { hc } from "hono/client";
import type { AppType } from ".";

const baseUrl = import.meta.env.PROD
  ? `https://astro-hono-example.vercel.app/`
  : "http://localhost:4321/";

const { api } = hc<AppType>(baseUrl);

export default api;
