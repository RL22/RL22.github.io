"use client";
import { useEffect } from "react";
import { CalendarClock } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "30min";
const CAL_LINK = "rodlew/30min";

export default function BookACallButton({ className = "" }: { className?: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={`btn-outline flex items-center justify-center gap-2 ${className}`}
    >
      Book a call <CalendarClock className="w-4 h-4" />
    </button>
  );
}
