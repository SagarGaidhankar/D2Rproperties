
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <Link to={`/properties/${property.id}`}>
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
      </Link>

      <div className="p-4">
        <p className="text-sm text-gray-500">
          📍 {property.location}
        </p>

        <h3 className="mt-2 text-xl font-bold text-green-950">
          {formattedPrice}
        </h3>

        <p className="mt-2 text-sm font-semibold text-green-900">
          {property.title}
        </p>

        <div className="mt-3 flex flex-wrap justify-between gap-2 border-t pt-3 text-sm text-gray-600">
          <span>🛏️ {property.bhk}</span>
          <span>📐 {property.area}</span>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="mt-4 block rounded-lg bg-green-900 py-2 text-center text-sm font-semibold text-white hover:bg-green-800"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;
