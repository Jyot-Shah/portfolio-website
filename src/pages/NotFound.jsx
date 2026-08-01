export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-6xl md:text-9xl font-bold font-heading text-destructive animate-glitch tracking-widest mb-4">
        404
      </h1>
      <h2 className="text-xl md:text-2xl font-mono text-white/70 mb-8 uppercase">
        Mission Failed: Sector Not Found
      </h2>
      <a
        href="/"
        className="px-6 py-3 border border-tactical-teal text-tactical-teal font-mono text-sm hover:bg-tactical-teal hover:text-black transition-colors uppercase tracking-widest shadow-[0_0_15px_rgba(0,245,212,0.3)]"
      >
        Return to Base
      </a>
    </div>
  );
}
