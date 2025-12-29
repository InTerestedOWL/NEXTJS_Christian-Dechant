import About from "@/app/components/about";
import Portfolio from "@/app/components/portfolio";
import Experience from "@/app/components/experience";
import FinishedProjects from "@/app/components/finishedprojects";
import Blog from "@/app/components/blog";
import Contact from "@/app/components/contact";
import SoftwareTechnologies from "./components/softwaretechnologies";
import Map from "./components/map";
import SubFooter from "./components/subfooter";
import { contactBoxes, experiences, skills, socials, technologies, voluntaryWorks } from "./data";
import Offers from "./components/offers";
import CustomerTestimonials from "@/app/components/testimonials";
import VoluntaryWork from "@/app/components/voluntaryWork";

export default function Home() {
  return (
    <>
      <About
        socials={ socials }
        skills={ skills }></About>
      <CustomerTestimonials/>
      <VoluntaryWork
        voluntaryWorks={ voluntaryWorks }></VoluntaryWork>
      <Offers></Offers>

      <Portfolio></Portfolio>
      <SoftwareTechnologies
        technologies={ technologies }></SoftwareTechnologies>
      <Experience
        experiences={ experiences }></Experience>
      <FinishedProjects></FinishedProjects>
      <Blog></Blog>
      <Contact
        contactBoxes={ contactBoxes }></Contact>
      <Map></Map>
      <SubFooter></SubFooter>
    </>
  );
}
