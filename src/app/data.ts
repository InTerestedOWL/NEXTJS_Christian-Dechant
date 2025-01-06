import { IContactBox, IExperience, IHeaderLink, IService, ISkill, ISocial, ITechnology } from "./interfaces";

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
  },
  {
    name: 'GitHub',
    icon: 'bxl-github',
    url: 'https://github.com/InTerestedOWL',
    classAttribute: 'pl-4'
  },
  {
    name: 'YouTube',
    icon: 'bxl-youtube',
    url: 'https://youtube.com/@interestedowl',
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
  { icon: "tailwindcss.svg",  },
  { icon: "php.svg" },
  { icon: "typescript.svg", },
  { icon: "mongodb.svg", },
  { icon: "postgresql.svg",  },
  { icon: "mysql.svg",  },
  { icon: "kubernetes.svg",  },
  { icon: "mssql.svg",  },
  { icon: "/aws.svg",  },
  { icon: "/azure.svg" },
  { icon: "/cicd.svg" },
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

export const experiences: IExperience[] = [
  {
    imageSrc: '/es-logo.svg',
    dateFrom: 'Oct. 2024',
    dateTill: 'now',
    title: 'Full Stack Developer',
    description: 'Developing microservices with C# .NET and Angular to replace methods of a legacy system.',
    classAttribute: 'w-12',
    margin: -25
  },
  {
    imageSrc: '/portal-logo-dark.62488549.png',
    dateFrom: 'Dec. 2021',
    dateTill: 'Sep. 2024',
    title: 'Working Student - Full Stack Developer',
    description: 'Building a reporting Tool for theatres and event clients to make Reporting more easy for them. Working with PHP, TypeScript, MongoDB, Terraform, Mercure',
    classAttribute: 'w-32',
    margin: 0
  },
  {
    imageSrc: '/abstractvoid_big_void.png',
    dateFrom: 'Mar. 2020',
    dateTill: 'Dec. 2024',
    title: 'Co-Founder and Developer',
    description: 'Building an innovative inhouse navigation system for large building complex using Bluetooth Low Energy. Working with Laravel, Alpine JS, Tailwind css (TALL-Stack) and NodeJS (erxpressJS) for webservices. ',
    classAttribute: 'w-24',
    margin: -25
  },
  {
    imageSrc: '/ecoplan.png',
    dateFrom: 'Sep. 2017',
    dateTill: 'Sep. 2021',
    title: 'Working Student / Bachelorand',
    description: 'Building and customizing a crm system for multiple clients. Integrating swiss QR-Code for bills. Working with Tomcat EE and Java for webservices using Java EE',
    classAttribute: 'w-3/4',
    margin: -5
  },
];

export const contactBoxes: IContactBox[] = [
  { title: '', text: '', icon: '' },
  { title: 'Reach out', text: 'Feel free to reach out', icon: 'bx-envelope' },
  { title: '', text: '', icon: '' },
]

export const skills: ISkill[] = [
  {
    name: 'Frontend Development (JS, TS, Frameworks)',
    percentage: 100,
    description: 'Frontend development is an integral part of my expertise. I am proficient in JavaScript, TypeScript, and modern frameworks such as Next.js, React, Vue.js, and Angular, which I utilize to create dynamic and responsive user interfaces.'
  },
  {
    name: 'Backend Development',
    percentage: 100,
    description: 'I have extensive experience in backend development, including working with PHP, Java, and C#. This area remains a core part of my professional skill set, and I have consistently applied these technologies in building robust and scalable systems.'
  },
  {
    name: 'Clean Code',
    percentage: 100,
    description: 'Clean code is at the heart of every successful development process. I prioritize writing maintainable, well-structured code that is easily adaptable to changes, ensuring long-term project scalability and team collaboration.'
  },
  {
    name: 'Agile Software Development',
    percentage: 100,
    description: 'I firmly believe in the principles of Agile software development. My experience with Agile methodologies, particularly at Reservix, has proven to be an essential approach for creating adaptive and high-quality software solutions.'
  },
  {
    name: 'CI/CD',
    percentage: 100,
    description: 'Continuous Integration and Continuous Deployment (CI/CD) are fundamental to modern software practices. I have developed expertise in tools like GitHub Actions, GitLab Pipelines, and TeamCity, which enable me to automate deployment workflows and ensure streamlined delivery of code across environments.'
  },
  {
    name: 'Cloud',
    percentage: 100,
    description: 'Cloud computing is an essential part of my technical repertoire. I have experience deploying and managing applications on cloud infrastructure, using Docker Compose to host apps on cloud servers, and continuously adapting to emerging cloud technologies to optimize application performance and scalability.'
  },
  {
    name: 'Kubernetes',
    percentage: 100,
    description: 'Kubernetes is a powerful tool for managing containerized applications. I gained substantial experience with Kubernetes while working on my master’s thesis, where I utilized it to manage microservices and automate deployment processes in a scalable manner.'
  },
  {
    name: 'Java and Kotlin (Android)',
    percentage: 100,
    description: 'My development journey began with Java, which laid a strong foundation for my skills. I further honed these skills working with Java EE for Webservice development during my time at ECOPLAN GmbH.'
  }
]