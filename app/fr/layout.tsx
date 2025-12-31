import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat360 | Chat IA pour concessionnaires automobiles canadiens | HookTXT",
  description: "Chat360 transforme vos visiteurs web en rendez-vous. IA bilingue (français/anglais), recherche d'inventaire en temps réel, score intelligent des prospects. Installation en 14 jours.",
  keywords: ["chat IA", "concessionnaires auto", "Canada", "IA bilingue", "concessionnaire automobile", "génération de prospects", "français", "anglais"],
};

export default function FrenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
