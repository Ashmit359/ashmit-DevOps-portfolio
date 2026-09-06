import type { EmailPayload, EmailProvider } from "../types";

/**
 * Gmail email provider (optional).
 *
 * Only activated when EMAIL_PROVIDER=gmail and the required
 * environment variables are present. Credentials are read from
 * process.env on the server only — never bundled into client code.
 */
export const gmailProvider: EmailProvider = {
  name: "gmail",
  isConfigured() {
    return Boolean(
      process.env.GMAIL_CLIENT_ID &&
        process.env.GMAIL_CLIENT_SECRET &&
        process.env.GMAIL_REFRESH_TOKEN &&
        process.env.GMAIL_SENDER_ADDRESS
    );
  },
  async send(_payload: EmailPayload) {
    // [EDIT: Wire up the Gmail API (googleapis) or an SMTP relay here
    // once credentials are provisioned]. Left unimplemented so the
    // contact form still works end-to-end without Gmail configured.
    throw new Error(
      "Gmail provider is not implemented yet — see lib/email/providers/gmail.ts"
    );
  },
};
