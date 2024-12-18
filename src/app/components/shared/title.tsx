export default function Title({ title, subtitle, text = '' }: { title: string, subtitle: string, text: string }) {
  return (
    <>
      <h2
        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        { title }

      </h2>
      <h3
        className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        { subtitle }

      </h3>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-grey-10">
          {text}
        </p>
      </div>

    </>
  )
    ;
}