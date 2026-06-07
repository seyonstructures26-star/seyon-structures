import { EMAIL } from "../data/contact";

export async function submitEnquiry({ name, phone, service, message }) {
  const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      service,
      message,
      _subject: `New Website Enquiry — ${service}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send enquiry");
  }

  const data = await response.json();
  if (data.success !== "true" && data.success !== true) {
    throw new Error(data.message || "Failed to send enquiry");
  }

  return data;
}
