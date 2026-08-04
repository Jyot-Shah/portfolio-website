import {
  Code2,
  Brain,
  Layers,
  Crosshair,
  MapPin,
  Activity,
  TerminalSquare,
} from "lucide-react";

export default function OperatorProfile() {
  return (
    <div className="flex flex-col items-center min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-6xl mx-auto">
      {/* Dossier Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-tactical-teal/30 pb-4 mb-8">
        <div>
          <div className="text-tactical-teal font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-tactical-teal rounded-full animate-pulse-glow" />
            Classified Dossier
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
            Operator Profile
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            ID_NO: <span className="text-white">JS-1595</span>
          </div>
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            STATUS:{" "}
            <span className="text-tactical-cyan animate-pulse">
              ACTIVE deployment
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Left Column: Quick Stats & Identification */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
          {/* Avatar / Portrait Placeholder */}
          <div className="glass-card aspect-square w-full p-1 relative group overflow-hidden bg-black/80 flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-background opacity-20" />
            <div className="absolute inset-x-0 h-0.5 bg-tactical-teal/50 animate-scanline shadow-[0_0_10px_#00F5D4]" />
            {/* Corner crosshairs */}
            <Crosshair className="absolute text-tactical-teal/20 w-32 h-32 stroke-1 items-center justify-center m-auto inset-0" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <img
                src="/profile-pic.png"
                alt="Operator Profile"
                className="w-40 h-40 rounded-xl object-cover object-top border border-tactical-teal/40 shadow-[0_0_15px_rgba(0,245,212,0.2)]"
              />
              <div className="mt-4 font-mono text-tactical-teal text-xs tracking-widest uppercase bg-tactical-teal/10 px-2 py-1">
                Identity Confirmed
              </div>
            </div>
          </div>

          <div className="glass-card p-5">
            <h3 className="font-mono text-tactical-teal text-sm font-bold tracking-widest uppercase mb-4 border-b border-tactical-teal/30 pb-2">
              Vitals
            </h3>
            <ul className="space-y-3 font-mono text-xs text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-tactical-teal/60">Callsign:</span>
                <span className="text-white uppercase">Jyot Shah</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-tactical-teal/60">Location:</span>
                <span className="text-white flex items-center gap-1 uppercase">
                  <MapPin className="w-3 h-3 text-tactical-amber" /> India
                </span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-tactical-teal/60">Availability:</span>
                <span className="text-secondary uppercase">Ready</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-tactical-teal/60">CGPA:</span>
                <span className="uppercase font-bold text-tactical-amber">
                  9.21
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Detailed Briefing */}
        <div className="lg:col-span-2 space-y-6">
          {/* Mission Statement */}
          <div className="glass-card p-6 md:p-8 relative">
            <h2 className="font-mono text-tactical-teal text-lg font-bold tracking-widest uppercase mb-6 flex items-center gap-3">
              <TerminalSquare className="w-5 h-5" /> Current Mission
            </h2>

            <div className="space-y-4 font-sans text-white/80 leading-relaxed text-sm md:text-base border-l-2 border-tactical-teal/40 pl-4 text-justify">
              <p>
                Computer Science undergraduate at{" "}
                <span className="text-tactical-cyan font-semibold">
                  Manipal University Jaipur
                </span>
                , specializing in Artificial Intelligence & Machine Learning.
                Consistently ranked on the 'Dean's List' for academic
                excellence.
              </p>
              <p>
                Current objective focuses on building robust systems bridging{" "}
                <span className="text-tactical-purple font-semibold">
                  Machine Learning
                </span>{" "}
                and{" "}
                <span className="text-tactical-teal font-semibold">
                  Full-Stack Engineering
                </span>
                . From training YOLOv11 models to architecting scalable
                MERN/Flask applications, the core directive is to engineer
                solutions that have tangible impact.
              </p>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-5 group hover:border-tactical-teal/50 transition-colors flex flex-col h-full bg-black/50">
              <Code2 className="w-6 h-6 text-tactical-teal mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-white mb-2 uppercase text-xs tracking-wider">
                Full-Stack Intel
              </h3>
              <p className="text-xs text-white/50 font-mono mt-auto leading-relaxed">
                MERN, Flask, REST APIs, Next.js, Passport.js, Cloudinary, EJS,
                Joi
              </p>
              <div className="w-full bg-white/10 h-1 mt-3">
                <div className="bg-tactical-teal h-full w-[90%] shadow-[0_0_10px_#00F5D4]" />
              </div>
            </div>

            <div className="glass-card p-5 group hover:border-tactical-cyan/50 transition-colors flex flex-col h-full bg-black/50">
              <Brain className="w-6 h-6 text-tactical-cyan mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-white mb-2 uppercase text-xs tracking-wider">
                AI / ML Weapons
              </h3>
              <p className="text-xs text-white/50 font-mono mt-auto leading-relaxed">
                TensorFlow, PyTorch, YOLOv11, Gemini, CV, NLP, Scikit-learn
              </p>
              <div className="w-full bg-white/10 h-1 mt-3">
                <div className="bg-tactical-cyan h-full w-[95%] shadow-[0_0_10px_#00D9FF]" />
              </div>
            </div>

            <div className="glass-card p-5 group hover:border-tactical-purple/50 transition-colors flex flex-col h-full bg-black/50">
              <Layers className="w-6 h-6 text-tactical-purple mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-bold text-white mb-2 uppercase text-xs tracking-wider">
                Core Systems
              </h3>
              <p className="text-xs text-white/50 font-mono mt-auto leading-relaxed">
                DSA, DBMS, OS, OOP, Computer Networks, MVC, Cloud
              </p>
              <div className="w-full bg-white/10 h-1 mt-3">
                <div className="bg-tactical-purple h-full w-[95%] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary internal component for the portrait placeholder
const UserSilhouette = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-24 h-24 text-tactical-teal/40"
  >
    <path d="M18 20a6 6 0 0 0-12 0" />
    <circle cx="12" cy="10" r="4" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);
