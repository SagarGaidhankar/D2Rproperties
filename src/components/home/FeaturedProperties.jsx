
import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    title: "Modern Independent House",
    location: "Kalaburagi",
    price: "₹75 Lakhs",
    bhk: "3 BHK",
    area: "1,800 Sq.Ft.",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: 2,
    title: "Contemporary Family Home",
    location: "Kalaburagi",
    price: "₹62 Lakhs",
    bhk: "2 BHK",
    area: "1,200 Sq.Ft.",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    id: 3,
    title: "Premium Modern Villa",
    location: "Kalaburagi",
    price: "₹48 Lakhs",
    bhk: "2 BHK",
    area: "1,000 Sq.Ft.",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
  },
  {
    id: 4,
    title: "Residential Plot",
    location: "Kalaburagi",
    price: "₹35 Lakhs",
    bhk: "Plot",
    area: "1,200 Sq.Ft.",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
  },
];

function FeaturedProperties() {
  return (
    <section
      id="featured"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6"
    >

      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">
          Featured Properties
        </h2>

        <a
          href="#featured"
          className="shrink-0 text-sm font-semibold text-green-800 hover:underline"
        >
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>

      <p className="mt-5 text-center text-xs text-gray-500">
        Sample property data for development only.
      </p>

    </section>
  );
}

export default FeaturedProperties;
