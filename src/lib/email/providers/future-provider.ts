import type { EmailPayload, EmailProvider } from "../types";

/**
 * Placeholder for a future transactional email provider
 * (e.g. Resend, SES, Postmark, SendGrid). Swap this in by
 * setting EMAIL_PROVIDER accordingly once chosen — the contact
 * route (src/app/api/contact/route.ts) does not need to change.
 */
export const futureProvider: EmailProvider = {
  name: "future-provider",
  isConfigured() {
    return false;
  },
  async send(_payload: EmailPayload) {
    throw new Error("future-provider is not configured yet.");
  },
};
