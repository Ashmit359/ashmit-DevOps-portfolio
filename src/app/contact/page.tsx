import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      description="Send a message directly — no email client required. Delivery to an inbox is optional and configured server-side; the form always works even without it."
    >
      <div className="max-w-xl">
        <ContactForm />
      </div>
    </Section>
  );
}
