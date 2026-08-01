import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Target,
  Home,
  User,
  Briefcase,
  FileText,
  Database,
  Shield,
  Hexagon,
  Terminal,
  Activity,
} from "lucide-react";

export const TacticalHUD = ({ children }) => {
  const location = useLocation();
  const [time, setTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Align time to IST (UTC+5:30)
      const istTime = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
      setTime(
        istTime.toISOString().split("T")[1].substring(0, 8) +
          ":" +
          istTime.getUTCMilliseconds().toString().padStart(3, "0"),
      );
    }, 47);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { path: "/", label: "HOME", icon: <Home className="w-4 h-4" /> },
    {
      path: "/operator",
      label: "OPERATOR",
      icon: <User className="w-4 h-4" />,
    },
    {
      path: "/loadout",
      label: "LOADOUT",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      path: "/mission-control",
      label: "MISSIONS",
      icon: <Target className="w-4 h-4" />,
    },
    {
      path: "/research",
      label: "RESEARCH",
      icon: <Database className="w-4 h-4" />,
    },
    { path: "/logs", label: "LOGS", icon: <FileText className="w-4 h-4" /> },
    { path: "/vault", label: "VAULT", icon: <Shield className="w-4 h-4" /> },

    {
      path: "/terminal",
      label: "COMMS",
      icon: <Terminal className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans selection:bg-tactical-teal/30">
      {/* Background Layers */}
      <div className="fixed inset-0 grid-background pointer-events-none z-0" />
      <div className="fixed inset-0 noise-overlay z-[1]" />
      <div className="fixed inset-0 scanlines opacity-50 z-[2]" />

      {/* Global Corners Overlay */}
      <div className="fixed pointer-events-none z-50 opacity-50 hidden md:block top-[88px] left-8 right-8 bottom-[60px] border border-white/5">
        {/* Top Left Reticle */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-tactical-teal" />
        {/* Top Right Reticle */}
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-tactical-teal" />
        {/* Bottom Left Reticle */}
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-tactical-teal" />
        {/* Bottom Right Reticle */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-tactical-teal" />
      </div>

      {/* Persistent Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b-2 border-tactical-teal/30 px-6 py-3 flex items-center justify-between">
        {/* Brand / Radar */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="relative flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="JS Logo"
              className="h-8 md:h-10 w-auto object-contain animate-fade-in"
            />
          </Link>
          <div className="flex flex-col uppercase font-mono tracking-widest text-xs hidden sm:flex">
            <span className="text-white/50 text-[10px]">{time} IST</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium border transition-colors ${
                  isActive
                    ? "border-tactical-teal bg-tactical-teal/10 text-tactical-teal shadow-[0_0_10px_rgba(0,245,212,0.3)]"
                    : "border-transparent text-white/60 hover:text-white hover:border-white/20 hover:bg-white/5"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-tactical-teal font-mono text-xs border border-tactical-teal/30 hover:bg-tactical-teal/10 px-3 py-1 transition-colors focus:outline-none"
        >
          {isMobileMenuOpen ? "CLOSE" : "MENU"}
        </button>

        {/* System Status */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-tactical-cyan uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tactical-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tactical-cyan"></span>
          </span>
          SYS: ONLINE
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-[62px] left-0 w-full bg-black/95 backdrop-blur-md border-b border-tactical-teal/30 z-30 lg:hidden flex flex-col p-4 animate-fade-in shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="text-tactical-teal/50 font-mono text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-tactical-teal rounded-full animate-pulse-glow" />
            Select Routing Vector
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item, idx) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-xs font-mono font-medium border transition-all ${
                    isActive
                      ? "border-tactical-teal bg-tactical-teal/10 text-tactical-teal shadow-[0_0_10px_rgba(0,245,212,0.3)]"
                      : "border-white/5 text-white/60 hover:text-white hover:border-white/20 bg-white/5"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="relative z-10 pt-[88px] min-h-screen pb-20">
        {children}
      </main>

      {/* Global Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-2 flex items-center justify-between font-mono text-[10px] text-white/40 tracking-widest uppercase">
        <div>
          Developed by{" "}
          <a
            href="https://linkedin.com/in/jyotshah1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tactical-teal hover:underline transition-colors focus:outline-none focus:ring-1 focus:ring-tactical-teal"
          >
            Jyot Shah
          </a>
        </div>
        <div className="flex items-center gap-4 hidden sm:flex">
          <span className="text-tactical-teal animate-pulse">
            SYSTEM OPTIMAL
          </span>
        </div>
      </footer>
    </div>
  );
};
