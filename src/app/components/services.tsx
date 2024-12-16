export default function Services() {
  return (
    <div className="container py-16 md:py-20" id="services">
      <h2
        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        Here's what I'm good at
      </h2>
      <h3
        className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        These are the services I offer and I can provide help for your project
      </h3>

      <div
        className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
      >
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-development-white.svg"
                alt="development icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-development-black.svg"
                alt="development icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              Web Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Web Development using Javascript/Typescript, PHP and multiple Frontend Frameworks like next.js, vuejs,
              react and many more.
              I take care of your Frontend, Backend and Webserver configuration and consider high rankings in SEO.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-development-white.svg"
                alt="development icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-development-black.svg"
                alt="development icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              App Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              App Development using Java, C, C++ or C#. I am experienced in all of these languages, but didn't have
              anything left for design.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-mobile-white.svg"
                alt="Mobile Application icon"
                />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-mobile-black.svg"
                alt="Mobile Application icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              Mobile Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Besides Web Development I am experienced in building Mobile Apps like Android Apps, or developing multi
              OS apps using Xamarin (C#).
              I could also configure your website to have a progressive web app (PWA) or an Android/iOS App using e.g.
              Ionic Components.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-content-black.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              Application Programming Interfaces (APIs)
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              I love building Backend APIs and bring them to live. I offer a wide range to build Websockets,
              Webservers, Microservices in common and much more.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-content-black.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              Deployment
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              One of my DevOps offers is "Deployment". Building docker images and deploying the Application to a
              server is not a problem for me!
              Using Gitlab CI/CD, Teamcity or any other CI/CD Tool to test, build and deploy your image.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>

        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-content-black.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              Cloud Management
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              You are using a non cloud environment but want to ship over? No problem, I can guide you to have an
              Cloud Environment for your App.
              Using terraform it is as easy as possible and you can ship from Cloud to Cloud. Load balancing or using
              Kubernetes is neither a problem nor a blocker.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>

        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-content-black.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              Containerization (Docker, Kubernetes)
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              I had written my master thesis about the efficency of zero trust in kubernetes clouds and have multiple
              experience using Docker and Kubernetes.
              As well as setting up an Webserver like traefik, nginx or any other.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-primary">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="icon-content-white.svg"
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="icon-content-black.svg"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3
              className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
            >
              Application Security
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              I have experience in setting up Zero-Trust-Environments as well as security for your Applications.
              Interested? Start <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
            >Here!</span> to get in touch.
            </p>
          </div>
        </div>
      </div>
    </div>
)
}