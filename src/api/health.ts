/**
 * Simple health endpoint for the demo target app.
 * In a real app this would be a Worker or API route.
 */
export default {
  async fetch(): Promise<Response> {
    return Response.json({
      status: "ok",
      service: "acme-support-portal",
      timestamp: new Date().toISOString(),
    });
  },
};
