
const states = [
  "Karnataka",
  "Maharashtra",
  "Telangana",
  "Andhra Pradesh",
  "Tamil Nadu",
  "Kerala",
  "Goa",
  "Other",
];

function LocationForm({ formData, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>Where is your property located?</h2>
      <p className="form-subtitle">
        Provide the exact location so buyers can find your property.
      </p>

      <div className="sell-fields-grid">
        <div className="sell-field">
          <label>State *</label>
          <select
            name="state"
            value={formData.state || ""}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="sell-field">
          <label>City / District *</label>
          <input
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
            placeholder="Enter city or district"
          />
        </div>

        <div className="sell-field">
          <label>Locality / Village *</label>
          <input
            name="locality"
            value={formData.locality || ""}
            onChange={handleChange}
            placeholder="Enter locality or village"
          />
        </div>

        <div className="sell-field">
          <label>PIN Code *</label>
          <input
            name="pinCode"
            type="text"
            inputMode="numeric"
            maxLength="6"
            value={formData.pinCode || ""}
            onChange={handleChange}
            placeholder="6-digit PIN code"
          />
        </div>

        <div className="sell-field full-width">
          <label>Full Property Address *</label>
          <textarea
            name="address"
            rows="4"
            value={formData.address || ""}
            onChange={handleChange}
            placeholder="Enter survey number, street, landmark and complete address"
          />
        </div>
      </div>

      <div className="location-note">
        <span>📍</span>
        <p>
          Make sure the location details are accurate.
          This helps genuine buyers discover your property.
        </p>
      </div>
    </div>
  );
}

export default LocationForm;
