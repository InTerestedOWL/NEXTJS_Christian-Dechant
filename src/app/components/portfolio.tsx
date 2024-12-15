export default function Portfolio() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2
        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        Check out my Portfolio
      </h2>
      <h3
        className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        Here's what I have done in the past
      </h3>

      <div
        className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
      >
        <a
          href="interestedowl.de"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/assets/img/LieferanDino.png"
            className="w-full shadow"
            alt="portfolio image"
          />
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">LieferanDino a small masters degree
            web application project. Built with Vue3, Ionic and Laravel Backend.
            I built the Backend part like Authentication, containing Login, Registration, 2FA and the Chat and did the
            deployment part as well.</p>
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/assets/img/portfolio-stripe.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/assets/img/portfolio-fedex.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
        <a
          href="/"
          className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
          <img
            src="/assets/img/portfolio-microsoft.jpeg"
            className="w-full shadow"
            alt="portfolio image"
          />
        </a>
      </div>
    </div>
  )
}