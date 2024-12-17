import TitleWithText from "@/app/components/shared/titleWithText";
import LinkWithIcon from "./shared/linkWithIcon";

const socials = [ {
  name: 'facebook',
  icon: 'bxl-facebook-square',
  url: '',
  classAttribute: ''
},
  {
    name: 'twitter',
    icon: 'bxl-twitter',
    url: '',
    classAttribute: 'pl-4'
  },
  {
    name: 'dribble',
    icon: 'bxl-dribbble',
    url: '',
    classAttribute: 'pl-4'
  },
  {
    name: 'linkedin',
    icon: 'bxl-linkedin',
    url: '',
    classAttribute: 'pl-4'
  },
  {
    name: 'instagram',
    icon: 'bxl-instagram',
    url: '',
    classAttribute: 'pl-4'
  }]

export default function About() {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <TitleWithText
            title="Who am I?"
            subtitle="I'm Christian, an App, Web and Mobile Developer and DevOp"
            titleText="I am an enthusiastic App, Web and Mobile Developer with a broad range of experience about 6+ years.
            At the moment I am working at Reservix GmbH in Freiburg im Breisgau Germany. But in my freetime I am
            interested in new projects,
            experiences and jobs. I am working as a freelancer besides my regular job."></TitleWithText>
          <div
            className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
          >
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">

              { socials.map((item, index) => (
                <LinkWithIcon key={ index }
                              url={ item.url }
                              icon={ item.icon }
                linkAttribute={item.classAttribute}
                iconAttributes={'text-primary hover:text-yellow'}></LinkWithIcon>
              )) }
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML & CSS
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 100 + '%' } }></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">Java</h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 100 + '%' } }></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">C#</h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 100 + '%' } }></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">C/C++</h4>
              <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 90 + '%' } }></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                JavaScript | TypeScript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 100 + '%' } }></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">PHP (Symfony & Laravel)</h4>
              <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 90 + '%' } }></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">DevOPs (Gitlab CI, Teamcity, Terraform,
                Docker,
                Kubernetes)</h4>
              <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 90 + '%' } }></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">SQL & noSQL Databases (MSSQL, MySQL,
                MongoDB)</h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-primary" style={ { width: 90 + '%' } }></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}