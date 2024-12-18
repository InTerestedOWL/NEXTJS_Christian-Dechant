import { IHeaderLink } from "../../interfaces";
import Image from "next/image";

export default function MobileNavbar({headerLinks} : {headerLinks: IHeaderLink[]}) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
    >
      <div
        className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4"
        >
          <Image src="/icon-close.svg" width="40" height="40" className="h-10 w-auto" alt=""/>
        </button>

        <ul className="mt-8 flex flex-col">

          { headerLinks.map((item, index) => (
            <li className="py-2" key={ index }>
                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">{ item.title }</span>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}