import { IContactBox, IExperience, IHeaderLink, IService, ISocial, ITechnology } from "./interfaces";

export const headerLinks: IHeaderLink[] = [
  { href: '/#about', title: 'About' },
  { href: '/#services', title: 'Services' },
  { href: '/#portfolio', title: 'Portfolio' },
  { href: '/#tools', title: 'tools' },
  { href: '/#work', title: 'Work' },
  { href: '/#statistics', title: 'Statistics' },
  { href: '/#blog', title: 'Blog' },
  { href: '/#contact', title: 'Contact' },
];

export const socials: ISocial[] = [
  {
    name: 'linkedin',
    icon: 'bxl-linkedin',
    url: 'https://www.linkedin.com/in/christian-dechant-a64b7917b/',
    classAttribute: 'pl-4'
  },
  {
    name: 'XING',
    icon: 'bxl-xing',
    url: 'https://www.xing.com/profile/Christian_Dechant6/web_profiles?expandNeffi=true',
    classAttribute: 'pl-4'
  }
];

export const technologies: ITechnology[] = [
  { icon: "laravel.svg" },
  { icon: "vue.svg" },
  { icon: "angular-icon-seeklogo.svg" },
  { icon: "ionic_Logo.svg" },
  { icon: "symfony.svg" },
  { icon: "icons8-.net.svg" },
  { icon: "cypress-1.svg" },
  { icon: "nextjs.svg" },
  { icon: "node-js-svgrepo-com.svg" },
  { icon: "docker-mark-blue.svg" },
];

export const services: IService[] = [ {
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
    imgSrcWhite: 'icon-development-white.svg',
    imgSrcBlack: 'icon-development-black.svg',
    title: 'Application Programming Interfaces (APIs)',
    text: 'I specialize in building APIs for WebSockets, web servers, and microservices. I ensure reliable and efficient backend communication.'
  },
  {
    imgSrcWhite: 'icon-mobile-white.svg',
    imgSrcBlack: 'icon-mobile-black.svg',
    title: 'Mobile Development',
    text: 'I create Android apps, multi-OS apps with Xamarin (C#), or progressive web apps (PWAs). Additionally, I configure websites for Android/iOS apps using tools like Ionic.'
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

export const experiences: IExperience[] = [ {
  imageSrc: '/ecoplan.png',
  dateFrom: 'Sep. 2017',
  dateTill: 'Sep. 2021',
  title: 'Working Student / Bachelorand',
  description: 'Building and customizing a crm system for multiple clients. Integrating swiss QR-Code for bills. Working with Tomcat EE and Java for webservices using Java EE',
  classAttribute: 'w-3/4'
},
  {
    imageSrc: '/abstractvoid_big_void.png',
    dateFrom: 'Mar. 2020',
    dateTill: 'Dec. 2024',
    title: 'Co-Founder and Developer',
    description: 'Building an innovative inhouse navigation system for large building complex using Bluetooth Low Energy. Working with Laravel, Alpine JS, Tailwind css (TALL-Stack) and NodeJS (erxpressJS) for webservices. ',
    classAttribute: 'w-24'
  },
  {
    imageSrc: '/portal-logo-dark.62488549.png',
    dateFrom: 'Dec. 2021',
    dateTill: 'Sep. 2024',
    title: 'Working Student - Full Stack Developer',
    description: 'Building a reporting Tool for theatres and event clients to make Reporting more easy for them. Working with PHP, TypeScript, MongoDB, Terraform, Mercure',
    classAttribute: 'w-32'
  },
  {
    imageSrc: '/es-logo.svg',
    dateFrom: 'Oct. 2024',
    dateTill: 'now',
    title: 'Full Stack Developer',
    description: 'Developing microservices with C# .NET and Angular to replace methods of a legacy system.',
    classAttribute: 'w-12'
  }
];

export const contactBoxes : IContactBox[] = [
  { title: '', text: '', icon: ''},
  { title: 'Reach out', text: 'Feel free to reach out', icon: 'bx-envelope'},
  { title: '', text: '', icon: ''},
]