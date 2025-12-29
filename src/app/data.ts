import { IContactBox, IExperience, IHeaderLink, ISkill, ISocial, ITechnology, IVoluntaryWork } from "./interfaces";

export const headerLinks: IHeaderLink[] = [
  { href: '/#about', title: 'About' },
  { href: '/#pricing', title: 'Offers' },
  { href: '/#portfolio', title: 'Portfolio' },
  { href: '/#tools', title: 'tools' },
  { href: '/#work', title: 'Work' },
  { href: '/#voluntary', title: 'Voluntary' },
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
    intro: 'Creating dynamic and responsive user interfaces with modern web technologies.',
    description: 'Frontend development is an integral part of my expertise. I am proficient in JavaScript, TypeScript, and modern frameworks such as Next.js, React, Vue.js, and Angular, which I utilize to create dynamic and responsive user interfaces.'
  },
  {
    name: 'Backend Development',
    percentage: 100,
    intro: 'Building robust and scalable server-side systems using C#, Java, and PHP.',
    description: 'I have extensive experience in backend development, including working with PHP, Java, and C#. This area remains a core part of my professional skill set, and I have consistently applied these technologies in building robust and scalable systems.'
  },
  {
    name: 'Clean Code',
    percentage: 100,
    intro: 'Writing maintainable, well-structured code for long-term project success.',
    description: 'Clean code is at the heart of every successful development process. I prioritize writing maintainable, well-structured code that is easily adaptable to changes, ensuring long-term project scalability and team collaboration.'
  },
  {
    name: 'Agile Software Development',
    percentage: 100,
    intro: 'Delivering high-quality solutions through adaptive and collaborative methodologies.',
    description: 'I firmly believe in the principles of Agile software development. My experience with Agile methodologies, particularly at Reservix, has proven to be an essential approach for creating adaptive and high-quality software solutions.'
  },
  {
    name: 'CI/CD',
    percentage: 100,
    intro: 'Automating deployment workflows for streamlined and reliable delivery.',
    description: 'Continuous Integration and Continuous Deployment (CI/CD) are fundamental to modern software practices. I have developed expertise in tools like GitHub Actions, GitLab Pipelines, and TeamCity, which enable me to automate deployment workflows and ensure streamlined delivery of code across environments.'
  },
  {
    name: 'Cloud',
    percentage: 100,
    intro: 'Optimizing performance and scalability through cloud infrastructure management.',
    description: 'Cloud computing is an essential part of my technical repertoire. I have experience deploying and managing applications on cloud infrastructure, using Docker Compose to host apps on cloud servers, and continuously adapting to emerging cloud technologies to optimize application performance and scalability.'
  },
  {
    name: 'Kubernetes',
    percentage: 100,
    intro: 'Orchestrating containerized applications for scalable microservices management.',
    description: 'Kubernetes is a powerful tool for managing containerized applications. I gained substantial experience with Kubernetes while working on my master’s thesis, where I utilized it to manage microservices and automate deployment processes in a scalable manner.'
  },
  {
    name: 'Java and Kotlin (Android)',
    percentage: 100,
    intro: 'Developing mobile and enterprise applications with a strong foundational background.',
    description: 'My development journey began with Java, which laid a strong foundation for my skills. I further honed these skills working with Java EE for Webservice development during my time at ECOPLAN GmbH.'
  }
]

export const voluntaryWorks: IVoluntaryWork[] = [
  {
    imageSrc: 'https://img.icons8.com/ios-filled/100/primary/fire-station.png',
    dateFrom: '2018',
    dateTill: '2024',
    title: 'Fire Department Fulda-Mitte',
    description: 'Active member of the local fire department, ensuring safety and responding to emergencies.',
    backTitle: 'My Role & Activities',
    backDescription: 'The operational unit is the core of our Volunteer Fire Department. Its members respond to fires, technical rescue operations, severe weather incidents, and other emergencies to protect lives, property, and the environment.\n' +
      '\n' +
      'In addition to emergency responses, our activities include regular training sessions and drills. These ensure the safe handling of modern equipment and the continuous improvement of operational procedures. Teamwork, readiness, and a strong sense of responsibility are central to our commitment to serving the community.',
    backImages: []
  },
  {
    imageSrc: 'https://le-cdn.website-editor.net/s/efd7e5d4de204150b1303cccb1527684/dms3rep/multi/opt/FW+LOGO+HOFB+MITTE+bunt+frei-1920w.png?Expires=1769085645&Signature=ABkjNsIoHTog39Iuis267AmRtzb4UKEjYW3pgAj0SJes-SO2XPI4ddBlXdMOi~djgtM2JUsE1qRXdLNiWtKKgzldVGYPs4fd1AW8-SRZ34N1QRNAqpmAda4ZlxX4nRcx0unWqvWW14DIvYu0H7oVkDRy70NDeGwyDYxV64-y~JbF-7yD9ue3GNcGDmZa9vzoLLhIspkw0UCXMCLio8U82qeQ-AzhreJ72rjMVfeCDvQg2I42GUNG-iLIySeSLhUGVrW-JaanG2-qp~11RDvF1xL2Fyih5cDt1CpgHLy1ThNWwsiLkLqUPAV9cCN4svl0tH1RE9~IVK0mRfRIRjJvVQ__&Key-Pair-Id=K2NXBXLF010TJW',
    dateFrom: '2024',
    dateTill: 'now',
    title: 'Fire Department Hofbieber-Mitte',
    description: 'Active member of the local fire department, ensuring safety and responding to emergencies.',
    backTitle: 'My Role & Activities',
    backDescription: 'The operational unit is the core of our Volunteer Fire Department. Its members respond to fires, technical rescue operations, severe weather incidents, and other emergencies to protect lives, property, and the environment.\n' +
      '\n' +
      'In addition to emergency responses, our activities include regular training sessions and drills. These ensure the safe handling of modern equipment and the continuous improvement of operational procedures. Teamwork, readiness, and a strong sense of responsibility are central to our commitment to serving the community.',
    backImages: [ "https://le-cdn.website-editor.net/s/efd7e5d4de204150b1303cccb1527684/dms3rep/multi/opt/IMG_7335-1920w.JPG?Expires=1768989704&Signature=iETmWl2O3eX~~5jZfuj8XbkIhENAgGNYNDMK-V6HBchu4~UUR6Gcs5sKKq5sELPMz3FrE3yLhnnan4UCaah-31jE8Hu4JBlZNOOy5ot6ri9E08oAu37eHamsbYGEkt2gil22DAuOvySFNW5mfy1xxq1ynSL0AejKN5gfzVEu5edCEmM-zw7LuQ6Q~GXMFoj88gROteAqNWjIguoLmXGjpVfUul6ZNqES21D7tA5sGtllXpdy2y2M3b95OxaLas-94SXzTV9DAvu-mYFdbQjrQ7sUIYGrAY8LjgdTH6Snmc3F~WFM3eLpUDvkzK1Tq3iwVmbs~5XAp1506gU7maTHNA__&Key-Pair-Id=K2NXBXLF010TJW" ]
  }
]