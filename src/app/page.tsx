import About from "@/app/components/about";
import Services from "@/app/components/services";
import Portfolio from "@/app/components/portfolio";
import Experience from "@/app/components/experience";
import FinishedProjects from "@/app/components/finishedprojects";
import Blog from "@/app/components/blog";
import Contact from "@/app/components/contact";
import SoftwareTechnologies from "./components/softwaretechnologies";
import Clients from "./components/clients";

export default function Home() {
  return (
    <>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <SoftwareTechnologies></SoftwareTechnologies>
      <Experience></Experience>
      <FinishedProjects></FinishedProjects>
      <Blog></Blog>
      <Contact></Contact>
    </>
  );
}
