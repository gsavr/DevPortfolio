import emailjs from "@emailjs/browser";

export const sendEmail = async (
  email: string,
  latitude: number,
  longitude: number,
) => {
  try {
    const templateParams = {
      email,
      latitude,
      longitude,
    };

    const response = await emailjs.send(
      "service_784y7ve",
      "template_zuar2zl",
      templateParams,
      "LQV0njcnqS4hUqoWI", //public key
    );

    console.log("SUCCESS!", response.status, response.text);
    return response; // Return response if successful
  } catch (error) {
    console.log("FAILED...", error);
    throw error; // Throw error to be caught by caller
  }
};
