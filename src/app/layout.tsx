import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { StatusProvider } from "./context";
import Script from "next/dist/client/script";
import ClientLayout from "@/app/components/ClientLayout";
import { Metadata, Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
});

export const metadata: Metadata = {
  title: "Homepage | Christian Dechant",
  description: "Homepage of Christian Dechant",
  icons: {
    icon: "/Interestedowl.png",
  },
  openGraph: {
    title: "Homepage | Christian Dechant",
    locale: "en_US",
    images: [
      {
        url: "/interestedowl.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5540af",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ `${ geistSans.variable } ${ geistMono.variable }` }>
    <head>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="448beb5d-d24a-4724-b37e-ec3885240aa2"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <Script
        id="adsense"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2057905367231396"
        crossOrigin="anonymous"
        data-cookieconsent="marketing"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    </head>
    <StatusProvider>
      <ClientLayout>{ children }</ClientLayout>
    </StatusProvider>
    </html>
  );
}
