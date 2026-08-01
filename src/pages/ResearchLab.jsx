import {
  Beaker,
  BrainCircuit,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function ResearchLab() {
  return (
    <div className="flex flex-col items-center min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-tactical-purple/30 pb-4 mb-8">
        <div>
          <div className="text-tactical-purple font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <Beaker className="w-3 h-3 text-tactical-purple animate-pulse" />
            Experimental Node
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
            Research Lab
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            ACTIVE RESEARCH: <span className="text-white">01</span>
          </div>
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            COMPUTE TIER: <span className="text-tactical-purple">LEVEL 2</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* Active AI Demonstration Card */}
        <div className="glass-card border-tactical-cyan/30 flex flex-col overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-tactical-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-black/60 relative z-10">
            <BrainCircuit className="w-5 h-5 text-tactical-cyan" />
            <h2 className="font-mono text-white text-sm font-bold tracking-widest uppercase">
              Hierarchical Vision Transformer Ensemble
            </h2>
            <span className="ml-auto bg-tactical-purple/10 text-tactical-purple border border-tactical-purple/30 px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase animate-pulse">
              ACTIVE RESEARCH
            </span>
          </div>

          <div className="p-6 relative z-10 flex-1 flex flex-col md:flex-row gap-6">
            {/* Visualizer Mockup */}
            <div className="w-full md:w-1/2 aspect-video bg-black border border-white/10 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-background opacity-20" />

              {/* Bounding box animation & Architectural SVG */}
              <div className="relative w-full max-w-[90%] aspect-video border border-tactical-teal/20 flex items-center justify-center p-2 bg-tactical-purple/5 overflow-hidden">
                <svg
                  className="w-full h-full opacity-80"
                  viewBox="0 0 400 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid / Patches (Input Image) */}
                  <rect
                    x="15"
                    y="70"
                    width="60"
                    height="60"
                    className="stroke-tactical-cyan"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                  />
                  <rect
                    x="20"
                    y="75"
                    width="25"
                    height="25"
                    className="fill-tactical-cyan/20 stroke-tactical-cyan"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="45"
                    y="75"
                    width="25"
                    height="25"
                    className="fill-tactical-cyan/20 stroke-tactical-cyan"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="20"
                    y="100"
                    width="25"
                    height="25"
                    className="fill-tactical-cyan/20 stroke-tactical-cyan"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="45"
                    y="100"
                    width="25"
                    height="25"
                    className="fill-tactical-cyan/20 stroke-tactical-cyan"
                    strokeWidth="0.5"
                  />

                  {/* Linear Projections */}
                  <path
                    d="M 80 85 L 115 70"
                    className="stroke-tactical-purple"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <path
                    d="M 80 115 L 115 130"
                    className="stroke-tactical-purple"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Parent Transformer Encoder */}
                  <rect
                    x="125"
                    y="40"
                    width="50"
                    height="120"
                    rx="4"
                    className="fill-tactical-purple/10 stroke-tactical-purple"
                    strokeWidth="1.5"
                  />
                  <text
                    x="150"
                    y="105"
                    className="fill-tactical-purple font-mono text-[8px] tracking-widest"
                    textAnchor="middle"
                    transform="rotate(-90 150 105)"
                  >
                    PARENT ViT
                  </text>

                  {/* Attention connections */}
                  <path
                    d="M 185 60 L 235 40"
                    className="stroke-tactical-amber animate-[pulse_2s_infinite]"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 185 100 L 235 100"
                    className="stroke-tactical-amber animate-[pulse_2.5s_infinite]"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 185 140 L 235 160"
                    className="stroke-tactical-amber animate-[pulse_1.5s_infinite]"
                    strokeWidth="1.5"
                  />

                  {/* Child Transformers (Micro) */}
                  <rect
                    x="245"
                    y="20"
                    width="45"
                    height="40"
                    rx="2"
                    className="fill-tactical-amber/10 stroke-tactical-amber"
                    strokeWidth="1"
                  />
                  <text
                    x="267"
                    y="43"
                    className="fill-tactical-amber font-mono text-[9px]"
                    textAnchor="middle"
                  >
                    CHILD-1
                  </text>

                  <rect
                    x="245"
                    y="80"
                    width="45"
                    height="40"
                    rx="2"
                    className="fill-tactical-amber/10 stroke-tactical-amber"
                    strokeWidth="1"
                  />
                  <text
                    x="267"
                    y="103"
                    className="fill-tactical-amber font-mono text-[9px]"
                    textAnchor="middle"
                  >
                    CHILD-2
                  </text>

                  <rect
                    x="245"
                    y="140"
                    width="45"
                    height="40"
                    rx="2"
                    className="fill-tactical-amber/10 stroke-tactical-amber"
                    strokeWidth="1"
                  />
                  <text
                    x="267"
                    y="163"
                    className="fill-tactical-amber font-mono text-[9px]"
                    textAnchor="middle"
                  >
                    CHILD-3
                  </text>

                  {/* Output Fusion */}
                  <path
                    d="M 300 40 L 340 90"
                    className="stroke-tactical-teal"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M 300 100 L 340 100"
                    className="stroke-tactical-teal"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M 300 160 L 340 110"
                    className="stroke-tactical-teal"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />

                  <circle
                    cx="360"
                    cy="100"
                    r="16"
                    className="fill-tactical-teal/20 stroke-tactical-teal"
                    strokeWidth="2"
                  />
                  <text
                    x="360"
                    y="104"
                    className="fill-tactical-teal font-sans font-bold text-[12px]"
                    textAnchor="middle"
                  >
                    Σ
                  </text>
                </svg>

                <div className="absolute bottom-2 left-2 bg-tactical-purple text-black font-mono text-[9px] font-bold px-2 py-1 uppercase tracking-wider animate-pulse">
                  Hierarchical ViT Ensemble Activated
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-tactical-cyan shrink-0 animate-pulse-glow opacity-50" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-t border-r border-tactical-cyan shrink-0 animate-pulse-glow opacity-50" />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-tactical-cyan/70 font-mono text-[10px] uppercase tracking-widest border-b border-white/10 pb-1 mb-2">
                  Metrics
                </h3>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs text-white">
                  <div>
                    Performance Gain: <br />
                    <span className="text-tactical-teal font-bold text-lg">
                      +4-6% F1
                    </span>
                  </div>
                  <div>
                    Classes: <br />
                    <span className="text-tactical-amber font-bold text-lg">
                      30+
                    </span>
                  </div>
                  <div>
                    Dataset Size: <br />
                    <span className="text-tactical-purple font-bold text-lg">
                      80,000+ Imgs
                    </span>
                  </div>
                  <div>
                    Architecture: <br />
                    <span className="text-tactical-cyan font-bold text-base">
                      Hierarchical ViT
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-tactical-cyan/70 font-mono text-[10px] uppercase tracking-widest border-b border-white/10 pb-1 mb-2">
                  Research Abstract
                </h3>
                <p className="text-white/80 font-sans text-sm leading-relaxed mb-5 text-justify">
                  Improving plant leaf disease classification by systematically
                  addressing severe domain shifts and class imbalance across
                  massive agricultural datasets. This research develops a
                  hierarchical Vision Transformer (ViT) that utilizes
                  specialized parent-child attention mechanisms to isolate
                  macroscopic leaf structures from microscopic pathological
                  necrotic anomalies. By injecting a multi-stage hybrid loss
                  function—synthesizing Cross Entropy, Focal Loss, and Adaptive
                  Margin Learning—the ensemble selectively penalizes
                  hard-to-classify minority disease vectors. The deployment
                  paradigm currently demonstrates significant and verifiable F1
                  score improvements over standard convolutional models (CNNs)
                  and base Vision Transformer baselines under extreme low-light
                  augmentation constraints.
                </p>
                <h3 className="text-tactical-cyan/70 font-mono text-[10px] uppercase tracking-widest border-b border-white/10 pb-1 mb-3">
                  Tech Stack & Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      name: "PyTorch",
                      color: "text-tactical-teal",
                      border: "border-tactical-teal",
                    },
                    {
                      name: "Hierarchical ViT",
                      color: "text-tactical-cyan",
                      border: "border-tactical-cyan",
                    },
                    {
                      name: "Computer Vision",
                      color: "text-tactical-amber",
                      border: "border-tactical-amber",
                    },
                    {
                      name: "Hybrid Loss",
                      color: "text-tactical-purple",
                      border: "border-tactical-purple",
                    },
                    {
                      name: "Explainable AI",
                      color: "text-tactical-teal",
                      border: "border-tactical-teal",
                    },
                    {
                      name: "Parent-Child Attention",
                      color: "text-tactical-cyan",
                      border: "border-tactical-cyan",
                    },
                    {
                      name: "Ensemble Algorithms",
                      color: "text-tactical-amber",
                      border: "border-tactical-amber",
                    },
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className={`bg-black/50 border ${tech.border}/50 px-2 py-0.5 text-[10px] font-mono ${tech.color} uppercase`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
