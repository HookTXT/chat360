import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat360 | Chat IA pour concessionnaires automobiles canadiens | HookTXT",
  description: "Chat360 transforme vos visiteurs web en rendez-vous. IA bilingue (français/anglais), recherche d'inventaire en temps réel, score intelligent des prospects. Installation en 14 jours.",
  keywords: ["chat IA", "concessionnaires auto", "Canada", "IA bilingue", "concessionnaire automobile", "génération de prospects", "français", "anglais"],
  openGraph: {
    title: "Chat360 | Chat IA pour concessionnaires automobiles canadiens",
    description: "Chat360 transforme vos visiteurs web en rendez-vous. IA bilingue, recherche d'inventaire en temps réel, score intelligent des prospects.",
    url: "https://chat360.ca/fr",
    siteName: "Chat360",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat360 | Chat IA pour concessionnaires automobiles canadiens",
    description: "Chat360 transforme vos visiteurs web en rendez-vous. IA bilingue, recherche d'inventaire en temps réel, score intelligent des prospects.",
  },
  alternates: {
    canonical: "https://chat360.ca/fr",
    languages: {
      "en": "https://chat360.ca",
      "fr": "https://chat360.ca/fr",
    },
  },
};

export default function FrenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
