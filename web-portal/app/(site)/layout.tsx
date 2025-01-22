import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";


const MyFont = Roboto({
  weight : "400",
  subsets: ["latin"]
  });

export const metadata: Metadata = {
  title: "Web-Portal"  
};

export default function RootLayout({
  children,
  header
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={MyFont.className}>
        {header}
        {children}
      </body>
    </html>
  );
}
