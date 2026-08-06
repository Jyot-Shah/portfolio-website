import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const titles = [
    {
      text: "ML Engineer",
      colorClass: "text-tactical-cyan",
    },
    {
      text: "AI Systems Architect",
      colorClass: "text-tactical-purple",
    },
    {
      text: "Full Stack Developer",
      colorClass: "text-tactical-amber",
    },
  ];
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [isBooting, setIsBooting] = useState(() => !window.jsosHasBooted);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootLogs, setBootLogs] = useState([]);

  // Title morphing
  useEffect(() => {
    if (!isBooting) {
      const interval = setInterval(() => {
        setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [titles.length, isBooting]);

  // Boot sequence
  useEffect(() => {
    if (!isBooting) return;

    const logs = [
      "SYSTEM BOOT INITIATED // JSOS v4.2.1-tactical",
      "ALLOCATING MEMORY BLOCKS...",
      "BYPASSING ENCRYPTION PROTOCOLS...",
      "ESTABLISHING SECURE UPLINK...",
      "VERIFYING OPERATOR CREDENTIALS: [GRANTED]",
      "LOADING DEEP-SPACE HUD...",
      "SYSTEM ONLINE.",
    ];

    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < logs.length) {
        setBootLogs((prev) => [...prev, logs[currentLog]]);
        currentLog++;
      }
    }, 450);

    const progressInterval = setInterval(() => {
      setBootProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 4;
        if (next >= 100) {
          clearInterval(progressInterval);
          clearInterval(logInterval);
          setTimeout(() => {
            window.jsosHasBooted = true;
            setIsBooting(false);
          }, 900); // Hold at 100% before fading
          return 100;
        }
        return next;
      });
    }, 250);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [isBooting]);

  if (isBooting) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono selection:bg-tactical-amber/30">
        <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />

        <div className="w-full max-w-3xl px-6 relative z-10 animate-fade-in">
          {/* Top Decorative Border */}
          <div className="flex items-end justify-between border-b border-tactical-teal/30 pb-2 mb-8">
            <div className="flex items-center gap-2 text-tactical-teal text-xs tracking-widest uppercase">
              <span className="w-2 h-2 bg-tactical-teal animate-pulse-glow" />
              JSOS // INITIALIZATION SEQUENCE
            </div>
            <div className="text-white/30 text-[10px]">MEM: 0x8A4F29B</div>
          </div>

          {/* Console Log Area */}
          <div className="space-y-2 mb-10 h-[200px] flex flex-col justify-end overflow-hidden">
            {bootLogs.map((log, i) => (
              <div
                key={i}
                className="text-white/70 text-sm tracking-wider uppercase animate-fade-up"
              >
                <span className="text-tactical-teal font-bold mr-2">{">"}</span>
                {log}
              </div>
            ))}
            {bootProgress < 100 && (
              <div className="text-tactical-teal animate-pulse text-sm tracking-wider mt-2">
                <span className="font-bold mr-2">{">"}</span>
                <span className="bg-tactical-teal text-tactical-teal">_</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full">
            <div className="flex justify-between text-xs tracking-widest uppercase mb-2">
              <span className="text-white/50">SYSTEM_LOAD</span>
              <span className="text-tactical-cyan font-bold">
                {Math.min(bootProgress, 100)}%
              </span>
            </div>
            <div className="w-full h-1 bg-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-tactical-cyan shadow-[0_0_10px_rgba(60,203,255,0.8)] transition-all duration-200"
                style={{ width: `${Math.min(bootProgress, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-0 px-4 md:px-8 text-center relative w-full max-w-7xl mx-auto">
      {/* Decorative Top Left HUD */}
      <div className="fixed top-[100px] left-10 hidden lg:block opacity-50 z-20">
        <div className="font-mono text-[10px] text-tactical-teal/70 tracking-widest uppercase mb-1">
          Status Report
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-white text-xs font-mono">
            NODES <span className="text-tactical-teal">[ACTIVE]</span>
          </div>
          <div className="text-white text-xs font-mono">
            CONNECTION <span className="text-tactical-cyan">[SECURE]</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center max-w-4xl animate-fade-up">
        {/* Clearance Badge */}
        <div className="bg-tactical-cyan/10 border border-tactical-cyan text-tactical-cyan px-4 py-1.5 rounded-none font-mono text-[11px] font-bold tracking-widest mb-3 flex items-center gap-2 uppercase">
          <span className="w-2 h-2 bg-tactical-cyan rounded-full animate-pulse-glow" />
          OPERATOR // VERIFIED
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black font-heading tracking-tighter mb-6 uppercase min-h-[80px] md:min-h-[120px] flex items-center justify-center w-full">
          <span
            className={`inline-block min-w-full ${titles[currentTitleIdx].colorClass} px-4 py-2 drop-shadow-lg animate-pulse`}
            style={{ animationDuration: "2s" }}
          >
            {titles[currentTitleIdx].text}
          </span>
        </h1>

        {/* Tactical Subtitle */}
        <p className="text-white/60 font-mono text-sm md:text-base max-w-2xl mb-8 uppercase leading-relaxed tracking-wider">
          Specializing in AI integration, full stack architecture, and
          mission-critical performance. Welcome to my command center.
        </p>

        {/* Primary CTA & Socials */}
        <div className="flex flex-col items-center gap-8 mb-8 w-full">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-16 w-full">
            <a
              href="/mission-control"
              className="relative group order-2 md:order-1 flex"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-tactical-cyan to-tactical-cyan opacity-30 blur transition duration-500 group-hover:opacity-100 animate-pulse-glow" />
              <div className="relative h-full w-full border border-tactical-cyan bg-black px-6 py-2.5 md:px-8 md:py-3 font-mono font-bold tracking-widest text-tactical-cyan group-hover:text-black group-hover:bg-tactical-cyan transition-all flex flex-col items-center justify-center uppercase min-w-[160px]">
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base leading-none">
                    MISSIONS
                  </span>
                  <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                </div>
                <span className="text-[10px] opacity-80 normal-case tracking-normal mt-0.5 leading-none">
                  (View Projects)
                </span>
              </div>
            </a>

            <a
              href="/operator"
              className="relative group order-1 md:order-2 flex"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-tactical-teal to-tactical-teal opacity-40 blur transition duration-500 group-hover:opacity-100 animate-pulse-glow" />
              <div className="relative h-full w-full border border-tactical-teal bg-black px-10 py-4 font-mono font-bold tracking-widest text-tactical-teal group-hover:text-black group-hover:bg-tactical-teal transition-all flex items-center gap-3 uppercase">
                <span className="text-lg">Commence Operation</span>
                <div className="w-1.5 h-1.5 bg-current rounded-full" />
              </div>
            </a>

            <a href="/logs" className="relative group order-3 md:order-3 flex">
              <div className="absolute -inset-1 bg-gradient-to-r from-tactical-amber to-tactical-amber opacity-30 blur transition duration-500 group-hover:opacity-100 animate-pulse-glow" />
              <div className="relative h-full w-full border border-tactical-amber bg-black px-6 py-2.5 md:px-8 md:py-3 font-mono font-bold tracking-widest text-tactical-amber group-hover:text-black group-hover:bg-tactical-amber transition-all flex flex-col items-center justify-center uppercase min-w-[160px]">
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-base leading-none">
                    LOGS
                  </span>
                  <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                </div>
                <span className="text-[10px] opacity-80 normal-case tracking-normal mt-0.5 leading-none">
                  (View Resume)
                </span>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jyot-Shah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 text-white/60 hover:text-tactical-teal hover:border-tactical-teal bg-black/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jyotshah1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 text-white/60 hover:text-tactical-cyan hover:border-tactical-cyan bg-black/50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jyotshah1595@gmail.com"
              className="p-3 border border-white/20 text-white/60 hover:text-tactical-amber hover:border-tactical-amber bg-black/50 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl mb-0">
          {[
            { label: "SYS_UPTIME", value: "99.9%" },
            { label: "MISSIONS_ACTIVE", value: "07" },
            { label: "FRAMEWORKS", value: "30" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card flex flex-col items-center justify-center py-6 px-4 hover:border-tactical-teal transition-colors"
            >
              <div className="font-mono text-xl md:text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-widest text-tactical-teal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
