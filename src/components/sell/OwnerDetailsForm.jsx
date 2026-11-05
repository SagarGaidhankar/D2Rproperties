
function OwnerDetailsForm({ formData, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <h2>Almost there! Tell us about yourself.</h2>

      <p className="form-subtitle">
        Buyers will use these details to contact you.
      </p>

      <div className="sell-fields-grid">
        <div className="sell-field">
          <label>Full Name *</label>
          <input
            name="ownerName"
            value={formData.ownerName || ""}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="sell-field">
          <label>Mobile Number *</label>
          <input
            name="mobile"
            type="tel"
            inputMode="numeric"
            maxLength="10"
            value={formData.mobile || ""}
            onChange={(e) =>
              onChange("mobile", e.target.value.replace(/\D/g, ""))
            }
            placeholder="10-digit mobile number"
          />
        </div>

        <div className="sell-field">
          <label>Email Address *</label>
          <input
            name="email"
            type="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </div>

        <div className="sell-field">
          <label>I am a *</label>
          <select
            name="ownerType"
            value={formData.ownerType || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Owner">Property Owner</option>
            <option value="Agent">Real Estate Agent</option>
            <option value="Builder">Builder / Developer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sell-field full-width">
          <label>Preferred Contact Method *</label>
          <select
            name="contactPreference"
            value={formData.contactPreference || ""}
            onChange={handleChange}
          >
            <option value="">Select Contact Method</option>
            <option value="Phone">Phone Call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
            <option value="Any">Any Method</option>
          </select>
        </div>
      </div>

      <div className="owner-privacy-note">
        🔒 Your contact information will only be used for property-related
        communication.
      </div>
    </div>
  );
}

export default OwnerDetailsForm;
