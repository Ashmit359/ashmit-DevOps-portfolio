export interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailProvider {
  name: string;
  isConfigured(): boolean;
  send(payload: EmailPayload): Promise<void>;
}
