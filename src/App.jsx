import Layout from "./comportents/layout/Layout";
import AboutSection from "./comportents/sections/AboutSection";
import ContactSection from "./comportents/sections/ContactSection";
import GoalsSection from "./comportents/sections/GoalsSection";
import HeroSection from "./comportents/sections/HeroSection";
import ProjectsSection from "./comportents/sections/ProjectSection";
import Separator from "./comportents/sections/Separator";
import SkillsSection from "./comportents/sections/SkillsSection";
import TechStackSection from "./comportents/sections/TechStackSection";


function App() {
  return (
 

    <Layout>
      <HeroSection/>
      <Separator/>
     <AboutSection/>
      <Separator/>
     <TechStackSection/>
      <Separator/>
     <SkillsSection/>
      <Separator/>
      <ProjectsSection />
       <Separator/>
      <GoalsSection/>
       <Separator/>
      <ContactSection />
      <Separator/>
    </Layout>
  );
}

export default App;
