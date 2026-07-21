import type { Metadata } from "next";
import ResumeSheet from "../ResumeSheet";

export const metadata: Metadata = {
  title: "Rodney L. Lewis | Resume (Design)",
  description:
    "Design-engineer resume of Rodney L. Lewis: Figma to production, motion in code, component systems.",
  robots: { index: false },
};

export default function ResumeDesignPage() {
  return <ResumeSheet variant="design" />;
}
