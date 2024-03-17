import { hc } from "hono/client";
import type { AppType } from ".";

const baseUrl = import.meta.env.PUBLIC_BASE_URL;

const { api } = hc<AppType>(baseUrl);

export default api;
