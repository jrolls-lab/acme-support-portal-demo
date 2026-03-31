const API = "";

async function loadTickets() {
  const res = await fetch(API + "/api/tickets");
  const tickets = await res.json();
  const list = document.getElementById("ticket-list");

  if (tickets.length === 0) {
    list.innerHTML = '<div class="empty-state"><p>No tickets yet.</p></div>';
    return;
  }

  list.innerHTML = tickets
    .map(
      (t) => `
    <div class="ticket-card">
      <div class="ticket-header">
        <span class="ticket-title">${t.title}</span>
      </div>
      <div class="ticket-description">${t.description}</div>
      <div class="ticket-meta">
        <span>Status: ${t.status}</span>
        <span>Created: ${new Date(t.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  `
    )
    .join("");
}

// New ticket dialog
const dialog = document.getElementById("new-ticket-dialog");
document.getElementById("new-ticket-btn").addEventListener("click", () => dialog.showModal());
document.getElementById("cancel-btn").addEventListener("click", () => dialog.close());

document.getElementById("ticket-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const body = {
    title: form.title.value,
    description: form.description.value,
  };

  await fetch(API + "/api/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  form.reset();
  dialog.close();
  loadTickets();
});

// Initial load
loadTickets();
