import type { Metadata } from "next";
import MonitoringSection from "@/components/monitoring/MonitoringSection";

export const metadata: Metadata = {
  title: "Live Infrastructure Monitoring | Ashmit Kumar Sinha",
  description:
    "Real-time metrics from the Kubernetes cluster this portfolio is deployed on, proxied server-side from an internal Prometheus instance.",
};

export default function MonitoringPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Reuse the existing hero particle/network background component here if you have
          one shared across pages, for visual consistency with Home/AWS/Kubernetes. */}
      <MonitoringSection />
    </main>
  );
}
