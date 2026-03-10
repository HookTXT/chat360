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
  openGraph: {
    title: "Chat360 | AI Chat for Canadian Auto Dealers",
    description: "Chat360 transforms your website visitors into appointments. Bilingual AI (English/French), real-time inventory search, intelligent lead scoring.",
    url: "https://chat360.ca",
    siteName: "Chat360",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat360 | AI Chat for Canadian Auto Dealers",
    description: "Chat360 transforms your website visitors into appointments. Bilingual AI, real-time inventory search, intelligent lead scoring.",
  },
  alternates: {
    canonical: "https://chat360.ca",
    languages: {
      "en": "https://chat360.ca",
      "fr": "https://chat360.ca/fr",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HookTXT",
  url: "https://hooktxt.com",
  logo: "https://chat360.ca/favicon-32x32.png",
  description: "HookTXT develops Chat360, an AI-powered conversational sales platform for Canadian auto dealerships with native bilingual capabilities.",
  founder: {
    "@type": "Person",
    name: "Kevin Michaud",
    jobTitle: "Founder & CEO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "kevin@hooktxt.com",
    contactType: "sales",
    availableLanguage: ["English", "French"],
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  sameAs: [
    "https://hooktxt.com",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Chat360",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Chat360 is a 24/7 AI-powered sales agent designed for Canadian auto dealerships. It provides true bilingual conversation (English/French), real-time inventory search, intelligent lead scoring, and automated appointment booking. Based on aggregated data from 50+ Canadian dealerships, Chat360 achieves a 34% chat-to-appointment conversion rate and captures 47% of leads outside business hours.",
  url: "https://chat360.ca",
  author: {
    "@type": "Organization",
    name: "HookTXT",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "899",
      priceCurrency: "CAD",
      description: "For single-location dealerships",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "1499",
      priceCurrency: "CAD",
      description: "For growing dealerships",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
    bestRating: "5",
  },
  featureList: [
    "Bilingual AI (English/French)",
    "Real-time inventory search",
    "Intelligent lead scoring",
    "Automated appointment booking",
    "CRM integration (Activix, eLeads, VinSolutions)",
    "24/7 coverage",
    "OEM compliant (GA4, Shift Digital)",
    "Human takeover capability",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "14 days from kickoff to live. We handle everything—inventory integration, CRM sync, AI training. You just review and approve.",
      },
    },
    {
      "@type": "Question",
      name: "Does it really speak good French?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Native-level French, not translations. We train the AI on Quebec French specifically. Your customers won't know they're talking to AI.",
      },
    },
    {
      "@type": "Question",
      name: "What if a customer asks something the AI can't handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seamless escalation. The AI recognizes when to hand off and alerts your team with full conversation context. No dropped balls.",
      },
    },
    {
      "@type": "Question",
      name: "How does it know my inventory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We sync directly with your inventory feed. Every vehicle, every price, every spec—updated in real-time. When something sells, the AI knows.",
      },
    },
    {
      "@type": "Question",
      name: "What CRMs do you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Activix, eLeads, VinSolutions, DealerSocket, and more. If you use it, we can probably connect to it.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a long-term contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Month-to-month. We earn your business every month. If you're not happy, you can cancel anytime.",
      },
    },
    {
      "@type": "Question",
      name: "What if it doesn't work for us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We guarantee ROI. If you don't see results in 60 days, we keep optimizing at no extra cost until you do.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Chat360",
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Marc-Andre Dupont",
        jobTitle: "Sales Director",
      },
      reviewBody: "We were losing leads every evening and weekend. Now, the AI responds in 30 seconds, no matter the time. Last month, we had 12 sales that started with the chat.",
      publisher: { "@type": "Organization", name: "Honda Terrebonne" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Jean-Francois Arnold",
        jobTitle: "Owner",
      },
      reviewBody: "The French is perfect. Customers think they're talking to a real person. And when it's a hot lead, I get the alert directly on my phone.",
      publisher: { "@type": "Organization", name: "Arnold Chevrolet Buick GMC" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sophie Tremblay",
        jobTitle: "General Manager",
      },
      reviewBody: "We tried other solutions. Too expensive, too complicated, poor French. Chat360 is exactly what we needed. Setup in 2 weeks, ROI in 30 days.",
      publisher: { "@type": "Organization", name: "Auto Prestige Laval" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWMN3R83');`,
          }}
        />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWMN3R83"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        {children}
        <Script
          src="https://chatwidgetpro.com/embed/widget.js"
          data-widget-id="8447cbc5-0606-47e6-b17a-363efea204fb"
          data-supabase-url="https://mjnuenpyxmybuwumwmma.supabase.co"
          data-supabase-key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbnVlbnB5eG15YnV3dW13bW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NzI1MTUsImV4cCI6MjA4MDU0ODUxNX0.93BMKobQZec97F8fvHZPC-QdeQ1f8FYmC_-akqv1-dA"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
