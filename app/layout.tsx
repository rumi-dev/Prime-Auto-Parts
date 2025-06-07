import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PhoneIcon from "@/components/PhoneIcon";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime Auto Parts Pro - Quality OEM Parts",
  description:
    "Find high quality used OEM auto parts with 60-day warranty and free shipping. Search all brands and makes for the best replacement parts.",
  keywords: "used auto parts, OEM parts, car parts, auto parts, used car parts",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="fixed bottom-4 left-4 z-50">
          {/* <PhoneIcon /> */}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
