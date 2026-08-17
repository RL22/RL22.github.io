import type { Metadata } from "next";
import VantaResumeSheet from "./VantaResumeSheet";

export const metadata: Metadata = {
  title: "Rodney L. Lewis | Resume (Vanta)",
  description: "Resume of Rodney L. Lewis, tailored for the Vanta Senior Web Developer application.",
  robots: { index: false, follow: false },
};

export default function VantaResumePage() {
  return <VantaResumeSheet />;
}
