import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Rajdhani, } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const ClashGroteskVariable = localFont({
  src: '../../public/fonts/ClashGrotesk-Variable.woff2',
  variable: "--font-clash-grotesk-variable",
  display: 'swap',
});
const ClashDisplayVariable = localFont({
  src: '../../public/fonts/ClashDisplay-Variable.woff2',
  variable: "--font-clash-display-variable",
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Polaris - Training Dev",
  description: "Made by Filippo using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ClashGroteskVariable.variable} ${ClashDisplayVariable.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
