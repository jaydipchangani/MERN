import LeftComponent from "../components/LeftComponent";
import RightComponent from "../components/RightComponent";
import { useRef } from "react";

function Home() {
    const scrollContainerRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);


  const scrollToSection = (sectionRef) => {
    if (scrollContainerRef.current && sectionRef.current) {
      scrollContainerRef.current.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }

  };
  return (
    <div className="flex h-screen overflow-hidden ">
        <LeftComponent  onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToExperience={() => scrollToSection(experienceRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}/>

        <RightComponent scrollContainerRef={scrollContainerRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}/>
    </div>
  );
}

export default Home;
