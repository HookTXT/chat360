import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat360 | AI Chat for Canadian Auto Dealers | HookTXT",
  description: "Chat360 transforms your website visitors into appointments. Bilingual AI (English/French), real-time inventory search, intelligent lead scoring. Setup in 14 days.",
  keywords: ["AI chat", "auto dealers", "Canada", "bilingual AI", "car dealership", "lead generation", "French", "English"],
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
