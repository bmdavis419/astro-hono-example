import { hc } from "hono/client";
import type { AppType } from ".";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:4321";

const { api } = hc<AppType>(baseUrl + "/");

export default api;
