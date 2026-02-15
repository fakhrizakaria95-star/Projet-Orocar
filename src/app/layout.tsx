import type { Metadata } from "next";
import "./globals.css"; // <-- CETTE LIGNE EST CRUCIALE

export const metadata: Metadata = {
  title: "OROCAR - Premium Mobility",
  description: "Location de voiture sur mesure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}