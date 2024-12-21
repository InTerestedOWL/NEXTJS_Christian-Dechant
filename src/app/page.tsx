import About from "@/app/components/about";
import Services from "@/app/components/services";
import Portfolio from "@/app/components/portfolio";
import Experience from "@/app/components/experience";
import FinishedProjects from "@/app/components/finishedprojects";
import Blog from "@/app/components/blog";
import Contact from "@/app/components/contact";
import SoftwareTechnologies from "./components/softwaretechnologies";
import Map from "./components/map";
import SubFooter from "./components/subfooter";
import { contactBoxes, experiences, services, skills, socials, technologies } from "./data";
import Education from "./components/education";

export default function Home() {
  return (
    <>
      <About
        socials={ socials }
        skills={ skills }></About>
      <Education></Education>
      <Services
        services={ services }></Services>
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
