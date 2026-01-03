import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Resume = () => {
  return (
    <section id="resume" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-primary text-sm">05.</span>
              <h2 className="section-heading">Resume</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 md:p-8">
              {/* Resume Preview */}
              <div className="aspect-[8.5/11] w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden border border-border bg-background/50">
                <iframe
                  src="/Resume_JyotShah.pdf"
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>

              {/* Download Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/Resume_JyotShah.pdf" download>
                    <Download className="mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="/Resume_JyotShah.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" />
                    Open in New Tab
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
