import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "Airdev | The smarter way to launch your marketplace",
  description:
    "We use the latest AI & no-code technology to help people launch fully custom marketplace in a fraction of time and cost of traditional developers",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The smarter way to launch your marketplace",
    description:
      "We use the latest AI & no-code technology to help people launch fully custom marketplace in a fraction of time and cost of traditional developers",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The smarter way to launch your marketplace",
    description:
      "We use the latest AI & no-code technology to help people launch fully custom marketplace in a fraction of time and cost of traditional developers",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function HomePage() {
  return <Index />;
}
