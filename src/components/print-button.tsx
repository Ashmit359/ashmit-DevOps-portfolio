"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="focus-ring flex items-center gap-2 rounded-md border border-graphite-600 px-4 py-2 text-sm text-graphite-200"
    >
      <Printer size={15} /> Print
    </button>
  );
}
