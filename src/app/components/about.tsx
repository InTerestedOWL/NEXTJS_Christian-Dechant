'use client';
import TitleWithText from "@/app/components/shared/titleWithText";
import LinkWithIcon from "./shared/linkWithIcon";
import { ISocial, ISkill } from "../interfaces";
import { useState } from "react";
const MAX_SKILLS = 6;

export default function About({ socials, skills }: { socials: ISocial[], skills: ISkill[] }) {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, MAX_SKILLS);

  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-1/2 lg:text-left">
          <TitleWithText
            title="Who am I?"
            subtitle="I'm Christian, an App, Web and Mobile Developer and DevOp"
            titleText="I am a passionate and experienced software developer with over 6 years of expertise in app, web, and mobile development. Currently, I work as a Senior Developer at Strauss GmbH & Co. KG, where I specialize in building and maintaining robust solutions using C#. My role includes developing efficient systems and ensuring high-quality code. In addition to my professional career, I am always excited about exploring new projects, enhancing my skills, and taking on innovative challenges. My work philosophy revolves around clean code, team collaboration, and staying updated with the latest industry trends. I’m enthusiastic about crafting solutions that are both technically excellent and user-friendly. If you’re interested in collaborating or learning more about my work, feel free to get in touch. Let’s create something amazing together!"
          />

          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">Connect with me</p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              {socials.map((item, index) => (
                <LinkWithIcon key={index}
                              url={item.url}
                              icon={item.icon}
                              linkAttribute={item.classAttribute}
                              iconAttributes={'text-primary hover:text-yellow'} />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-1/2 lg:pl-12 lg:pt-0">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className={`pt-6 transition-opacity duration-500 ${showAll ? "opacity-100" : "opacity-0"} fade-in`}
              style={{ transition: 'opacity 0.5s ease-in-out' }}
            >
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">{skill.name}</h4>
                <h3 className="font-body text-3xl font-bold text-primary">{skill.percentage}%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className="h-3 rounded-full bg-primary"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}

          {/* Button for "show more / less" */}
          {skills.length > MAX_SKILLS && (
            <button
              className="mt-6 text-primary font-semibold hover:underline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
