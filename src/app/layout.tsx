import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Amplify } from "aws-amplify";

import outputs from "amplify_outputs.json";
import Navbar from "./navbar";
import Hero from "./hero";

Amplify.configure(outputs, { ssr: true });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safe Bicycling",
  description: "Community Safe Bicycling Information",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
