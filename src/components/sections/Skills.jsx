import { ScrollReveal } from "@/components/ui/ScrollReveal";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    color: "primary",
    skills: ["TensorFlow", "Scikit-learn", "Keras", "OpenCV", "Pillow", "NLP", "Computer Vision"],
  },
  {
    title: "Languages",
    color: "secondary",
    skills: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    color: "accent",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "EJS"],
  },
  {
    title: "Backend & Databases",
    color: "primary",
    skills: ["Node.js", "Express.js", "Flask", "RESTful APIs", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Frameworks",
    color: "secondary",
    skills: ["NumPy", "Pandas", "Matplotlib", "Git/GitHub", "Cloudinary", "Mapbox", "Google Colab", "Render", "Vercel"],
  },
  {
    title: "Core Concepts",
    color: "accent",
    skills: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks", "MVC Architecture"],
  },
];

const colorClasses = {
  primary: "border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary",
  secondary: "border-secondary/30 hover:border-secondary hover:bg-secondary/10 hover:text-secondary",
  accent: "border-accent/30 hover:border-accent hover:bg-accent/10 hover:text-accent",
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-muted/20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-primary text-sm">02.</span>
              <h2 className="section-heading">Skills & Tech</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <ScrollReveal key={category.title} delay={idx * 0.1}>
                <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 h-full">
                  <h3 className={`font-semibold text-lg mb-4 ${
                    category.color === "primary" ? "text-primary" :
                    category.color === "secondary" ? "text-secondary" : "text-accent"
                  }`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                          className={`skill-badge ${colorClasses[category.color]}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
