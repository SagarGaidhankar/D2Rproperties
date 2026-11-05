import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitInquiry } from "../../services/inquiryService";

// 1. Define validation rules using Zod
const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must contain at least 3 characters"),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

function InquiryForm({ property }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");

  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  // 3. Submit the form
  const onSubmit = async (formData) => {
    setSuccessMessage("");
    setApiError("");

    try {
      const response = await submitInquiry({
        propertyId: property.id,
        ...formData,
      });

      if (response.success) {
        setSuccessMessage(response.message);
        reset();
      }
    } catch (error) {
      setApiError("Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-bold text-gray-900">
        Interested in this property?
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Share your details and our team will get in touch with you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className={inputClass}
            {...register("name")}
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Mobile Number
          </label>

          <input
            type="tel"
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            className={inputClass}
            {...register("phone")}
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Your Message
          </label>

          <textarea
            rows={4}
            placeholder="I'm interested in this property..."
            className={`${inputClass} resize-none`}
            {...register("message")}
          />

          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* API response */}
        {successMessage && (
          <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
            {successMessage}
          </p>
        )}

        {apiError && (
          <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {apiError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-emerald-800 px-5 py-3 font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </button>

        <p className="text-center text-xs text-gray-400">
          Your information will only be used to respond to your inquiry.
        </p>
      </form>
    </div>
  );
}

export default InquiryForm;