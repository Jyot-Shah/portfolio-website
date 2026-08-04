import { FileText, Download, Target, ScanEye } from "lucide-react";

export default function MissionLogs() {
  return (
    <div className="flex flex-col items-center min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-tactical-amber/30 pb-4 mb-8">
        <div>
          <div className="text-tactical-amber font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <ScanEye className="w-3 h-3 text-tactical-amber text-pulse" />
            Resume Archive
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-widest uppercase">
            Mission Logs
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            STATUS:{" "}
            <span className="text-tactical-teal animate-pulse">DECRYPTED</span>
          </div>
        </div>
      </div>

      {/* Main Terminal Frame */}
      <div className="w-full flex-1 glass-card p-1 border-tactical-amber/20 relative group">
        <div className="absolute inset-0 bg-tactical-amber/5 opacity-0 group-hover:opacity-100 transition-duration-500 pointer-events-none" />

        {/* Top bar of terminal */}
        <div className="bg-black border-b border-tactical-amber/20 px-4 py-2 flex items-center justify-between mb-1">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-tactical-amber/50 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <div className="font-mono text-[10px] text-tactical-amber tracking-widest uppercase">
            Resume_JyotShah.pdf
          </div>
        </div>

        <div className="p-4 md:p-8 flex items-center gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 h-[75vh] border border-white/10 bg-black/50 relative overflow-hidden">
            {/* The actual resume preview */}
            <iframe
              src="/Resume_JyotShah.pdf"
              className="w-full h-full relative z-10"
              title="Resume Preview"
            />
            {/* Scanline overlay over the iframe to maintain tactical feel */}
            <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-20 z-20" />
          </div>

          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <h3 className="font-heading text-2xl text-white uppercase tracking-widest mb-2 border-l-2 border-tactical-amber pl-3 flex items-center gap-2">
              <FileText className="w-6 h-6 text-tactical-amber" />
              Resume
            </h3>
            <p className="font-mono text-white/50 text-sm leading-relaxed mb-6 text-justify">
              Access granted to full operational service record. Document
              contains detailed history of technical engagements, academic
              training, and command capabilities.
            </p>

            <a
              href="/Resume_JyotShah.pdf"
              download
              className="relative group/btn w-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-tactical-amber to-transparent opacity-30 blur transition duration-500 group-hover/btn:opacity-100" />
              <div className="relative border border-tactical-amber bg-black px-6 py-4 font-mono font-bold tracking-widest text-tactical-amber hover:text-black hover:bg-tactical-amber transition-all flex items-center justify-center gap-3 uppercase w-full">
                <Download className="w-5 h-5" />
                <span>Extract File (.PDF)</span>
              </div>
            </a>

            <a
              href="/Resume_JyotShah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 bg-black/50 px-6 py-4 font-mono tracking-widest text-white/60 hover:text-tactical-amber hover:border-tactical-amber/50 transition-all flex items-center justify-center gap-3 uppercase w-full"
            >
              <Target className="w-4 h-4" />
              <span>Open in Secure Viewer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
