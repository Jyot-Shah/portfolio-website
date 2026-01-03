import { Code2, Brain, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-primary text-sm">01.</span>
              <h2 className="section-heading">About Me</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main About Text */}
            <ScrollReveal className="md:col-span-2 space-y-6" delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Computer Science undergraduate</span> at 
                Manipal University Jaipur, specializing in AI & ML. I obsess over building systems that 
                actually work—whether that's training a YOLOv11 model to detect plant diseases or 
                architecting a full-stack app that handles real users posting their travel posts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What excites me? The intersection of{" "}
                <span className="text-primary">machine learning</span> and{" "}
                <span className="text-secondary">full-stack engineering</span>—taking models from notebooks 
                to production, building clean APIs, and solving problems that have tangible impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently maintaining a <span className="text-foreground font-medium">9.25 CGPA</span> while 
                shipping projects, earning certifications, and consistently landing on the 'Dean's List' for
                academic excellence.
              </p>
            </ScrollReveal>

            {/* Quick Stats */}
            <div className="space-y-4">
              <ScrollReveal delay={0.2}>
                <div className="glass-card p-4 hover:border-primary/50 transition-colors group">
                  <Code2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">Full-Stack</h3>
                  <p className="text-sm text-muted-foreground">MERN, Flask, RESTful APIs</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="glass-card p-4 hover:border-secondary/50 transition-colors group">
                  <Brain className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">AI/ML</h3>
                  <p className="text-sm text-muted-foreground">TensorFlow, Pillow, CV, NLP</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="glass-card p-4 hover:border-accent/50 transition-colors group">
                  <Layers className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">Systems</h3>
                  <p className="text-sm text-muted-foreground">DSA, DBMS, OS, OOP</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
