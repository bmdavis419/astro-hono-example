import { hc } from "hono/client";
import type { AppType } from ".";

const baseUrl = import.meta.env.PUBLIC_VERCEL_URL
  ? `https://${import.meta.env.PUBLIC_VERCEL_URL}/`
  : "http://localhost:4321/";

const { api } = hc<AppType>(baseUrl);

export default api;
