"use client";
import { useEffect, useRef, useState } from "react";
import { CalendarClock } from "lucide-react";

const CAL_NAMESPACE = "30min";
const CAL_LINK = "rodlew/30min";
const CAL_URL = `https://cal.com/${CAL_LINK}`;

// Renders as a plain link to the booking page, then upgrades to the modal
// embed once the Cal script confirms it loaded. The embed (and Cal's
// third-party script and cookie) loads only on intent, the first hover,
// focus, or touch, so it never competes with first paint. If the script is
// blocked, offline, or slow, the link still works.
export default function BookACallButton({ className = "" }: { className?: string }) {
  const [embedReady, setEmbedReady] = useState(false);
  const requested = useRef(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const loadEmbed = async () => {
    if (requested.current) return;
    requested.current = true;
    try {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (!mounted.current) return;
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      setEmbedReady(true);
    } catch {
      // Leave the plain link in place.
    }
  };

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
      // Once the embed is live, Cal's own click listener opens the modal but
      // never calls preventDefault, so the link would also open a new tab.
      onClick={(event) => {
        if (embedReady) event.preventDefault();
      }}
      onPointerEnter={loadEmbed}
      onFocus={loadEmbed}
      onTouchStart={loadEmbed}
      className={`btn-outline flex items-center justify-center gap-2 ${className}`}
    >
      Book a call <CalendarClock className="w-4 h-4" />
    </a>
  );
}
