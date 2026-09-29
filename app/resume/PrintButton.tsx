"use client";
import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-primary inline-flex min-h-11 items-center gap-2 text-sm"
    >
      Print / Save as PDF <Printer className="w-4 h-4" />
    </button>
  );
}
