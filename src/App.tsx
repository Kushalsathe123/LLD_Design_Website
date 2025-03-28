import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";
import PatternsPage from "./pages/PatternsPage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import specific roadmap pages
import OOPFundamentals from "./pages/roadmap/OOPFundamentals";
import SOLIDPrinciples from "./pages/roadmap/SOLIDPrinciples";
import DesignPatterns from "./pages/patterns/SingletonPattern";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          
          {/* Added specific roadmap routes */}
          <Route path="/roadmap/oop-fundamentals" element={<OOPFundamentals />} />
          <Route path="/roadmap/solid-principles" element={<SOLIDPrinciples />} />
          <Route path="/roadmap/design-patterns" element={<DesignPatterns />} />
          
          <Route path="/patterns" element={<PatternsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;