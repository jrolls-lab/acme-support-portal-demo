import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
app.use("/*", cors());

// In-memory ticket store (demo purposes)
const tickets: Array<{
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "critical";
  status: "open" | "in-progress" | "resolved";
  createdAt: string;
}> = [
  {
    id: 1,
    title: "Login page not loading",
    description: "Users report a blank white screen when navigating to /login",
    priority: "critical",
    status: "open",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 2,
    title: "Dashboard charts show wrong timezone",
    description: "All timestamps in dashboard charts are displayed in UTC instead of local time",
    priority: "medium",
    status: "in-progress",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 3,
    title: "Update footer copyright year",
    description: "Footer still shows 2024, needs to be updated to 2025",
    priority: "low",
    status: "open",
    createdAt: new Date().toISOString(),
  },
];

let nextId = 4;

// --- API Routes ---

app.get("/api/tickets", (c) => {
  return c.json(tickets.sort((a, b) => {
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }));
});

app.get("/api/tickets/:id", (c) => {
  const ticket = tickets.find((t) => t.id === Number(c.req.param("id")));
  if (!ticket) return c.json({ error: "Not found" }, 404);
  return c.json(ticket);
});

app.post("/api/tickets", async (c) => {
  const body = await c.req.json<{
    title: string;
    description: string;
    priority?: "low" | "medium" | "high" | "critical";
  }>();
  const ticket = {
    id: nextId++,
    title: body.title,
    description: body.description,
    priority: body.priority || "medium",
    status: "open" as const,
    createdAt: new Date().toISOString(),
  };
  tickets.push(ticket);
  return c.json(ticket, 201);
});

export default app;
