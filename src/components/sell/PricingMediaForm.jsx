
import { useEffect, useState } from "react";

function PricingMediaForm({ formData, onChange }) {
  const [previews, setPreviews] = useState([]);

  const images = formData.images || [];

  useEffect(() => {
    const urls = images.map((file) => URL.createObjectURL(file));
    setPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const handleImages = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(
      (file) =>
        file.type.startsWith("image/") &&
        file.size <= 5 * 1024 * 1024
    );

    const combined = [...images, ...validFiles].slice(0, 10);

    onChange("images", combined);

    // Allows selecting the same file again after removal.
    e.target.value = "";
  };

  const removeImage = (index) => {
    onChange(
      "images",
      images.filter((_, i) => i !== index)
    );
  };

  const handleVideo = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      alert("Please select a valid video file.");
      e.target.value = "";
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      alert("Video must be smaller than 50 MB.");
      e.target.value = "";
      return;
    }

    onChange("video", file);
  };

  return (
    <div>
      <h2>Pricing & Property Media</h2>

      <p className="form-subtitle">
        Set your expected price and upload attractive property photos.
      </p>

      <div className="sell-fields-grid">
        <div className="sell-field">
          <label>Expected Price (₹) *</label>
          <input
            type="number"
            min="1"
            name="price"
            value={formData.price || ""}
            onChange={(e) => onChange("price", e.target.value)}
            placeholder="Enter expected price"
          />
        </div>

        <div className="sell-field">
          <label>Price Type *</label>
          <select
            value={formData.priceType || ""}
            onChange={(e) => onChange("priceType", e.target.value)}
          >
            <option value="">Select Price Type</option>
            <option value="Total Price">Total Property Price</option>
            <option value="Per Sq. Ft.">Per Sq. Ft.</option>
            <option value="Per Acre">Per Acre</option>
          </select>
        </div>

        <div className="sell-field">
          <label>Price Negotiable?</label>
          <select
            value={formData.negotiable || "Yes"}
            onChange={(e) => onChange("negotiable", e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div className="media-upload-section">
        <h3>Property Photos *</h3>

        <p>
          Upload up to 10 images. Each image must be under 5 MB.
        </p>

        <label className="upload-box">
          <span className="upload-icon">📷</span>
          <strong>Click to upload property images</strong>
          <span>PNG, JPG, JPEG · Maximum 10 images</span>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImages}
            disabled={images.length >= 10}
          />
        </label>

        {previews.length > 0 && (
          <div className="image-preview-grid">
            {previews.map((preview, index) => (
              <div className="image-preview" key={preview}>
                <img src={preview} alt={`Property ${index + 1}`} />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  aria-label={`Remove image ${index + 1}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <h3 className="video-heading">Property Video (Optional)</h3>

        <label className="video-upload">
          <span>🎥</span>
          {formData.video
            ? formData.video.name
            : "Choose a property video (Maximum 50 MB)"}

          <input
            type="file"
            accept="video/*"
            onChange={handleVideo}
          />
        </label>

        {formData.video && (
          <button
            type="button"
            className="remove-video"
            onClick={() => onChange("video", null)}
          >
            Remove video
          </button>
        )}
      </div>
    </div>
  );
}

export default PricingMediaForm;
