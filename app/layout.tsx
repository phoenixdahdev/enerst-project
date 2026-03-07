import "./globals.css";
import type { Metadata } from "next";
import { Mulish, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { DefaultProvider } from "./provider";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "EPVEOT | Construction & Building Engineering Services",
  description:
    "Building with precision, driven by passion. EPVEOT delivers comprehensive construction and engineering services — site development, structural design, project management, and infrastructure development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(mulish.variable, jetbrainsMono.variable)}>
      <DefaultProvider>
        <body className="font-sans antialiased">{children}</body>
      </DefaultProvider>
    </html>
  );
}
