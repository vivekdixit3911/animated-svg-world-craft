
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Add animation styles to the index.css
const addAnimationStyles = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes float-delayed {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes spin-slow {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
    
    @keyframes spin-slower {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(-360deg); }
    }
    
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
    }
    
    @keyframes pulse-subtle {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes glow {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.2; }
    }
    
    @keyframes glow-delayed {
      0%, 100% { opacity: 0.1; }
      50% { opacity: 0.15; }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: float-delayed 7s ease-in-out infinite;
      animation-delay: 2s;
    }
    
    .animate-spin-slow {
      animation: spin-slow 15s linear infinite;
    }
    
    .animate-spin-slower {
      animation: spin-slower 25s linear infinite;
    }
    
    .animate-orbit {
      animation: orbit 10s linear infinite;
    }
    
    .animate-pulse-subtle {
      animation: pulse-subtle 3s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: glow 8s ease-in-out infinite;
    }
    
    .animate-glow-delayed {
      animation: glow-delayed 12s ease-in-out infinite;
      animation-delay: 3s;
    }
    
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
};

// Add the animation styles when the app loads
if (typeof window !== 'undefined') {
  addAnimationStyles();
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
