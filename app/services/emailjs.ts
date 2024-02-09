import emailjs from "@emailjs/browser";

export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  message: string,
) => {
  try {
    const templateParams = {
      name,
      email,
      phone: phone || "No phone provided",
      message,
    };

    const response = await emailjs.send(
      "default_service",
      "template_61aph43",
      templateParams,
      "LQV0njcnqS4hUqoWI",
    );

    console.log("SUCCESS!", response.status, response.text);
    return response; // Return response if successful
  } catch (error) {
    console.log("FAILED...", error);
    throw error; // Throw error to be caught by caller
  }
};
