const technologies = [
  { icon: "laravel.svg" },
  { icon: "vue.svg" },
  { icon: "angular-icon-seeklogo.svg" },
  { icon: "ionic_Logo.svg" },
  { icon: "symfony.svg" },
  { icon: "icons8-.net.svg" },
  { icon: "cypress-1.svg" },
  { icon: "nextjs.svg" },
  { icon: "node-js-svgrepo-com.svg" },
  { icon: "docker-mark-blue.svg" },
]

export default function SoftwareTechnologies() {
  return (
    <div className="bg-grey-50" id="clients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My Tools
          </h2>
          <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
            { technologies.map((item, index) => (
              <span className="m-8 block" key={ index }>
              <img
                src={ item.icon }
                alt="client logo"
                className="mx-auto block h-12 w-auto"
              />
                </span>
            )) }
          </div>
        </div>
      </div>
    </div>
  )
}