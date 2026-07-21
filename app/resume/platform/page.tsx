import type { Metadata } from "next";
import ResumeSheet from "../ResumeSheet";

export const metadata: Metadata = {
  title: "Rodney L. Lewis | Resume (Platform)",
  description:
    "Platform-focused resume of Rodney L. Lewis: component systems, CMS architecture, and the conventions teams build on.",
  robots: { index: false },
};

export default function ResumePlatformPage() {
  return <ResumeSheet variant="platform" />;
}
