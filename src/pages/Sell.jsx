
import { useState } from "react";
import PropertyTypeSelector from "../components/sell/PropertyTypeSelector";
import PropertyDetailsForm from "../components/sell/PropertyDetailsForm";
import LocationForm from "../components/sell/LocationForm";
import PricingMediaForm from "../components/sell/PricingMediaForm";
import OwnerDetailsForm from "../components/sell/OwnerDetailsForm";
import SubmissionSuccess from "../components/sell/SubmissionSuccess";
import "../styles/sell.css";

const steps = [
  "Property Type",
  "Property Details",
  "Location",
  "Pricing & Media",
  "Owner Details",
];

function Sell() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1 && !selectedType) {
      newErrors.propertyType = "Please select a property category.";
    }

    if (currentStep === 2) {
      if (!formData.propertyTitle?.trim())
        newErrors.propertyTitle = "Property title is required.";

      if (!formData.propertySubType)
        newErrors.propertySubType = "Select property type.";

      if (!formData.propertyArea || Number(formData.propertyArea) <= 0)
        newErrors.propertyArea = "Enter a valid property area.";

      if (!formData.areaUnit)
        newErrors.areaUnit = "Select area unit.";

      if (!formData.description?.trim())
        newErrors.description = "Property description is required.";
    }

    if (currentStep === 3) {
      if (!formData.state)
        newErrors.state = "Select a state.";

      if (!formData.city?.trim())
        newErrors.city = "City or district is required.";

      if (!formData.locality?.trim())
        newErrors.locality = "Locality or village is required.";

      if (!/^\d{6}$/.test(formData.pinCode || ""))
        newErrors.pinCode = "Enter a valid 6-digit PIN code.";

      if (!formData.address?.trim())
        newErrors.address = "Property address is required.";
    }

    if (currentStep === 4) {
      if (!formData.price || Number(formData.price) <= 0)
        newErrors.price = "Enter a valid expected price.";

      if (!formData.priceType)
        newErrors.priceType = "Select a price type.";

      if (!formData.images?.length)
        newErrors.images = "Upload at least one property image.";
    }

    if (currentStep === 5) {
      if (!formData.ownerName?.trim())
        newErrors.ownerName = "Full name is required.";

      if (!/^[6-9]\d{9}$/.test(formData.mobile || ""))
        newErrors.mobile = "Enter a valid 10-digit Indian mobile number.";

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email || ""))
        newErrors.email = "Enter a valid email address.";

      if (!formData.ownerType)
        newErrors.ownerType = "Select your role.";

      if (!formData.contactPreference)
        newErrors.contactPreference = "Select a contact method.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    setCurrentStep((prev) => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateStep()) return;

    // Frontend demo only. Connect this payload to the backend API later.
    const submission = {
      ...formData,
      propertyType: selectedType,
      submittedAt: new Date().toISOString(),
    };

    console.log("Property submission:", submission);

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return <SubmissionSuccess />;
  }

  return (
    <div className="sell-page">
      <div className="sell-container">
        <div className="sell-heading">
          <span className="sell-eyebrow">LIST YOUR PROPERTY</span>

          <h1>Let's find the right buyer for your property.</h1>

          <p>
            Share your property details and connect with genuine
            buyers through NIDHI.
          </p>
        </div>

        <div className="sell-form-card">
          <div className="sell-stepper">
            {steps.map((step, index) => {
              const stepNumber = index + 1;

              return (
                <div
                  key={step}
                  className={`sell-step ${currentStep === stepNumber ? "active" : ""
                    } ${currentStep > stepNumber ? "completed" : ""
                    }`}
                >
                  <div className="step-number">
                    {currentStep > stepNumber ? "✓" : stepNumber}
                  </div>

                  <span>{step}</span>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {Object.keys(errors).length > 0 && (
              <div className="validation-summary" role="alert">
                <strong>Please correct the following:</strong>
                <ul>
                  {Object.values(errors).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="sell-form-content">
              {currentStep === 1 && (
                <>
                  <h2>What would you like to sell?</h2>

                  <p className="form-subtitle">
                    Select the category that best describes your property.
                  </p>

                  <PropertyTypeSelector
                    selectedType={selectedType}
                    onSelect={(type) => {
                      if (type !== selectedType) {
                        setSelectedType(type);
                        setFormData({});
                        setErrors({});
                      }
                    }}
                  />

                  {errors.propertyType && (
                    <p className="field-error">{errors.propertyType}</p>
                  )}
                </>
              )}

              {currentStep === 2 && (
                <PropertyDetailsForm
                  selectedType={selectedType}
                  formData={formData}
                  onChange={handleFieldChange}
                  errors={errors}
                />
              )}

              {currentStep === 3 && (
                <LocationForm
                  formData={formData}
                  onChange={handleFieldChange}
                  errors={errors}
                />
              )}

              {currentStep === 4 && (
                <PricingMediaForm
                  formData={formData}
                  onChange={handleFieldChange}
                  errors={errors}
                />
              )}

              {currentStep === 5 && (
                <OwnerDetailsForm
                  formData={formData}
                  onChange={handleFieldChange}
                  errors={errors}
                />
              )}
            </div>

            <div className="sell-form-footer">
              <button
                type="button"
                className="back-button"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                ← Back
              </button>

              {currentStep < 5 ? (
                <button type="button" className="next-button" onClick={handleNext}>
                  Continue →
                </button>
              ) : (
                <button type="submit" className="next-button">
                  Submit Property →
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sell;
