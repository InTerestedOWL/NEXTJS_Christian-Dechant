'use client';
import TitleWithText from "@/app/components/shared/titleWithText";
import LinkWithIcon from "./shared/linkWithIcon";
import { ISkill, ISocial } from "../interfaces";
import { useState } from "react";

const MAX_SKILLS = 6;

export default function About({ socials, skills }: { socials: ISocial[], skills: ISkill[] }) {
  const [ showAll, setShowAll ] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, MAX_SKILLS);

  const [ openDescription, setOpenDescription ] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    if ( openDescription === index ) {
      setOpenDescription(null);
    } else {
      setOpenDescription(index);
    }
  };
  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-1/2 lg:text-left">
          <TitleWithText
            title="Who am I?"
            subtitle="I'm Christian, an App, Web and Mobile Developer and DevOp"
            titleText="Hi, I’m Christian – a passionate developer with a focus on creating efficient and scalable web, mobile, and app solutions. With over six years of experience in the tech industry, I’m currently working as a Senior Developer at Strauss GmbH & Co. KG. My expertise lies in building robust systems using C#, and I thrive on solving complex technical challenges. I am now focusing on expanding my freelancing opportunities, where I aim to deliver high-quality, user-centric solutions in a variety of domains. Clean code, collaboration, and staying ahead of the latest industry trends are the cornerstones of my work philosophy."
          />
          <div className="pt-6 font-body leading-relaxed text-grey-20">
            <p className="font-body text-grey-10">
              Throughout my career, I&#39;ve had the privilege of working on diverse projects in app, web, and mobile
              development. My journey has made me proficient in designing high-performance systems and collaborating
              closely with cross-functional teams. While I continue to grow in my role at Strauss, I’m excited to take
              on new freelance projects that challenge me and allow me to explore new technologies and creative
              solutions. Whether it&#39;s building an innovative app or optimizing existing software systems, I’m always
              eager to learn and grow.
            </p>
          </div>
          <div className="pt-6 font-body leading-relaxed text-grey-20">
            <p className="font-body text-grey-10">
              Let’s create something amazing together! If you&#39;re looking for a dedicated developer for your next
              project
              or
              have any questions, feel free to get in touch with me. I’m always excited to explore new opportunities!
            </p>
          </div>

          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">Connect with me</p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              { socials.map((item, index) => (
                <LinkWithIcon key={ index }
                              url={ item.url }
                              icon={ item.icon }
                              linkAttribute={ item.classAttribute }
                              iconAttributes={ 'text-primary hover:text-yellow' }/>
              )) }
            </div>
          </div>
        </div>

        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-1/2 lg:pl-12 lg:pt-0">
          { visibleSkills.map((skill, index) => (
            <div
              key={ index }
              className={ `pt-6 transition-opacity duration-500 ${ showAll ? "opacity-100" : "opacity-0" } fade-in` }
              style={ { transition: 'opacity 0.5s ease-in-out' } }
            >
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">{ skill.name }</h4>
                <h3 className="font-body text-3xl font-bold text-primary">{ skill.percentage } %</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={ { width: `${ skill.percentage }%` } }
                ></div>
              </div>
              <button
                className="mt-2 text-primary font-semibold hover:underline"
                onClick={ () => toggleDescription(index) }
              >
                { openDescription === index ? 'Hide Description' : 'Show Description' }
              </button>
              <p
                id={ `desc${ index }` }
                className={ `font-body text-grey-10 ${ openDescription === index ? 'block' : 'hidden' }` }
              >
                { skill.description }
              </p>
            </div>
          )) }

          {/* Button for "show more / less" */ }
          { skills.length > MAX_SKILLS && (
            <button
              className="mt-6 text-primary font-semibold hover:underline"
              onClick={ () => setShowAll(!showAll) }
            >
              { showAll ? "Show less" : "Show more" }
            </button>
          ) }
        </div>
      </div>
    </div>
  );
}
