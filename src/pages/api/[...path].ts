import app from "../../lib/api";
import type { APIRoute } from "astro";

const handler: APIRoute = ({ request }) => app.fetch(request);

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as HEAD,
  handler as PATCH,
  handler as TRACE,
  handler as OPTIONS,
  handler as CONNECT,
};
