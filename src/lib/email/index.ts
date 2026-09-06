import { gmailProvider } from "./providers/gmail";
import { futureProvider } from "./providers/future-provider";
import type { EmailPayload } from "./types";

const providers = {
  gmail: gmailProvider,
  "future-provider": futureProvider,
} as const;

/**
 * Sends a contact-form submission through whichever provider is
 * configured via EMAIL_PROVIDER. When no provider is configured
 * (the default), the submission is logged server-side instead of
 * failing — the contact form always works, email delivery is opt-in.
 */
export async function sendContactEmail(payload: EmailPayload): Promise<{ delivered: boolean }> {
  const selected = process.env.EMAIL_PROVIDER as keyof typeof providers | "none" | undefined;

  if (!selected || selected === "none" || !(selected in providers)) {
    console.log("[contact] No email provider configured. Submission:", payload);
    return { delivered: false };
  }

  const provider = providers[selected];
  if (!provider.isConfigured()) {
    console.log(`[contact] Provider "${selected}" selected but not configured. Submission:`, payload);
    return { delivered: false };
  }

  await provider.send(payload);
  return { delivered: true };
}
