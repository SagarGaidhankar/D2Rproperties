
import { useState } from "react";

function PropertySearch() {
  const [activeTab, setActiveTab] = useState("buy");

  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    budget: "",
    bhk: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();

    console.log({
      type: activeTab,
      ...filters,
    });

    // We'll connect this to the property API later.
  };

  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6">

      <div className="rounded-xl bg-white p-4 shadow-xl sm:p-5">

        {/* Buy / Sell tabs */}
        <div className="mb-5 flex gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("buy")}
            className={`rounded-lg px-8 py-2 font-semibold ${
              activeTab === "buy"
                ? "bg-green-900 text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            🏠 Buy
          </button>

          <button
            id="sell"
            type="button"
            onClick={() => setActiveTab("sell")}
            className={`rounded-lg px-8 py-2 font-semibold ${
              activeTab === "sell"
                ? "bg-green-900 text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            🔑 Sell
          </button>
        </div>

        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">

            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="min-w-0 rounded-lg border border-gray-300 p-3 outline-none focus:border-green-800"
            >
              <option value="">Location</option>
              <option value="Kalaburagi">Kalaburagi</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>

            <select
              name="propertyType"
              value={filters.propertyType}
              onChange={handleChange}
              className="min-w-0 rounded-lg border border-gray-300 p-3 outline-none focus:border-green-800"
            >
              <option value="">Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Independent House">Independent House</option>
              <option value="Plot">Plot</option>
              <option value="Villa">Villa</option>
            </select>

            <select
              name="budget"
              value={filters.budget}
              onChange={handleChange}
              className="min-w-0 rounded-lg border border-gray-300 p-3 outline-none focus:border-green-800"
            >
              <option value="">Budget</option>
              <option value="below-25">Below ₹25 Lakhs</option>
              <option value="25-50">₹25–50 Lakhs</option>
              <option value="50-75">₹50–75 Lakhs</option>
              <option value="above-75">Above ₹75 Lakhs</option>
            </select>

            <select
              name="bhk"
              value={filters.bhk}
              onChange={handleChange}
              className="min-w-0 rounded-lg border border-gray-300 p-3 outline-none focus:border-green-800"
            >
              <option value="">BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4+">4+ BHK</option>
            </select>

            <button
              type="submit"
              className="rounded-lg bg-green-900 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              🔍 Search Properties
            </button>

          </div>
        </form>
      </div>
    </section>
  );
}

export default PropertySearch;
