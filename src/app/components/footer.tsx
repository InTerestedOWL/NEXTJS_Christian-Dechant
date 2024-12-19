import Link from "next/link";
import LinkWithIcon from "./shared/linkWithIcon";
import { ISocial } from "../interfaces";

export default function Footer({socials} : {socials: ISocial[]}) {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2024. All right reserved, Christian Dechant.
        </p>
        <ul className="flex items-center">
          <li className="group pl-6">

            <Link href="/imprint"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Imprint</Link>
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          <li className="group pl-6">

            <Link href="/privacy-policy"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Privacy Policy</Link>
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
        </ul>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          { socials.map((item, index) => (
            <LinkWithIcon key={ index }
                          url={ item.url }
                          linkAttribute={ item.classAttribute }
                          iconAttributes={ 'text-white hover:text-yellow' }
                          icon={ item.icon }></LinkWithIcon>
          )) }
        </div>
      </div>
    </div>
  );
}