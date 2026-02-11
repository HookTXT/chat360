import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat360 | AI Chat for Canadian Auto Dealers | HookTXT",
  description: "Chat360 transforms your website visitors into appointments. Bilingual AI (English/French), real-time inventory search, intelligent lead scoring. Setup in 14 days.",
  keywords: ["AI chat", "auto dealers", "Canada", "bilingual AI", "car dealership", "lead generation", "French", "English"],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
        <Script
          src="https://chatwidgetpro.com/embed/widget.js"
          data-widget-id="42976402-cac6-466f-9f14-e0de1fc33d43"
          data-supabase-url="https://mjnuenpyxmybuwumwmma.supabase.co"
          data-supabase-key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbnVlbnB5eG15YnV3dW13bW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NzI1MTUsImV4cCI6MjA4MDU0ODUxNX0.93BMKobQZec97F8fvHZPC-QdeQ1f8FYmC_-akqv1-dA"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
