import { ExternalLink, Github, Leaf, Home, Music, FileText, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const projects = [
  {
    title: "Plant Leaf Disease Detection System",
    icon: Leaf,
    highlights: [
      "Built end-to-end detection using custom-trained YOLOv11 on augmented PlantDoc dataset",
      "Achieved ~85% validation accuracy with optimized preprocessing and real-time inference deployed via Flask",
      "Integrated Gemini 2.0 Flash chatbot for context-aware treatment recommendations",
    ],
    tech: ["YOLOv11", "Flask", "Gemini 2.0 Flash", "Pillow", "Roboflow(Dataset)"],
    github: "https://github.com/Jyot-Shah/Plant-Leaf-Disease-Detection",
    color: "primary",
  },
  {
    title: "WanderLust – Airbnb-Style Web App",
    icon: Home,
    highlights: [
      "Developed a full-stack Airbnb clone using Node.js, Express.js, MongoDB, and EJS templates, implementing secure authentication (Passport.js), session management, and complete CRUD operations for listings and reviews",
      "Improved backend efficiency by ~30% through optimized routing and error-handling middlewares",
      "Integrated Cloudinary + Mapbox, reduced invalid form submissions with Joi validation",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Mapbox", "Passport.js", "Joi"],
    github: "https://github.com/Jyot-Shah/WanderLust",
    live: "https://wanderlust-hoyf.onrender.com/",
    color: "secondary",
  },
  {
    title: "Emotion-Based Song Recommendation Chatbot",
    icon: Music,
    highlights: [
      "AI chatbot classifying user emotions using NLP and sentiment analysis",
      "Used Chatterbot for efficient chatting responses in the chatbot",
      "Modular Flask backend with NLTK for real-time emotion detection and playlist mapping",
    ],
    tech: ["Python", "Flask", "NLP", "NLTK", "Chatterbot"],
    github: "https://github.com/Jyot-Shah/Song-Recommendation-Chatbot",
    color: "accent",
  },
  {
    title: "MoneyMatic - Financial Documents Classifier",
    icon: FileText,
    highlights: [
      "AI-powered web app extracting and classifying scanned financial documents using OCR, NLP, and deep learning",
      "Trained custom deep learning model to classify documents into: Balance Sheets, Cash Flow Statements, Income Statements, Notes, and Others",
      "Built with secure user authentication system using Node.js and MongoDB with bank-level security",
      "User-friendly dashboard for uploading and processing financial documents with automated text extraction and data cleaning",
    ],
    tech: ["Node.js", "MongoDB", "Tesseract OCR", "Scikit-learn"],
    github: "https://github.com/Jyot-Shah/MoneyMatic",
    color: "primary",
  },
  {
    title: "Employee Management System",
    icon: Database,
    highlights: [
      "Python-based DBMS connecting to MySQL for managing business operations including tasks, sales, and employee data",
      "Modular architecture with separate modules for CEO/CTO operations, staff management, and client interactions",
    ],
    tech: ["Python", "MySQL", "mysql-connector"],
    github: "https://github.com/Jyot-Shah/DBMS",
    color: "secondary",
  },
];

const colorClasses = {
  primary: {
    icon: "text-primary",
    border: "hover:border-primary/50",
    glow: "group-hover:glow-primary",
    badge: "bg-primary/10 text-primary border-primary/30",
  },
  secondary: {
    icon: "text-secondary",
    border: "hover:border-secondary/50",
    glow: "group-hover:glow-secondary",
    badge: "bg-secondary/10 text-secondary border-secondary/30",
  },
  accent: {
    icon: "text-accent",
    border: "hover:border-accent/50",
    glow: "group-hover:glow-accent",
    badge: "bg-accent/10 text-accent border-accent/30",
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-primary text-sm">03.</span>
              <h2 className="section-heading">Featured Projects</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => {
              const colors = colorClasses[project.color];
              const Icon = project.icon;
              
              return (
                <ScrollReveal key={project.title} delay={idx * 0.15}>
                  <div
                    className={`glass-card p-6 md:p-8 group transition-all duration-500 ${colors.border} ${colors.glow}`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${colors.icon}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.icon.replace('text-', 'bg-')}`} />
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2 py-1 text-xs font-mono rounded border ${colors.badge}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-2">
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          </Button>
                          {project.live && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
