export default function Title({title, subtitle}) {
  return (
    <>
      <h2
        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        {title}

      </h2>
      <h3
        className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        {subtitle}

      </h3>
    </>
  )
    ;
}