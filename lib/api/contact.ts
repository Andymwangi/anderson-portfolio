export type ContactEnquiry = {
  name: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

export type ContactResult = { ok: true } | { ok: false; message: string };

/** Sends an enquiry to the contact API route. Never throws; failures are returned as a result. */
export async function sendContactEnquiry(payload: ContactEnquiry): Promise<ContactResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) return { ok: true };

    let message = "Could not send your message.";
    try {
      const data = (await response.json()) as { message?: string };
      if (data?.message) message = data.message;
    } catch {
      /* non-JSON error body */
    }
    return { ok: false, message };
  } catch {
    return { ok: false, message: "Network error. Please try again or email directly." };
  }
}
