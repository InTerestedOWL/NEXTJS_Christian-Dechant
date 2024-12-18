import LinkWithIcon from "./shared/linkWithIcon";
import Navbar from "./header/navbar";
import MobileNavbar from "./header/mobileNavbar";
import { headerLinks } from "../data";
import { ISocial } from "../interfaces";
import Image from "next/image";

export default function Header({socials}: {socials: ISocial[]} ) {
  return (
    <>
      <Navbar headerLinks={headerLinks}></Navbar>
      <MobileNavbar headerLinks={headerLinks}></MobileNavbar>
      <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat py-8"
          style={ { backgroundImage: `url("bg-hero.jpg")` } }
        >
          <div
            className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"
          ></div>

          <div
            className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48"
          >
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="rounded-full border-8 border-primary shadow-xl">
                <img
                  src="/Christian%20Dechant.jpg"
                  className="h-48 rounded-full sm:h-56"
                  alt="author"
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1
                  className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
                >
                  Hello I&#39;m Christian Dechant
                </h1>
                <div
                  className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
                >
                  <div
                    className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
                  >
                    <p className="font-body text-lg uppercase text-white">Let&#39;s connect</p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                  >
                    { socials.map((item, index) => (
                      <LinkWithIcon key={ index }
                                    url={ item.url }
                                    linkAttribute={ item.classAttribute }
                                    icon={ item.icon }
                                    iconAttributes={ 'text-white hover:text-yellow' }></LinkWithIcon>
                    )) }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
    ;
}