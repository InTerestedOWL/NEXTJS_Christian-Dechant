import { ITechnology } from "../interfaces";
import Title from "./shared/title";


export default function SoftwareTechnologies({technologies}: {technologies : ITechnology[]}) {
  return (
    <div className="bg-grey-50" id="tools">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <Title title="My Tools" subtitle="Here are some of the tools and Languages I could support with!" text=""></Title>
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