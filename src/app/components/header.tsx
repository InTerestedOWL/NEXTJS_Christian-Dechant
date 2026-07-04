import Image from "next/image";
import LinkWithIcon from "./shared/linkWithIcon";
import Navbar from "./header/navbar";
import { headerLinks } from "../data";
import { ISocial } from "../interfaces";

export default function Header({ socials, isHome = true }: { socials: ISocial[], isHome?: boolean }) {
  const NameTag = isHome ? 'h1' : 'p';
  return (
    <>
      <Navbar headerLinks={headerLinks}></Navbar>
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
                <Image
                  src="/Christian%20Dechant.jpg"
                  width={ 224 }
                  height={ 224 }
                  priority
                  className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56"
                  alt="Christian Dechant, freelance app, web and mobile developer"
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <NameTag
                  className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
                >
                  Hello I&#39;m Christian Dechant
                </NameTag>
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