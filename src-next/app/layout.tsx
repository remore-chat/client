import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Rubik({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Remore",
  description: "Remore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
