import Title from "./shared/title";
import Service from "./shared/service";

const services = [ {
  imgSrcWhite: 'icon-development-white.svg',
  imgSrcBlack: 'icon-development-black.svg',
  title: 'Web Development',
  text: 'Web Development using Javascript/Typescript, PHP, and frameworks like Next.js, Vue.js, or React. I handle Frontend, Backend, and server configuration with a focus on SEO optimization.'
},
  {
    imgSrcWhite: 'icon-development-white.svg',
    imgSrcBlack: 'icon-development-black.svg',
    title: 'App Development',
    text: 'I develop apps using Java, C, C++, or C#. With expertise in these languages, I ensure a strong backend while design elements are secondary.'
  },
  {
    imgSrcWhite: 'icon-mobile-white.svg',
    imgSrcBlack: 'icon-mobile-black.svg',
    title: 'Mobile Development',
    text: 'I create Android apps, multi-OS apps with Xamarin (C#), or progressive web apps (PWAs). Additionally, I configure websites for Android/iOS apps using tools like Ionic.'
  },
  {
    imgSrcWhite: 'icon-development-white.svg',
    imgSrcBlack: 'icon-development-black.svg',
    title: 'Application Programming Interfaces (APIs)',
    text: 'I specialize in building APIs for WebSockets, web servers, and microservices. I ensure reliable and efficient backend communication.'
  },
  {
    imgSrcWhite: 'icon-content-white.svg',
    imgSrcBlack: 'icon-content-black.svg',
    title: 'Deployment',
    text: 'I handle deployments with tools like Docker and CI/CD pipelines (GitLab, TeamCity). I manage testing, building, and deploying your application seamlessly.'
  },
  {
    imgSrcWhite: 'icon-content-white.svg',
    imgSrcBlack: 'icon-content-black.svg',
    title: 'Cloud Management',
    text: 'I assist in migrating to cloud environments using Terraform and managing Kubernetes setups. Load balancing and inter-cloud operations are part of my expertise.'
  },
  {
    imgSrcWhite: 'icon-content-white.svg',
    imgSrcBlack: 'icon-content-black.svg',
    title: 'Containerization (Docker, Kubernetes)',
    text: 'With extensive Docker and Kubernetes experience, I set up web servers (Traefik, Nginx) and optimize cloud environments for security and efficiency.'
  },
  {
    imgSrcWhite: 'icon-content-white.svg',
    imgSrcBlack: 'icon-content-black.svg',
    title: 'Application Security',
    text: 'I implement zero-trust environments and ensure comprehensive application security to protect your systems from vulnerabilities.'
  } ]

export default function Services() {
  return (
    <div className="container py-16 md:py-20" id="services">
      <Title
        title={ 'Here\'s what I\'m good at' }
        subtitle={ 'These are the services I offer and I can provide help for your project' }></Title>
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