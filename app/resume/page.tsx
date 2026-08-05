import type { Metadata } from "next";
import ResumeSheet from "./ResumeSheet";

export const metadata: Metadata = {
  title: "Rodney L. Lewis | Resume",
  description:
    "Resume of Rodney L. Lewis, Senior Web Platform Engineer in Oakland, CA. Ten years owning marketing-site lifecycles.",
};

export default function ResumePage() {
  return <ResumeSheet variant="marketing" />;
}
