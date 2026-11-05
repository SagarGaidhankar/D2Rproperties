
const propertyOptions = {
  residential: {
    heading: "Residential Property Details",
    types: ["Apartment", "Independent House", "Villa", "Duplex", "Penthouse"],
  },
  commercial: {
    heading: "Commercial Property Details",
    types: ["Office", "Shop", "Showroom", "Warehouse", "Industrial Building"],
  },
  agricultural: {
    heading: "Agricultural Land Details",
    types: ["Agricultural Land", "Farm Land", "Orchard", "Plantation"],
  },
  plots: {
    heading: "Plot Details",
    types: ["Residential Plot", "Commercial Plot", "Industrial Plot"],
  },
};

function PropertyDetailsForm({ selectedType, formData, onChange }) {
  const options = propertyOptions[selectedType];

  const updateField = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const renderInput = (label, name, type = "text", placeholder = "") => (
    <div className="sell-field" key={name}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name] || ""}
        onChange={updateField}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        min={type === "number" ? "0" : undefined}
      />
    </div>
  );

  const renderSelect = (label, name, values) => (
    <div className="sell-field" key={name}>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={formData[name] || ""}
        onChange={updateField}
      >
        <option value="">Select {label}</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="property-details-form">
      <h2>{options.heading}</h2>
      <p className="form-subtitle">
        Provide accurate information about your property.
      </p>

      <div className="sell-fields-grid">
        {renderInput("Property Title", "propertyTitle")}
        {renderSelect("Property Type", "propertySubType", options.types)}
        {renderInput("Area", "propertyArea", "number")}
        {renderSelect("Area Unit", "areaUnit", ["Sq. Ft.", "Sq. Yards", "Acres", "Cents", "Guntas", "Hectares"])}

        {selectedType === "residential" && (
          <>
            {renderSelect("Bedrooms (BHK)", "bedrooms", ["1", "2", "3", "4", "5", "6+"])}
            {renderSelect("Bathrooms", "bathrooms", ["1", "2", "3", "4", "5+"])}
            {renderSelect("Balconies", "balconies", ["0", "1", "2", "3+"])}
            {renderSelect("Furnishing", "furnishing", ["Unfurnished", "Semi-Furnished", "Fully Furnished"])}
            {renderSelect("Property Status", "propertyStatus", ["Ready to Move", "Under Construction"])}
            {renderSelect("Parking", "parking", ["None", "1 Car", "2 Cars", "3+ Cars"])}
          </>
        )}

        {selectedType === "commercial" && (
          <>
            {renderSelect("Washrooms", "washrooms", ["0", "1", "2", "3", "4+"])}
            {renderSelect("Furnishing", "furnishing", ["Unfurnished", "Semi-Furnished", "Fully Furnished"])}
            {renderSelect("Property Status", "propertyStatus", ["Ready to Move", "Under Construction"])}
            {renderSelect("Parking", "parking", ["None", "1 Car", "2 Cars", "3+ Cars"])}
          </>
        )}

        {selectedType === "agricultural" && (
          <>
            {renderSelect("Water Source", "waterSource", ["Borewell", "Open Well", "Canal", "Rain-fed", "Multiple Sources", "None"])}
            {renderSelect("Road Access", "roadAccess", ["Yes", "No"])}
            {renderSelect("Soil Type", "soilType", ["Black Soil", "Red Soil", "Sandy Soil", "Mixed Soil", "Other"])}
            {renderSelect("Land Type", "landType", ["Irrigated", "Rain-fed", "Dry Land"])}
          </>
        )}

        {selectedType === "plots" && (
          <>
            {renderInput("Plot Length (Feet)", "plotLength", "number")}
            {renderInput("Plot Width (Feet)", "plotWidth", "number")}
            {renderSelect("Facing", "facing", ["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"])}
            {renderSelect("Approval Status", "approvalStatus", ["DTCP Approved", "RERA Approved", "BMRDA Approved", "Other Approved", "Not Approved", "Not Applicable"])}
            {renderInput("Road Width (Feet)", "roadWidth", "number")}
          </>
        )}
      </div>

      <div className="sell-field description-field">
        <label htmlFor="description">Property Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          value={formData.description || ""}
          onChange={updateField}
          placeholder="Describe your property, its features and important details..."
        />
      </div>
    </div>
  );
}

export default PropertyDetailsForm;
