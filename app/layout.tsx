import type { Metadata } from "next";
import { Schibsted_Groteskt, Martian_Mono } from "next/font/google";
import "./globals.css";

const schibstedGroteskt = Schibsted_Groteskt({
  variable: "--font-schibsted-groteskt",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Event",
  description: "The Hub for every Dev Event you musn't miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGroteskt.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
