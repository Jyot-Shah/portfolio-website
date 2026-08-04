import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";

import { TacticalHUD } from "@/components/layout/TacticalHUD";
import Home from "./pages/Home.jsx";
import OperatorProfile from "./pages/OperatorProfile.jsx";
import Loadout from "./pages/Loadout.jsx";
import MissionControl from "./pages/MissionControl.jsx";
import MissionLogs from "./pages/MissionLogs.jsx";
import AchievementVault from "./pages/AchievementVault.jsx";
import CommandTerminal from "./pages/CommandTerminal.jsx";
import ResearchLab from "./pages/ResearchLab.jsx";
import OperationalHistory from "./pages/OperationalHistory.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TacticalHUD>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/operator" element={<OperatorProfile />} />
            <Route path="/loadout" element={<Loadout />} />
            <Route path="/mission-control" element={<MissionControl />} />
            <Route path="/research" element={<ResearchLab />} />
            <Route path="/logs" element={<MissionLogs />} />
            <Route path="/vault" element={<AchievementVault />} />
            <Route path="/service-record" element={<OperationalHistory />} />
            <Route path="/terminal" element={<CommandTerminal />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </TacticalHUD>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
