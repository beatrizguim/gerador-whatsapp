import type { Metadata } from "next";
import { Geist, Geist_Mono, Red_Hat_Display, DM_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gerador de Link para WhatsApp | RD Station",
  description: "Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais! Ferramenta gratuita e fácil de usar. Gere links personalizados com mensagem pré-preenchida.",
  keywords: ["gerador link whatsapp", "link whatsapp", "whatsapp link generator", "criar link whatsapp", "rd station"],
  openGraph: {
    title: "Gerador de Link para WhatsApp | RD Station",
    description: "Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais!",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} ${dmSans.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
