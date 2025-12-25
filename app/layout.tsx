import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat360 | AI Chat pour concessionnaires automobiles | HookTXT",
  description: "Chat360 transforme les visiteurs de votre site en rendez-vous. AI français natif, recherche d'inventaire en temps réel, lead scoring intelligent. Setup en 14 jours.",
  keywords: ["AI chat", "auto dealers", "Quebec", "French AI", "car dealership", "lead generation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  );
}
