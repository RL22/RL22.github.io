"use client";
import { useEffect, useState } from "react";
import { CalendarClock } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "30min";
const CAL_LINK = "rodlew/30min";
const CAL_URL = `https://cal.com/${CAL_LINK}`;

// Renders as a plain link to the booking page, then upgrades to the modal
// embed once the Cal script confirms it loaded. If the script is blocked,
// offline, or slow, the link still works.
export default function BookACallButton({ className = "" }: { className?: string }) {
  const [embedReady, setEmbedReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const cal = await getCalApi({ namespace: CAL_NAMESPACE });
        if (cancelled) return;
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        setEmbedReady(true);
      } catch {
        // Leave the plain link in place.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const embedProps = embedReady
    ? {
        "data-cal-namespace": CAL_NAMESPACE,
        "data-cal-link": CAL_LINK,
        "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
      }
    : {};

  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...embedProps}
      className={`btn-outline flex items-center justify-center gap-2 ${className}`}
    >
      Book a call <CalendarClock className="w-4 h-4" />
    </a>
  );
}
