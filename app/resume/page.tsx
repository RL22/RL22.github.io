import type { Metadata } from "next";
import ResumeSheet from "./ResumeSheet";

const title = "Rodney L. Lewis | Resume";
const description =
  "Resume of Rodney L. Lewis, Senior Web Platform Engineer in Oakland, CA. Nine years owning marketing-site lifecycles.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resume/" },
  openGraph: {
    title,
    description,
    url: "/resume/",
    type: "profile",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function ResumePage() {
  return <ResumeSheet variant="marketing" />;
}
