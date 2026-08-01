# JSOS - Tactical Operator Command Center (Portfolio Website)

A high-fidelity, tactical-militaristic portfolio command center engineered using
React and Vite. The design philosophy abandons traditional web development in
favor of a deep-space operator aesthetic featuring rigid structural geometry,
neon-accented glassmorphism, and a strict terminal/dossier alignment protocol.

## Core Systems

- **Tactical HUD Architecture** – A unified React-Router layout
  (`TacticalHUD.jsx`) wrapping all nodes in a persistent cinematic overlay
  featuring static noise, CRT scanlines, and animated crosshair trackers.
- **Dossier Text-Justification** – Strict `text-justify` typography applied to
  all briefing and report nodes to render flush, terminal-accurate data blocks.
- **Live Terminal Boot-loader** – A stateful initialization grid that streams
  simulated memory validation and subsystem booting logs into a `window` cache
  to persist against React hydration mounting unless manually refreshed.
- **Mission Console (`/terminal`)** – A fully immersive command-line mapping
  utility facilitating recursive commands, `help` dialogs, and encrypted routing
  to GitHub and LinkedIn networks.
- **Glassmorphic Vaults (`/vault`)** – Modular stat arrays exhibiting dynamic
  OLED hover colors mirroring JSOS threat-level branding (Teal, Cyan, Purple,
  Amber).

## System Topography

- Entry Point: `src/main.jsx`
- Routing Map: `src/App.jsx`
- HUD Overlay: `src/components/layout/TacticalHUD.jsx`
- OS Pages/Nodes: `src/pages`
- Tactical CSS Matrix: `src/index.css`

## Operational Stack

- Vite + React (JSX)
- Tailwind CSS (HUD utility modifications & custom CSS grid configurations)
- React Router DOM
- Framer Motion (System transitions)
- Lucide React (Operator node icons)
