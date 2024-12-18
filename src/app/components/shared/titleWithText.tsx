export default function TitleWithText({ title, subtitle, titleText } :{title: string, subtitle: string, titleText: string}) {
  return (
    <>
      <h2
        className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      <h4
        className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        {subtitle}
      </h4>
      <p className="pt-6 font-body leading-relaxed text-grey-20">
        <p className="font-body text-grey-10">
          {titleText}
        </p>
      </p>
    </>
  );
}