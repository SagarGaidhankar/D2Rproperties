import { useMemo, useState } from "react";
import { initialLeads } from "../../data/leads";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const statuses = [
  "New",
  "Contacted",
  "Site Visit Scheduled",
  "Closed",
  "Not Interested",
];

function AdminLeads() {
  const [leads, setLeads] = useState(initialLeads);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  // Update a lead's status
  const updateStatus = (leadId, newStatus) => {
    setLeads((previousLeads) =>
      previousLeads.map((lead) =>
        lead.id === leadId
          ? { ...lead, status: newStatus }
          : lead
      )
    );
  };

  // Search and filter leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        lead.name.toLowerCase().includes(searchText) ||
        lead.property.toLowerCase().includes(searchText) ||
        lead.phone.includes(search);

      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, statusFilter]);

  const newLeads = leads.filter((lead) => lead.status === "New").length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const closedLeads = leads.filter(
    (lead) => lead.status === "Closed"
  ).length;

  const statusStyle = (status) => {
    const styles = {
      New: "bg-blue-100 text-blue-700",
      Contacted: "bg-yellow-100 text-yellow-700",
      "Site Visit Scheduled": "bg-purple-100 text-purple-700",
      Closed: "bg-green-100 text-green-700",
      "Not Interested": "bg-red-100 text-red-700",
    };

    return styles[status] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-4 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-emerald-900">
              NIDHI propertiesAdmin
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage buyer inquiries and property leads
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 sm:inline-block">
              Lead Management
            </span>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        {/* Summary cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard title="Total Leads" value={leads.length} />
          <SummaryCard title="New Leads" value={newLeads} />
          <SummaryCard title="Contacted" value={contactedLeads} />
          <SummaryCard title="Closed" value={closedLeads} />
        </div>

        {/* Search and filters */}
        <section className="mt-8 rounded-xl border bg-white p-4 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Buyer Inquiries
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                View and manage your incoming leads.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search name, phone or property..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-lg border px-4 py-2 text-sm outline-none focus:border-emerald-700 sm:w-72"
              />

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-lg border bg-white px-4 py-2 text-sm outline-none focus:border-emerald-700"
              >
                <option value="All">All Statuses</option>

                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Leads table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="border-b bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Buyer</th>
                  <th className="px-4 py-3 font-semibold">Property</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Message</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Update</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <p className="font-semibold text-gray-900">
                        {lead.name}
                      </p>
                      <p className="mt-1 text-gray-500">{lead.phone}</p>
                    </td>

                    <td className="px-4 py-4">
                      <p className="font-medium text-gray-800">
                        {lead.property}
                      </p>
                      <p className="mt-1 text-gray-500">
                        {lead.location}
                      </p>
                    </td>

                    <td className="px-4 py-4 text-gray-600">
                      {lead.date}
                    </td>

                    <td className="max-w-xs px-4 py-4 text-gray-600">
                      {lead.message}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                          lead.status
                        )}`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <select
                        value={lead.status}
                        onChange={(event) =>
                          updateStatus(lead.id, event.target.value)
                        }
                        className="rounded-lg border bg-white px-2 py-2 text-xs outline-none focus:border-emerald-700"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}

                {filteredLeads.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-4 py-10 text-center text-gray-500"
                    >
                      No leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Showing {filteredLeads.length} of {leads.length} leads
          </p>
        </section>
      </main>
    </div>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default AdminLeads;