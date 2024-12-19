import Title from "./shared/title";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">

      <Title
        title={ 'Check out my Portfolio' }
        subtitle={ "Here's what I have done in the past" }
        text=""
      ></Title>

      <div
        className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
      >
        <Link
          href="/Masterthesis.pdf"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/LieferanDino.png"
            className="w-full shadow"
            alt="portfolio image"
          />
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">LieferanDino a small masters degree
            web application project. Built with Vue3, Ionic and Laravel Backend.
            I built the Backend part like Authentication, containing Login, Registration, 2FA and the Chat and did the
            deployment part as well.</p>
        </Link>
        <Link
          href="/Masterthesis.pdf"
          target="_blank"
          rel="nooppener noreferrer"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/img_1.png"
            className="w-full shadow"
            alt="portfolio image"
          />
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">My master&#39;s thesis for the degree
            Master of Applied Computer Science focused on analyzing Kubernetes security architectures and evaluating the
            effectiveness of Zero Trust principles in mitigating vulnerabilities, balancing enhanced protection with
            increased resource consumption and complexity.</p>
        </Link>
        {/*<Link*/}
        {/*  href="/"*/}
        {/*  className="mx-auto transform transition-all hover:scale-105 md:mx-0"*/}
        {/*>*/}
        {/*  <img*/}
        {/*    src="/in-progress.svg"*/}
        {/*    className="w-96 shadow justify-center content-center"*/}
        {/*    alt="portfolio image"*/}
        {/*  />*/}
        {/*  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">*/}
        {/*    A cool new project with C# .NET and Angular is currently being developed here. It will be a travel planning*/}
        {/*    software.*/}
        {/*  </p>*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href="/"*/}
        {/*  className="mx-auto transform transition-all hover:scale-105 md:mx-0"*/}
        {/*>*/}
        {/*  <img*/}
        {/*    src="/in-progress.svg"*/}
        {/*    className="w-96 shadow justify-center content-center"*/}
        {/*    alt="portfolio image"*/}
        {/*  />*/}
        {/*  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">*/}
        {/*    A cool new project is currently being developed here.*/}
        {/*  </p>*/}
        {/*</Link>*/}
      </div>
    </div>
  )
}