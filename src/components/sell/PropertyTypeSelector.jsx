const propertyTypes = [
  {
    id: "residential",
    title: "Residential",
    description: "Houses, apartments, villas and more",
    icon: "🏠",
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Shops, offices, warehouses and more",
    icon: "🏢",
  },
  {
    id: "agricultural",
    title: "Agricultural Land",
    description: "Farmland and agricultural properties",
    icon: "🌾",
  },
  {
    id: "plots",
    title: "Plots",
    description: "Residential and commercial plots",
    icon: "📐",
  },
];

function PropertyTypeSelector({ selectedType, onSelect }) {
  return (
    <div className="property-type-grid">
      {propertyTypes.map((property) => (
        <button
          type="button"
          key={property.id}
          className={`property-type-card ${
            selectedType === property.id ? "selected" : ""
          }`}
          onClick={() => onSelect(property.id)}
        >
          <span className="property-type-icon">
            {property.icon}
          </span>

          <h3>{property.title}</h3>

          <p>{property.description}</p>

          {selectedType === property.id && (
            <span className="property-selected">
              ✓ Selected
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

export default PropertyTypeSelector;