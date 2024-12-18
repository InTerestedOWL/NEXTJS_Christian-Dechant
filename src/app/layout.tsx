"use client";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/footer";
import { socials } from "./data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>

      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>

      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />

      <title>Homepage | Christian Dechant</title>

      <meta property="og:title" content="Homepage | Christian Dechant"/>

      <meta property="og:locale" content="en_US"/>

      <link
        rel="canonical"
        href="//"
      />

      <meta
        property="og:url"
        content="//"
      />

      <meta
        name="description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <link rel="icon" type="image/png" href="interestedowl.png"/>

      <meta name="theme-color" content="#5540af"/>

      <meta property="og:site_name" content="Atom Template"/>

      <meta property="og:image" content="/social.jpg"/>

      <meta name="twitter:card" content="summary_large_image"/>

      <meta name="twitter:site" content="@tailwindmade"/>
      {/*
      <link
        crossOrigin="crossorigin"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />

      <link
        as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />*/}

      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <link
        crossOrigin="anonymous"
        href="globals.css"
        media="screen"
        rel="stylesheet"
      />

      {/*<script
        defer
        src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
      ></script>

      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>*/}


    </head>
    <body
      className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
      x-data="{ mobileMenu: false }"
    >
    <div id="main" className="relative">
      <div>
        <Header
          socials={ socials }></Header>
        { children }
      </div>
      <Footer
        socials={ socials }></Footer>
    </div>
    <button
      className={ `fixed bottom-0 right-0 bg-primary rounded-s-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2 scrollToTopButton ${isVisible ? 'visible' : ''}` }
      onClick={ scrollToTop }
    >
      <span className="[&>svg]:w-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="white">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
  </span>
    </button>
    </body>
    </html>
  );
}
