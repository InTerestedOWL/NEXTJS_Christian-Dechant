export default function Education() {
  const education = [
    {
      title: "Fachoberschule (FOS)",
      description: "Completed with a focus on technology and computer science.",
      year: "2012",
    },
    {
      title: "Bachelor of Science in Applied Computer Science",
      description: "Specialized in software development and system design.",
      year: "2016",
    },
    {
      title: "Master of Science in Applied Computer Science",
      description: "Focused on advanced algorithms, AI, and system architecture.",
      year: "2018",
    },
  ];

  return (
    <div className="bg-grey-50" id="education">
      <div className="container flex flex-col items-center py-16 md:py-20">
        <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>
        <div className="w-full md:w-3/4 lg:w-3/5">
          { education.map((item, index) => (
            <div key={ index } className="mb-8">
              <h3 className="text-xl font-semibold text-black">{ item.title }</h3>
              <p className="text-grey-70">{ item.description }</p>
              <span className="text-grey-50">{ item.year }</span>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}