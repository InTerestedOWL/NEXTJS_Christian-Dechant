import Link from "next/link";
import { IHeaderLink } from "../../interfaces";
import Image from "next/image";
import { useState } from "react";
import { router } from "next/client";

export default function Navbar({headerLinks} : {headerLinks: IHeaderLink[]}) {
  const [ status, setStatus ] = useState<boolean>(false);

  const triggerMobileNavItem = (href: string) => {
    setStatus(false);
    router.push(href);
  }
  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
        <div className="container flex items-center justify-between">
          <div>
            <Link href="/">
              <Image src="/interestedowl.png" width="96" height="96" className="w-24 lg:w-48" alt="logo image"/>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              { headerLinks.map((item, index) => (
                <li className="group pl-6" key={ index }>

                  <Link href={ item.href }
                        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >{ item.title }</Link>
                  <span
                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                  ></span>
                </li>
              )) }
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => { console.log('Pressed'); setStatus(true)}}>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={ "pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" + (status ? 'opacity-100 pointer-events-auto' : '') }
      >
        <div
          className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
        >
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={ () => setStatus(false) }
          >
            <Image src="/icon-close.svg" width="40" height="40" className="h-10 w-auto" alt=""/>
          </button>

          <ul className={"mt-8 flex flex-col" + (status ? 'hidden': '')} >

            { headerLinks.map((item, index) => (
              <li className="py-2" key={ index } onClick={ () => triggerMobileNavItem(item.href) }>
                              <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">{ item.title }</span>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </>
  )
    ;
}