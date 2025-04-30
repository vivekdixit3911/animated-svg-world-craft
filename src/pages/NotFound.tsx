
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatedBlob } from "@/components/icons/TechIcons";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-30">
            <AnimatedBlob className="w-full h-full" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 opacity-20">
            <AnimatedBlob className="w-full h-full" />
          </div>
        </div>

        <div className="text-center relative z-10 px-4">
          <div className="text-8xl font-bold mb-4 text-gratech-blue">404</div>
          <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button className="blue-gradient" size="lg" asChild>
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
