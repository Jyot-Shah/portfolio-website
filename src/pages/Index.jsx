import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    // Console message
    console.log(
      "%c👋 Hey there, curious developer!",
      "color: #00e5cc; font-size: 20px; font-weight: bold;"
    );
    console.log(
      "%cThanks for checking out my portfolio. If you're reading this, we probably share the same curiosity for how things work under the hood.",
      "color: #bfff00; font-size: 14px;"
    );
    console.log(
      "%c→ Let's connect: jyotshah1595@gmail.com",
      "color: #c084fc; font-size: 12px;"
    );
  }, []);

  return (
    <div className="relative noise-overlay">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
