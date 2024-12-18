import Link from "next/link";
import { IHeaderLink } from "../../interfaces";
import Image from "next/image";

export default function Navbar({headerLinks} : {headerLinks: IHeaderLink[]}) {
  return (
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
          <button>
            <i className="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}