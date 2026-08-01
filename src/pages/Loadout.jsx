import {
  Database,
  Terminal,
  Globe,
  Cpu,
  Wrench,
  ShieldAlert,
} from "lucide-react";

const loadoutCategories = [
  {
    title: "AI / ML Core",
    icon: <Cpu className="w-5 h-5 text-tactical-cyan" />,
    color: "from-tactical-cyan/20 to-transparent",
    border: "border-tactical-cyan",
    barColor: "bg-tactical-cyan",
    shadow: "shadow-[0_0_10px_#00D9FF]",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "YOLOv11 & ViTs", level: 95 },
      { name: "OpenCV & Keras", level: 85 },
      { name: "NLP & Scikit-learn", level: 85 },
      { name: "RAG & Gemini AI", level: 90 },
      { name: "PyTorch", level: 75 },
    ],
  },
  {
    title: "Backend Infrastructure",
    icon: <Database className="w-5 h-5 text-tactical-purple" />,
    color: "from-tactical-purple/20 to-transparent",
    border: "border-tactical-purple",
    barColor: "bg-tactical-purple",
    shadow: "shadow-[0_0_10px_#8B5CF6]",
    skills: [
      { name: "Node.js Platform", level: 95 },
      { name: "Express.js & EJS", level: 90 },
      { name: "Flask & Python", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "MongoDB & MySQL", level: 85 },
      { name: "Passport.js & Joi", level: 85 },
    ],
  },
  {
    title: "Frontend Interface",
    icon: <Globe className="w-5 h-5 text-tactical-teal" />,
    color: "from-tactical-teal/20 to-transparent",
    border: "border-tactical-teal",
    barColor: "bg-tactical-teal",
    shadow: "shadow-[0_0_10px_#00F5D4]",
    skills: [
      { name: "React System", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML & UI/UX", level: 85 },
    ],
  },
  {
    title: "Language Protocols",
    icon: <Terminal className="w-5 h-5 text-tactical-amber" />,
    color: "from-tactical-amber/20 to-transparent",
    border: "border-tactical-amber",
    barColor: "bg-tactical-amber",
    shadow: "shadow-[0_0_10px_#FFC857]",
    skills: [
      { name: "JavaScript / ES6", level: 95 },
      { name: "Python 3+", level: 90 },
      { name: "C++ Foundation", level: 80 },
      { name: "SQL Syntax", level: 80 },
    ],
  },
  {
    title: "Tools & Arsenal",
    icon: <Wrench className="w-5 h-5 text-white" />,
    color: "from-white/10 to-transparent",
    border: "border-white/50",
    barColor: "bg-white",
    shadow: "shadow-[0_0_10px_#FFFFFF]",
    skills: [
      { name: "NumPy / Pandas", level: 90 },
      { name: "Git Operations", level: 85 },
      { name: "Render / Vercel Deploy", level: 80 },
      { name: "Cloudinary & Mapbox", level: 85 },
      { name: "Google Colab & Kaggle", level: 90 },
    ],
  },
  {
    title: "Core Mechanics",
    icon: <ShieldAlert className="w-5 h-5 text-destructive" />,
    color: "from-destructive/20 to-transparent",
    border: "border-destructive",
    barColor: "bg-destructive",
    shadow: "shadow-[0_0_10px_#EF4444]",
    skills: [
      { name: "Data Structures (DSA)", level: 90 },
      { name: "Object Oriented Prog", level: 95 },
      { name: "DBMS & OS", level: 85 },
      { name: "MVC Architecture", level: 80 },
      { name: "Computer Networks", level: 80 },
    ],
  },
];

export default function Loadout() {
  return (
    <div className="flex flex-col items-center min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-tactical-cyan/30 pb-4 mb-8">
        <div>
          <div className="text-tactical-cyan font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-tactical-cyan rounded-full animate-ping" />
            Armory // Technical Proficiencies
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
            Skills Loadout
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            MODULES: <span className="text-white">30 EQUIPPED</span>
          </div>
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            SYSTEM:{" "}
            <span className="text-tactical-teal animate-pulse">OPTIMIZED</span>
          </div>
        </div>
      </div>

      {/* Grid of Loadout Lockers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {loadoutCategories.map((category, idx) => (
          <div
            key={idx}
            className={`glass-card p-0 overflow-hidden relative group hover:border-current transition-colors border-white/10`}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`}
            />

            {/* Header */}
            <div
              className={`border-b border-white/10 p-4 flex items-center gap-3 relative z-10 bg-black/60`}
            >
              {category.icon}
              <h2 className="font-mono text-white text-sm font-bold tracking-widest uppercase">
                {category.title}
              </h2>
            </div>

            {/* List of skills simulating caliber/progress */}
            <div className="p-4 space-y-4 relative z-10">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <div className="flex justify-between items-end font-mono text-[10px] tracking-widest uppercase">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-white/40">LVL {skill.level}</span>
                  </div>
                  {/* Progress track */}
                  <div className="w-full h-1 bg-white/10 overflow-hidden relative">
                    <div
                      className={`h-full ${category.barColor} ${category.shadow}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tactical overlay decorative line */}
            <div
              className={`absolute bottom-0 left-0 h-0.5 ${category.barColor} transition-all duration-500 w-0 group-hover:w-full`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
