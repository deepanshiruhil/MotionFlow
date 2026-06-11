import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motion Flow",
  description: "Control the rhythm with your hands. Powered by a machine learning neural network for real-time harmony generation.",
  icons: {
    icon: '/tilde_logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="text-center py-4 text-sm" style={{ color: '#a07060' }}>
          made with ♥ by deepanshi ruhil
        </footer>
      </body>
    </html>
  );
}
