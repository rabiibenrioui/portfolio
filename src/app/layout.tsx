import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rabii Benrioui",
  description: "Software developer based in Casablanca. I turn raw ideas into digital applications.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="font-sans font-light antialiased">{children}</body>
    </html>
  );
}
