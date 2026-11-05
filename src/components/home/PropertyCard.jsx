
function PropertyCard({ property }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Property image */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-48 w-full object-cover sm:h-52"
        />

        <span className="absolute right-3 top-3 rounded-full bg-green-900 px-3 py-1 text-xs font-semibold text-white">
          {property.status}
        </span>
      </div>

      {/* Property details */}
      <div className="p-4">

        <p className="text-sm text-gray-500">
          📍 {property.location}
        </p>

        <h3 className="mt-2 text-xl font-bold text-green-950">
          {property.price}
        </h3>

        <div className="mt-3 flex flex-wrap justify-between gap-2 border-t border-gray-100 pt-3 text-sm text-gray-600">
          <span>🛏️ {property.bhk}</span>
          <span>📐 {property.area}</span>
        </div>

        <p className="mt-3 text-sm font-semibold text-green-900">
          {property.title}
        </p>

        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-green-900 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
          onClick={() => console.log("Selected property:", property.id)}
        >
          View Details →
        </button>

      </div>
    </article>
  );
}

export default PropertyCard;
