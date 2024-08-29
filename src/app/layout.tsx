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
      <body className={`${inter.className} bg-neutral-950`}>
        <main className="mx-auto my-0 h-screen max-h-screen w-full border-slate-800 sm:my-6 sm:h-[700px] sm:max-w-[380px] sm:border">
          <div className="w-full overflow-hidden bg-white">
            <Navbar />
          </div>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
