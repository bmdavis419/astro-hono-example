import { hc } from "hono/client";
import type { AppType } from ".";

const baseUrl = import.meta.env.VERCEL_URL
  ? `https://${import.meta.env.VERCEL_URL}/`
  : "http://localhost:4321/";

console.log(process.env.VERCEL_URL + "/");

const { api } = hc<AppType>(baseUrl);

export default api;
