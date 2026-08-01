import {
  ExternalLink,
  Github,
  Leaf,
  Home,
  Music,
  FileText,
  Database,
  Shield,
  Target,
  Cpu,
} from "lucide-react";

// Safelist for Tailwind dynamic color concatenation
const TACTICAL_SAFELIST =
  "border-tactical-amber/30 border-tactical-amber/50 border-tactical-teal/30 border-tactical-teal/50 border-tactical-cyan/30 border-tactical-cyan/50 border-tactical-purple/30 border-tactical-purple/50";

const missions = [
  {
    title: "Forge - AI Developer Workspace",
    codename: "OP // FORGE",
    icon: Cpu,
    highlights: [
      "AI-powered workspace with continuous asynchronous document ingestion via background workers.",
      "Hybrid RAG pipeline combining lexical and semantic retrieval using Reciprocal Rank Fusion (RRF).",
      "Persistent memory engine capturing project knowledge securely in a multi-tenant JWT architecture.",
    ],
    tech: ["React", "Node.js", "Gemini 3.1", "Qdrant", "MongoDB", "BullMQ"],
    github: "https://github.com/Jyot-Shah/forge",
    live: "https://forge1workspace.vercel.app/",
    color: "text-tactical-amber",
    borderColor: "border-tactical-amber",
    hoverBorder: "hover:border-tactical-amber",
    bgAccent: "bg-tactical-amber/10",
  },
  {
    title: "Plant Leaf Disease Detection",
    codename: "OP // VIRIDIAN",
    icon: Leaf,
    highlights: [
      "Built end-to-end detection using custom-trained YOLOv11 on augmented PlantDoc dataset",
      "Achieved ~96% validation accuracy with optimized preprocessing and real-time inference deployed via Flask",
      "Integrated Gemini 2.5 Flash chatbot for context-aware treatment recommendations",
    ],
    tech: ["YOLOv11", "Flask", "Gemini 2.5", "Pillow", "Roboflow"],
    github: "https://github.com/Jyot-Shah/Plant-Leaf-Disease-Detection",
    color: "text-tactical-teal",
    borderColor: "border-tactical-teal",
    hoverBorder: "hover:border-tactical-teal",
    bgAccent: "bg-tactical-teal/10",
  },
  {
    title: "InfraGhost AI",
    codename: "OP // SPECTER",
    icon: Shield,
    highlights: [
      "Full-stack AI platform using Gemini Vision to analyze geotagged citizen submissions",
      "Hardened Express.js backend with Helmet CSP, rate limiting, and XSS-safe rendering",
      "Client-side image compression optimizing AI token usage, reducing payload by 60%",
      "Interactive Mapbox dashboard with exportable reporting",
    ],
    tech: ["Node.js", "Express.js", "Gemini Vision", "MongoDB", "Mapbox"],
    github: "https://github.com/Jyot-Shah/InfraGhost-AI",
    live: "https://infraghost-ai.onrender.com/",
    color: "text-tactical-cyan",
    borderColor: "border-tactical-cyan",
    hoverBorder: "hover:border-tactical-cyan",
    bgAccent: "bg-tactical-cyan/10",
  },
  {
    title: "WanderLust",
    codename: "OP // NOMAD",
    icon: Home,
    highlights: [
      "Developed a full-stack Airbnb clone using Node.js, Express.js, MongoDB, and EJS templates",
      "Improved backend efficiency by ~30% through optimized routing and error-handling",
      "Integrated Cloudinary + Mapbox, robust validation with Joi",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js"],
    github: "https://github.com/Jyot-Shah/WanderLust",
    live: "https://wanderlust-hoyf.onrender.com/",
    color: "text-tactical-purple",
    borderColor: "border-tactical-purple",
    hoverBorder: "hover:border-tactical-purple",
    bgAccent: "bg-tactical-purple/10",
  },
  {
    title: "Emotion-Based Song Recommendation Chatbot",
    codename: "OP // RESONANCE",
    icon: Music,
    highlights: [
      "AI chatbot classifying user emotions using NLP and sentiment analysis",
      "Used Chatterbot for efficient chatting responses in the chatbot",
      "Modular Flask backend with NLTK for real-time emotion detection",
    ],
    tech: ["Python", "Flask", "NLP", "NLTK", "Chatterbot"],
    github: "https://github.com/Jyot-Shah/Song-Recommendation-Chatbot",
    color: "text-tactical-amber",
    borderColor: "border-tactical-amber",
    hoverBorder: "hover:border-tactical-amber",
    bgAccent: "bg-tactical-amber/10",
  },
  {
    title: "MoneyMatic - Financial Doc AI",
    codename: "OP // LEDGER",
    icon: FileText,
    highlights: [
      "AI-powered web app extracting and classifying scanned financial documents",
      "Trained custom deep learning model to classify Balance Sheets, Cash Flow, etc.",
      "Secure user authentication system using Node.js and MongoDB",
    ],
    tech: ["Node.js", "MongoDB", "Tesseract OCR", "Scikit-learn"],
    github: "https://github.com/Jyot-Shah/MoneyMatic",
    color: "text-tactical-teal",
    borderColor: "border-tactical-teal",
    hoverBorder: "hover:border-tactical-teal",
    bgAccent: "bg-tactical-teal/10",
  },
  {
    title: "Employee DBMS Prototype",
    codename: "OP // OVERSEER",
    icon: Database,
    highlights: [
      "Python-based DBMS connecting to MySQL for managing business operations",
      "Modular architecture for CEO, staff, and client management",
    ],
    tech: ["Python", "MySQL", "mysql-connector"],
    github: "https://github.com/Jyot-Shah/DBMS",
    color: "text-tactical-cyan",
    borderColor: "border-tactical-cyan",
    hoverBorder: "hover:border-tactical-cyan",
    bgAccent: "bg-tactical-cyan/10",
  },
];

export default function MissionControl() {
  return (
    <div className="flex flex-col items-center min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/20 pb-4 mb-8">
        <div>
          <div className="text-white/60 font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <Target className="w-3 h-3 text-tactical-amber animate-pulse" />
            Tactical Operations Board
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
            Mission Control
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            ACTIVE OPERATIONS: <span className="text-white">07</span>
          </div>
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            THREAT LEVEL:{" "}
            <span className="text-tactical-amber animate-pulse">ELEVATED</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {missions.map((mission, idx) => {
          const Icon = mission.icon;
          return (
            <div
              key={idx}
              className={`glass-card p-0 relative group flex flex-col h-full border ${mission.borderColor.replace("border-", "border-")}/30 ${mission.hoverBorder}`}
            >
              {/* Card Header */}
              <div
                className={`p-4 border-b border-white/10 flex items-center justify-between ${mission.bgAccent}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${mission.color}`} />
                  <div>
                    <div
                      className={`font-mono text-[10px] tracking-widest uppercase ${mission.color}`}
                    >
                      {mission.codename}
                    </div>
                    <h2 className="font-heading font-bold text-white uppercase text-lg leading-tight">
                      {mission.title}
                    </h2>
                  </div>
                </div>
                <div className="text-white/30 font-mono text-xs">
                  #{String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Briefing Details */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-mono text-xs text-white/50 tracking-widest uppercase mb-3 border-b border-white/10 pb-1 w-max">
                  Mission Briefing
                </div>
                <ul className="space-y-3 font-sans text-sm text-white/70 mb-6 flex-1">
                  {mission.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2">
                      <span
                        className={`w-1 h-4 shrink-0 ${mission.bgAccent.replace("/10", "")}`}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Footer Tech & Links */}
                <div className="mt-auto pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {mission.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2 py-0.5 text-[10px] font-mono tracking-wider border ${mission.borderColor}/50 ${mission.color}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <a
                      href={mission.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white/50 bg-white/10 hover:bg-transparent transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    {mission.live && (
                      <a
                        href={mission.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 border ${mission.borderColor} ${mission.bgAccent} hover:bg-transparent transition-colors`}
                      >
                        <ExternalLink className={`w-4 h-4 ${mission.color}`} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
