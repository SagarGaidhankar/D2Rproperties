
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import PropertyCard from "../components/home/PropertyCard";
import {properties} from "../data/properties";

function Properties() {
  const [searchParams] = useSearchParams();

  const location = searchParams.get("location") || "";
  const propertyType = searchParams.get("propertyType") || "";
  const bhk = searchParams.get("bhk") || "";
  const budget = searchParams.get("budget") || "";

  const filteredProperties = properties.filter((property) => {
    const matchesLocation =
      !location || property.location === location;

    const matchesType =
      !propertyType || property.propertyType === propertyType;

    const matchesBhk =
      !bhk || property.bhk === bhk;

    let matchesBudget = true;

    if (budget === "below-25") {
      matchesBudget = property.price < 2500000;
    } else if (budget === "25-50") {
      matchesBudget =
        property.price >= 2500000 && property.price <= 5000000;
    } else if (budget === "50-75") {
      matchesBudget =
        property.price > 5000000 && property.price <= 7500000;
    } else if (budget === "above-75") {
      matchesBudget = property.price > 7500000;
    }

    return (
      matchesLocation &&
      matchesType &&
      matchesBhk &&
      matchesBudget
    );
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-3xl font-bold text-green-950">
            Properties for Sale
          </h1>

          <p className="mt-2 text-gray-600">
            Discover a place that feels like home.
          </p>

          <p className="my-6 text-sm font-medium text-gray-600">
            {filteredProperties.length} properties found
          </p>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-white p-10 text-center shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800">
                No properties found
              </h2>

              <p className="mt-2 text-gray-500">
                Try changing your search filters.
              </p>
            </div>
          )}

        </div>
      </main>
    </>
  );
}

export default Properties;
