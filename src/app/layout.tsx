import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "INDmoney: Track, Plan & Invest in Stocks, SIP in Mutual Funds to Grow your Money.",
  description: "INDmoney",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="mx-auto h-screen max-h-screen w-full max-w-screen-xl bg-white">
          <header>
            <Navbar />
          </header>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
