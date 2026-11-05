import { useParams, Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import InquiryForm from "../components/properties/InquiryForm";
import { properties } from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <>
        <Navbar />

        <div className="px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Property Not Found</h1>

          <Link
            to="/buy"
            className="mt-5 inline-block text-emerald-800 underline"
          >
            Browse Properties
          </Link>
        </div>
      </>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/buy"
          className="text-sm font-medium text-emerald-800 hover:underline"
        >
          ← Back to Properties
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Property information */}
          <div className="space-y-6 lg:col-span-2">
            <img
              src={property.image}
              alt={property.title}
              className="h-64 w-full rounded-2xl object-cover sm:h-96"
            />

            <div>
              <p className="text-sm font-medium text-emerald-800">
                {property.location}
              </p>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                {property.title}
              </h1>

              <p className="mt-3 text-2xl font-bold text-emerald-800">
                {formattedPrice}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-5 sm:grid-cols-3">
              <div>
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="mt-1 font-semibold">{property.bhk}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="mt-1 font-semibold">{property.area}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Property Type</p>
                <p className="mt-1 font-semibold">
                  {property.propertyType}
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-xl font-bold">About this property</h2>

              <p className="mt-3 leading-7 text-gray-600">
                {property.description}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Property Features</h2>

              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.features?.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Inquiry form */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <InquiryForm property={property} />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

export default PropertyDetails;