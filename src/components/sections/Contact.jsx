import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative bg-muted/20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <ScrollReveal>
            <span className="font-mono text-primary text-sm mb-4 block">06. What's Next?</span>
            <h2 className="section-heading mb-6">Let's Build Something</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Got an idea, internship opportunity, or a problem worth solving?
              <br />
              I'm always open to discussing new projects and collaborations.
            </p>
          </ScrollReveal>

          {/* Contact Actions */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:jyotshah1595@gmail.com">
                  <Mail className="mr-2" />
                  Say Hello
                </a>
              </Button>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={0.3}>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Jyot-Shah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/jyotshah1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.credly.com/users/jyot-shah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Credly"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
