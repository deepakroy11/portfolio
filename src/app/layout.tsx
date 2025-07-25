import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/react";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/context/themeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepak Roy | Web Developer",
  description:
    "Portfolio of Deepak Roy, a full-stack web developer specializing in Next.js, React, and scalable modern solutions. Passionate about optimizing workflows and building seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUIProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen bg-gradient-to-br">{children}</main>
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
