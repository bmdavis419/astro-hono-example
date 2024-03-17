import { hc } from "hono/client";
import type { AppType } from ".";

// NOTE: can only be run on the client
const { api } = hc<AppType>("/");

export default api;
