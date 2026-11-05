
const trustItems = [
  {
    icon: "🛡️",
    title: "100% Verified Listings",
  },
  {
    icon: "⚖️",
    title: "Legal Document Checks",
  },
  {
    icon: "📍",
    title: "Physical Site Visits",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
  },
];

function TrustIndicators() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-7 sm:px-6 lg:grid-cols-4">

      {trustItems.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-center gap-3 rounded-lg bg-green-50 p-4 text-center sm:text-left"
        >
          <span className="text-2xl">{item.icon}</span>

          <span className="text-xs font-semibold text-green-950 sm:text-sm">
            {item.title}
          </span>
        </div>
      ))}

    </section>
  );
}

export default TrustIndicators;
