import Title from "@/app/components/shared/title";
import TimelineItem from "./shared/timelineItem";

const experiences = [ {
  imageSrc: 'ecoplan.png',
  dateFrom: 'Sep. 2017',
  dateTill: 'Sep. 2021',
  title: 'Working Student / Bachelorand',
  description: 'Building and customizing a crm system for multiple clients. Integrating swiss QR-Code for bills. Working with Tomcat EE and Java for webservices using Java EE',
  classAttribute: 'w-3/4'
},
  {
    imageSrc: 'abstractvoid_big_void.png',
    dateFrom: 'Mar. 2020',
    dateTill: 'Dec. 2024',
    title: 'Co-Founder and Developer',
    description: 'Building an innovative inhouse navigation system for large building complex using Bluetooth Low Energy. Working with Laravel, Alpine JS, Tailwind css (TALL-Stack) and NodeJS (erxpressJS) for webservices. ',
    classAttribute: 'w-24'
  },
  {
    imageSrc: 'portal-logo-dark.62488549.png',
    dateFrom: 'Dec. 2021',
    dateTill: 'Sep. 2024',
    title: 'Working Student - Full Stack Developer',
    description: 'Building a reporting Tool for theatres and event clients to make Reporting more easy for them. Working with PHP, TypeScript, MongoDB, Terraform, Mercure',
    classAttribute: 'w-32'
  },
  {
    imageSrc: 'es-logo.svg',
    dateFrom: 'Oct. 2024',
    dateTill: 'now',
    title: 'Full Stack Developer',
    description: 'Developing microservices with C# .NET and Angular to replace methods of a legacy system.',
    classAttribute: 'w-12'
  } ]

export default function Experience() {
  return (
    <div className="container py-16 md:py-20" id="work">
      <Title
        title="My work experience"
        subtitle="Here's what I did before and while freelancing"
      ></Title>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
    <span
      className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
    ></span>
        { experiences.map((item, index) => (
          <TimelineItem key={ index }
                        imageSrc={ item.imageSrc }
                        title={ item.title }
                        description={ item.description }
                        dateFrom={ item.dateFrom }
                        dateTill={ item.dateTill }
                        classAttribute={ item.classAttribute }
          ></TimelineItem>
        )) }
      </div>
    </div>

  );
}