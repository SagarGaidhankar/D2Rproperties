
import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import {properties} from "../../data/properties";

function FeaturedProperties() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">

      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">
          Featured Properties
        </h2>

        <Link
          to="/buy"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {properties.slice(0, 4).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <p className="mt-5 text-center text-xs text-gray-500">
        Sample property data for development only.
      </p>

    </section>
  );
}

export default FeaturedProperties;
