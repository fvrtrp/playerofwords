import type { Metadata } from "next";
import "./globals.css";
import { primaryFont } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Player of words",
  description: "Start typing...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
