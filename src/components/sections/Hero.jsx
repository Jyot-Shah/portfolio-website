import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-background opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />

      <div className="container relative z-10 pt-10">
        <div className="max-w-6xl mx-auto grid items-center justify-items-center gap-14 md:gap-20 md:grid-cols-[auto,1fr]">
          {/* Profile Picture */}
          <motion.div
            className="relative justify-self-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              {/* Soft ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-primary/30 shadow-[0_0_28px_rgba(0,0,0,0.08)]" />
              {/* Image container */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden border border-border/70 bg-background">
                <img
                  src="/profile-pic.png"
                  alt="Jyot Shah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="text-center flex flex-col items-center">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm text-muted-foreground font-mono">
                Currently building intelligent systems
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I'm{" "}
              <span className="text-primary">Jyot Shah</span>
            </motion.h1>

            {/* Typing Animation Subtitle */}
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6 h-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <TypeWriter
                words={["AI ENGINEER", "FULL-STACK DEVELOPER"]}
                className="text-secondary"
                typingSpeed={100}
                deletingSpeed={80}
                pauseDuration={2000}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-3xl mb-8 leading-relaxed md:mx-0 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Crafting{" "}
              <span className="text-primary font-medium">AI/ML solutions</span> and{" "}
              <span className="text-secondary font-medium">full-stack applications</span>{" "}
              that solve real engineering problems.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {["MERN-Stack", "APIs & Error-handling", "TensorFlow", "Scikit-learn", "Computer Vision"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted/30 border border-border rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button variant="hero" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="ml-1" />
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/Resume_JyotShah.pdf" download>
                  <FileText className="mr-1" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button variant="glass" size="icon" asChild>
                <a href="https://github.com/Jyot-Shah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="glass" size="icon" asChild>
                <a href="https://linkedin.com/in/jyotshah1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-5 h-8 border-2 border-muted-foreground/25 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
