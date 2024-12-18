import Image from "next/image";

export default function Service({ imgSrcBlack, imgSrcWhite, title, text }: {
  imgSrcBlack: string,
  imgSrcWhite: string,
  title: string,
  text: string
}) {
  return (
    <div className="group rounded px-8 py-12 shadow hover:bg-primary">
      <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
        <div className="hidden group-hover:block">
          <img
            src={ imgSrcWhite }
            alt="development icon"
          />
        </div>
        <div className="block group-hover:hidden">
          <img
            src={ imgSrcBlack }
            alt="development icon"
          />
        </div>
      </div>
      <div className="text-center">
        <h3
          className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
        >
          { title }
        </h3>
        <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
          { text }<br/><br/>
          Interested? Start <span
          className="cursor-pointer pt-0.5 font-header font-semibold uppercase"
        >Here!</span> to get in touch.
        </p>
      </div>
    </div>
  );
}