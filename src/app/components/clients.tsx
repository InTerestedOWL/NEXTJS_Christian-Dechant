import Image from "next/image";

export default function Clients() {
  return (
    <div className="bg-grey-50" id="clients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2
            className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
          >
            My latest clients
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
            <span className="m-8 block">
              <Image
                src="socialinsiders.png"
                alt="client logo"
                className="mx-auto block h-12 w-auto"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}