import { Award, BookOpen, Trophy, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const achievements = [
  {
    icon: Trophy,
    title: "Dean's List Award",
    description: "Honored for academic excellence in 1st, 2nd, and 4th semesters. Consistently ranked among top performers in AIML Department.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "9.25 CGPA",
    description: "B.Tech. in Computer Science & Engineering with AI/ML specialization at Manipal University Jaipur (2023-2027).",
    color: "secondary",
  },
];

const certifications = [
  {
    title: "IBM AI Engineering",
    issuer: "Coursera",
    icon: BookOpen,
  },
  {
    title: "MERN Stack + DSA (Sigma 8.0)",
    issuer: "Apna College",
    icon: BookOpen,
  },
  {
    title: "Introduction to ML",
    issuer: "IIT Madras, NPTEL",
    icon: BookOpen,
  },
  {
    title: "Design & Analysis of Algorithms",
    issuer: "IIT Madras, NPTEL",
    icon: BookOpen,
  },
  {
    title: "Programming, DSA using Python",
    issuer: "IIT Madras, NPTEL",
    icon: BookOpen,
  },
  {
    title: "DSA Lab",
    issuer: "CodeChef",
    icon: BookOpen,
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    icon: BookOpen,
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy",
    icon: BookOpen,
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    icon: BookOpen,
  },
];

const colorClasses = {
  primary: "text-primary bg-primary/10 border-primary/30",
  secondary: "text-secondary bg-secondary/10 border-secondary/30",
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-muted/20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span className="font-mono text-primary text-sm">04.</span>
              <h2 className="section-heading">Achievements</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
          </ScrollReveal>

          {/* Main Achievements */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              const colors = colorClasses[achievement.color];
              
              return (
                <ScrollReveal key={achievement.title} delay={idx * 0.1}>
                  <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl ${colors} flex items-center justify-center mb-4 border`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Certifications */}
          <ScrollReveal delay={0.2}>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Certifications
            </h3>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <ScrollReveal key={cert.title} delay={0.3 + idx * 0.05}>
                  <div className="glass-card p-4 hover:border-accent/50 transition-all group h-full">
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
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
