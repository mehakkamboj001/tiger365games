import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NEXT_PUBLIC_SITE_URL } from "../lib/config";
import { WhatsAppLink } from "../components/whatsapp-link";

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_SITE_URL),
  title: {
    default: "Tiger365Games | Your sports and games home",
    template: "%s | Tiger365Games",
  },
  description:
    "Discover sports, original game concepts and creative studios with Tiger365Games — a fan-first sports and arcade preview.",
  applicationName: "Tiger365Games",
  icons: {
    icon: "/images/tiger365games-icon.svg",
  },
  keywords: [
    "sports",
    "cricket",
    "football",
    "tennis",
    "sports news",
    "fixtures",
    "arcade games",
    "game concepts",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tiger365Games",
    title: "Tiger365Games | Your sports and games home",
    description:
      "Your home for sports, fixtures and games.",
    url: "/",
    images: [
      {
        url: "/images/tiger365games-logo.png",
        alt: "Tiger365Games logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiger365Games | Your sports and games home",
    description: "Your home for sports, fixtures and games.",
    images: ["/images/tiger365games-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppLink />
      </body>
    </html>
  );
}
