import type { NextPage } from "next";
import ExperienceSection from "../components/home/ExperienceSection";
import HeroSection from "../components/home/HeroSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import OfferingsSection from "../components/home/OfferingsSection";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mb-80 space-y-32">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <OfferingsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
