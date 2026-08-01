import { useState, useRef, useEffect } from "react";
import { Terminal, Send } from "lucide-react";

export default function CommandTerminal() {
  const [history, setHistory] = useState([
    { type: "system", text: "JSOS v4.2.1-tactical initiated." },
    {
      type: "system",
      text: "Establishing secure connection to operator JYOT_SHAH...",
    },
    {
      type: "system",
      text: "Connection secure. Type 'help' for available commands.",
    },
    { type: "success", text: "AVAILABLE COMMANDS:" },
    {
      type: "info",
      text: "  email    - Execute direct comms protocol (jyotshah1595@gmail.com)",
    },
    {
      type: "info",
      text: "  github   - Access encrypted source code repository",
    },
    { type: "info", text: "  linkedin - Access professional dossier" },
    { type: "info", text: "  credly   - Verify certified credentials" },
    { type: "info", text: "  clear    - Purge terminal history" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "user", text: `> ${input}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "success", text: "AVAILABLE COMMANDS:" });
        newHistory.push({
          type: "info",
          text: "  email    - Execute direct comms protocol (jyotshah1595@gmail.com)",
        });
        newHistory.push({
          type: "info",
          text: "  github   - Access encrypted source code repository",
        });
        newHistory.push({
          type: "info",
          text: "  linkedin - Access professional dossier",
        });
        newHistory.push({
          type: "info",
          text: "  credly   - Verify certified credentials",
        });
        newHistory.push({
          type: "info",
          text: "  clear    - Purge terminal history",
        });
        break;
      case "email":
        newHistory.push({
          type: "system",
          text: "Launching secure mail protocol...",
        });
        setTimeout(
          () => (window.location.href = "mailto:jyotshah1595@gmail.com"),
          1000,
        );
        break;
      case "github":
        newHistory.push({
          type: "system",
          text: "Routing to GitHub mainframe...",
        });
        setTimeout(
          () => window.open("https://github.com/Jyot-Shah", "_blank"),
          1000,
        );
        break;
      case "linkedin":
        newHistory.push({
          type: "system",
          text: "Routing to LinkedIn professional network...",
        });
        setTimeout(
          () => window.open("https://linkedin.com/in/jyotshah1", "_blank"),
          1000,
        );
        break;
      case "credly":
        newHistory.push({
          type: "system",
          text: "Routing to Credly verification systems...",
        });
        setTimeout(
          () => window.open("https://www.credly.com/users/jyot-shah", "_blank"),
          1000,
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
        newHistory.push({
          type: "error",
          text: "ACCESS DENIED. Incident logged.",
        });
        break;
      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' for support.`,
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center min-h-[85vh] px-4 md:px-8 py-10 relative z-10 w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-tactical-teal/20 pb-4 mb-4">
        <div>
          <div className="text-tactical-teal font-mono text-[10px] tracking-widest uppercase mb-1 flex items-center gap-2">
            <Terminal className="w-3 h-3 text-tactical-teal" />
            Subroutine // Comm_Link
          </div>
          <h1 className="text-3xl font-black font-heading text-white tracking-widest uppercase">
            Command Terminal
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-white/50 font-mono text-xs uppercase tracking-widest">
            NETWORK: <span className="text-tactical-teal">SECURE</span>
          </div>
        </div>
      </div>

      {/* Terminal Window */}
      <div className="w-full flex-1 min-h-[50vh] flex flex-col glass-card border-tactical-teal/30 bg-black/80 font-mono text-sm relative overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="bg-tactical-teal/10 border-b border-tactical-teal/30 px-4 py-2 flex items-center justify-between">
          <span className="text-tactical-teal/50 text-[10px] uppercase tracking-widest">
            root@jsos:~#
          </span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-tactical-teal/20" />
            <div className="w-2.5 h-2.5 bg-tactical-teal/40" />
            <div className="w-2.5 h-2.5 bg-tactical-teal" />
          </div>
        </div>

        {/* Console Output */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`leading-relaxed ${
                line.type === "system"
                  ? "text-white/60"
                  : line.type === "user"
                    ? "text-tactical-teal"
                    : line.type === "info"
                      ? "text-tactical-cyan pl-4"
                      : line.type === "success"
                        ? "text-tactical-teal font-bold"
                        : line.type === "error"
                          ? "text-destructive"
                          : "text-white"
              }`}
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} className="h-4" />
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleCommand}
          className="border-t border-tactical-teal/20 p-2 flex items-center bg-black"
        >
          <span className="text-tactical-teal mr-3 font-bold">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none placeholder:text-white/20 tracking-wider"
            placeholder="Awaiting input..."
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
          <button
            type="submit"
            className="text-tactical-teal/50 hover:text-tactical-teal p-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Terminal scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-10" />
      </div>
    </div>
  );
}
