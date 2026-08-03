import {
  Award,
  BookOpen,
  Trophy,
  GraduationCap,
  Lock,
  ShieldCheck,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Dean's List",
    description:
      "Honored for academic excellence in 1st, 2nd, and 4th semesters. Consistently ranked among top performers in AIML Department of MUJ.",
    color: "text-tactical-amber",
    bgColor: "bg-tactical-amber/10",
    borderColor: "border-tactical-amber/50",
  },
  {
    icon: GraduationCap,
    title: "CGPA: 9.21",
    description:
      "B.Tech. in Computer Science & Engineering with AI/ML specialization at Manipal University Jaipur (2023-2027).",
    color: "text-tactical-cyan",
    bgColor: "bg-tactical-cyan/10",
    borderColor: "border-tactical-cyan/50",
  },
];

const certifications = [
  { title: "IBM AI Engineering Professional Certificate", issuer: "Coursera" },
  { title: "MERN Stack + DSA (Sigma 8.0)", issuer: "Apna College" },
  { title: "Introduction to ML", issuer: "IIT Madras, NPTEL" },
  { title: "Design & Analysis of Algorithms", issuer: "IIT Madras, NPTEL" },
  { title: "Programming, DSA using Python", issuer: "IIT Madras, NPTEL" },
  { title: "DSA Lab", issuer: "CodeChef" },
  {
    title: "CCNA: Switching, Routing, and Wireless",
    issuer: "Cisco Networking Academy",
  },
  { title: "Python Essentials 1 & 2", issuer: "Cisco Networking" },
  { title: "Database Programming with SQL", issuer: "Oracle Academy" },
  { title: "Deep Learning - IIT Ropar", issuer: "IIT Madras, NPTEL" },
];

export default function AchievementVault() {
  return (
    <div className="flex flex-col min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-tactical-purple/30 pb-4 mb-8">
        <div>
          <div className="text-tactical-purple font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <Lock className="w-3 h-3 text-tactical-purple" />
            Classified Records
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
            Achievement Vault
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            CLEARANCE:{" "}
            <span className="text-tactical-teal animate-pulse">GRANTED</span>
          </div>
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            RECORDS:{" "}
            <span className="text-white">
              {certifications.length + achievements.length} SECURED
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Major Achievements */}
        <div>
          <h2 className="font-mono text-white/50 text-sm tracking-widest uppercase flex items-center gap-2 mb-6 border-l-2 border-tactical-purple pl-3">
            <Trophy className="w-4 h-4 text-tactical-purple" /> Commendations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achieve, idx) => {
              const Icon = achieve.icon;
              return (
                <div
                  key={idx}
                  className={`glass-card p-6 border ${achieve.borderColor} group relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${achieve.bgColor} opacity-0 group-hover:opacity-50 transition-opacity`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-black border ${achieve.borderColor} flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                      >
                        <Icon className={`w-6 h-6 ${achieve.color}`} />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white tracking-wide uppercase">
                        {achieve.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm font-sans leading-relaxed text-justify">
                      {achieve.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Vault */}
        <div>
          <h2 className="font-mono text-white/50 text-sm tracking-widest uppercase flex items-center gap-2 mb-6 border-l-2 border-tactical-purple pl-3">
            <ShieldCheck className="w-4 h-4 text-tactical-purple" /> Validated
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => {
              const colorPatterns = [
                {
                  text: "group-hover:text-tactical-cyan",
                  border: "group-hover:border-tactical-cyan",
                  panelBorder: "hover:border-tactical-cyan/50",
                },
                {
                  text: "group-hover:text-tactical-amber",
                  border: "group-hover:border-tactical-amber",
                  panelBorder: "hover:border-tactical-amber/50",
                },
                {
                  text: "group-hover:text-tactical-purple",
                  border: "group-hover:border-tactical-purple",
                  panelBorder: "hover:border-tactical-purple/50",
                },
                {
                  text: "group-hover:text-tactical-teal",
                  border: "group-hover:border-tactical-teal",
                  panelBorder: "hover:border-tactical-teal/50",
                },
              ];
              const theme = colorPatterns[idx % colorPatterns.length];

              return (
                <div
                  key={idx}
                  className={`glass-card p-4 flex gap-4 items-center group ${theme.panelBorder} border-white/10 transition-colors bg-black/40`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center border border-white/20 bg-white/5 text-white/50 ${theme.border} ${theme.text} transition-colors shrink-0`}
                  >
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4
                      className={`font-mono text-white text-xs tracking-wider uppercase font-bold ${theme.text} transition-colors`}
                    >
                      {cert.title}
                    </h4>
                    <p className="font-mono text-[9px] text-white/40 tracking-widest uppercase mt-1">
                      ISSUER: {cert.issuer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
