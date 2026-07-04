"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useStatus } from "../context";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { socials } from "../data";

export default function ClientLayout({
                                       children,
                                     }: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useStatus();
  const pathname = usePathname();
  const isHome = pathname === "/";
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <body
      className={ `antialiased ${
        status ? "overflow-hidden max-h-screen" : ""
      }` }
    >
    <div id="main" className="relative">
      <div>
        <Header socials={ socials } isHome={ isHome }></Header>
        { children }
      </div>
      <Footer socials={ socials }></Footer>
    </div>
    { isVisible && (
      <button
        className={ `fixed bottom-0 right-0 bg-primary rounded-s-full px-4 py-2 pr-6 mb-[71px] z-50 items-center text-xs flex gap-2 scrollToTopButton visible` }
        onClick={ () => scrollToTop() }
      >
          <span className="[&>svg]:w-4">
            <i className="bx bx-upvote text-2xl text-white hover:text-yellow"></i>
          </span>
      </button>
    ) }
    </body>
  );
}
