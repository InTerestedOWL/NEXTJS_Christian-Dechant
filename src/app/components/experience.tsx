import Title from "@/app/components/shared/title";
import TimelineItem from "./shared/timelineItem";
import { IExperience } from "../interfaces";

export default function Experience({experiences} : {experiences: IExperience[]}) {
  return (
    <div className="container py-16 md:py-20" id="work">
      <Title
        title="My work experience"
        subtitle="Here's what I did before and while freelancing"
        text=""
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