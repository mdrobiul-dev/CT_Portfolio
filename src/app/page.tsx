import ContactSection from "@/components/ContactSection";
import HereSection from "@/components/HereSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HereSection />
        <WorkExperience />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
