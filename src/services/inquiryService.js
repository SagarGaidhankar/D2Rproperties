// Temporary mock API.
// Later, we will replace this with the Spring Boot API call.

export const submitInquiry = async (inquiryData) => {
  console.log("Inquiry submitted:", inquiryData);

  // Simulate an API request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Your inquiry has been submitted successfully!",
      });
    }, 1000);
  });
};