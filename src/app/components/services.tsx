import Title from "./shared/title";
import Service from "./shared/service";
import { IService } from "../interfaces";


export default function Services({services}: {services: IService[]}) {
  return (
    <div className="container py-16 md:py-20" id="services">
      <Title
        title={ 'Here\'s what I\'m good at' }
        subtitle={ 'These are the services I offer and I can provide help for your project' }
        text=""></Title>
      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        { services.map((item, index) => (
          <Service key={ index }
                   imgSrcWhite={ item.imgSrcWhite }
                   imgSrcBlack={ item.imgSrcBlack }
                   title={ item.title }
                   text={ item.text }
          ></Service>
        )) }
      </div>
    </div>
  )
}