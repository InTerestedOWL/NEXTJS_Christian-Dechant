"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import React, { useEffect, useState } from "react";
import Footer from "@/app/components/footer";
import { socials } from "./data";
import { StatusProvider, useStatus } from "./context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <StatusProvider>
      <LayoutContent>{children}</LayoutContent>
    </StatusProvider>
  )
}

function LayoutContent({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const {status } = useStatus()
  const [ isVisible, setIsVisible ] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if ( window.scrollY > 100 ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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

      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible"/>

      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />

      <title>Homepage | Christian Dechant</title>

      <meta property="og:title" content="Homepage | Christian Dechant"/>

      <meta property="og:locale" content="en_US"/>

      <link rel="icon" type="image/png" href="Interestedowl.png"/>

      <meta name="theme-color" content="#5540af"/>

      <meta property="og:image" content="/interestedowl.png"/>

      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    </head>
    <body
      className={ `${ geistSans.variable } ${ geistMono.variable } antialiased ${status ? 'overflow-hidden max-h-screen' : ''}` }

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
    { typeof window !== 'undefined' && (
      <button
        className={ `fixed bottom-0 right-0 bg-primary rounded-s-full px-4 py-2 pr-6 mb-[71px] z-50 items-center text-xs flex gap-2 scrollToTopButton ${ isVisible ? 'visible' : '' }` }
        onClick={ () => scrollToTop() }
      >
      <span className="[&>svg]:w-4">
    <i className="bx bx-upvote text-2xl text-white hover:text-yellow"></i>
  </span>
      </button>
    ) }
    </body>
    </html>
  );
}
