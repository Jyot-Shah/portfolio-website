import {
  Award,
  MapPin,
  Calendar,
  Star,
  CheckCircle2,
  ShieldAlert,
  Cpu,
} from "lucide-react";

export default function OperationalHistory() {
  const experiences = [
    {
      id: "01",
      role: "AI Backend Developer",
      location:
        "Southern Federal University (Russia) × Manipal University Jaipur",
      subLocation: "International Interdisciplinary Student Project",
      duration: "Nov 2025 — May 2026",
      description:
        "Built the backend architecture for AssistMe, an AI powered product intelligence platform enabling conversational recommendations and intelligent device comparison. Designed scalable FastAPI services, secure authentication, and automated product ingestion pipelines processing over 10,000+ electronic product specifications.",
      highlights: [
        "Designed secure FastAPI backend with modular AI service architecture",
        "Built JWT authentication and authorization workflows",
        "Developed PostgreSQL data models and ingestion pipelines",
        "Automated processing of 10K+ product specifications",
        "Enabled conversational AI based product recommendations",
        "Built intelligent comparison APIs for consumer electronics",
      ],
      techStack: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "JWT",
        "Grok LLM",
        "REST APIs",
      ],
      badges: [
        "+10K Products",
        "Scalable Backend",
        "International Collaboration",
      ],
      themeColor: "tactical-cyan",
    },
    {
      id: "02",
      role: "ML Research Engineer",
      location: "Freelance Project",
      subLocation: "Research Implementation",
      duration: "Jan 2026 — May 2026",
      description:
        "Implemented and enhanced an IEEE Access inspired ANN based image encryption framework focused on improving diffusion, nonlinear substitution, and cryptographic robustness. Built an automated benchmarking pipeline validating performance against multiple baseline architectures while achieving near ideal encryption metrics.",
      highlights: [
        "Enhanced ANN based image encryption framework",
        "Optimized XOR diffusion and nonlinear substitution algorithms",
        "Developed automated benchmarking and evaluation pipeline",
        "Improved key sensitivity through optimized ANN mappings",
        "Validated against multiple baseline encryption architectures",
        "Achieved cryptographic grade security metrics",
      ],
      performance: [
        { label: "Entropy", value: "7.9977 bits" },
        { label: "NPCR", value: "99.67%" },
        { label: "UACI", value: "33.57%" },
        { label: "SSIM", value: "1.000" },
      ],
      techStack: [
        "Python",
        "TensorFlow",
        "NumPy",
        "ANN",
        "Cryptography",
        "Computer Vision",
      ],
      badges: ["IEEE Research", "Perfect Decryption", "99.67% NPCR"],
      themeColor: "tactical-purple",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-tactical-teal/30 pb-4 mb-10 animate-fade-up">
        <div>
          <div className="text-tactical-teal font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-tactical-teal rounded-full animate-pulse-glow" />
            Operational Experience
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
            Service Record
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            LOGS_COMPILED:{" "}
            <span className="text-white">{experiences.length} Operations</span>
          </div>
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            STATUS:{" "}
            <span className="text-tactical-cyan animate-pulse">
              ALL CLEARED
            </span>
          </div>
        </div>
      </div>

      {/* Experience List */}
      <div className="grid grid-cols-1 w-full gap-10">
        {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className={`w-full glass-card border border-${exp.themeColor}/30 hover:border-${exp.themeColor}/70 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] p-6 md:p-8 animate-fade-up group relative overflow-hidden bg-black/40 transition-all duration-500`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Dynamic Backgrounds */}
            <div
              className={`absolute inset-0 bg-grid-background opacity-5 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay`}
            />
            <div
              className={`absolute inset-0 bg-${exp.themeColor}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            />
            <div
              className={`absolute left-0 top-0 w-full h-[1px] bg-${exp.themeColor}/50 shadow-[0_0_15px_currentColor] hidden group-hover:block animate-scanline pointer-events-none`}
            />

            {/* Background elements */}
            <div
              className={`absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 text-${exp.themeColor} pointer-events-none group-hover:scale-110 transition-all duration-700 z-0`}
            >
              <Award className="w-48 h-48 md:w-64 md:h-64" />
            </div>
            <div
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-${exp.themeColor}/40 group-hover:bg-${exp.themeColor} transition-colors duration-500 shadow-[0_0_15px_currentColor]`}
            />

            {/* Title Header */}
            <div
              className={`text-${exp.themeColor} font-mono font-bold tracking-widest uppercase mb-6 flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4`}
            >
              <div>
                <div className="text-[10px] text-white/50 tracking-widest mb-1 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 bg-${exp.themeColor} animate-pulse-glow`}
                  />
                  OPERATION {exp.id}
                </div>
                <h3 className="text-2xl md:text-3xl font-heading text-white">
                  {exp.role}
                </h3>
              </div>
              <div className="mt-2 md:mt-0 flex items-center gap-2 text-tactical-amber text-xs font-bold px-3 py-1 bg-tactical-amber/10 border border-tactical-amber/20 uppercase">
                <Star className="w-3 h-3 fill-tactical-amber" /> Completed
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 font-mono">
              {/* Left Column (Metadata & Description) */}
              <div className="space-y-6">
                {/* Meta details */}
                <div className="flex flex-col gap-4">
                  {exp.location && (
                    <div className="flex items-start gap-3">
                      <MapPin
                        className={`w-5 h-5 text-${exp.themeColor} shrink-0`}
                      />
                      <div>
                        <div className="text-[10px] text-white/40 uppercase mb-0.5">
                          Location
                        </div>
                        <div className="text-xs md:text-sm text-white/90">
                          {exp.location}
                        </div>
                        {exp.subLocation && (
                          <div className="text-[10px] text-white/60 mt-0.5">
                            {exp.subLocation}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {exp.duration && (
                    <div className="flex items-start gap-3">
                      <Calendar
                        className={`w-5 h-5 text-${exp.themeColor} shrink-0`}
                      />
                      <div>
                        <div className="text-[10px] text-white/40 uppercase mb-0.5">
                          Duration
                        </div>
                        <div className="text-xs md:text-sm text-white/90">
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                {exp.description && (
                  <div>
                    <div className="text-[10px] text-white/40 uppercase mb-2 border-b border-white/10 pb-1">
                      Briefing
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed font-sans text-justify">
                      {exp.description}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                {exp.techStack && (
                  <div>
                    <div className="text-[10px] text-white/40 uppercase mb-2 border-b border-white/10 pb-1 flex items-center gap-1">
                      <Cpu className="w-3 h-3" /> Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className={`text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 text-white/80 uppercase group-hover:border-${exp.themeColor}/40 group-hover:text-${exp.themeColor} transition-colors duration-300 cursor-default`}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Badges */}
                {exp.badges && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold text-white/90 uppercase tracking-wider bg-white/10 border border-white/20 px-2 py-1"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column (Highlights & Metrics) */}
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-white/40 uppercase mb-3 border-b border-white/10 pb-1">
                    Mission Highlights
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-300"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 text-${exp.themeColor}/40 group-hover:text-${exp.themeColor} shrink-0 transition-colors duration-300`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.performance && (
                  <div className="mt-6">
                    <div className="text-[10px] text-white/40 uppercase mb-3 border-b border-white/10 pb-1">
                      Performance Stats
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {exp.performance.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-black/40 border border-white/10 p-2 text-center group-hover:border-white/20 transition-colors"
                        >
                          <div
                            className={`text-${exp.themeColor} font-bold text-sm md:text-base leading-none mb-1`}
                          >
                            {metric.value}
                          </div>
                          <div className="text-[9px] text-white/50 uppercase">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
