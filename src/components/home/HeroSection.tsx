
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedBlob, AnimatedWaves, HeroIconGrid } from '../icons/TechIcons';
import { useIsMobile } from '@/hooks/use-mobile';
import CartoonAvatar from '../icons/CartoonAvatar';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  // Animated text elements with smooth transitions
  const animatedWords = ["Software", "Innovation", "Experience", "Solutions", "Future"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(animatedWords[0]);
  const [isChanging, setIsChanging] = useState(false);
  
  // Use refs for animation timing
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Animation visibility on mount
    setIsVisible(true);
    
    // Word rotation animation with smooth transition
    const rotateWords = () => {
      setIsChanging(true);
      
      // First fade out current word
      timerRef.current = setTimeout(() => {
        // Then change word and fade in
        const nextIndex = (currentIndex + 1) % animatedWords.length;
        setCurrentIndex(nextIndex);
        setDisplayText(animatedWords[nextIndex]);
        setIsChanging(false);
      }, 400); // Time to fade out
    };
    
    const interval = setInterval(rotateWords, 3000);
    
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-24 md:pb-32">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gratech-dark to-gratech-dark/80"></div>
        <div className="absolute bottom-0 w-full h-1/3 md:h-1/2">
          <AnimatedWaves className="w-full h-full" />
        </div>
        <div className="absolute top-16 right-16 w-32 md:w-56 h-32 md:h-56 opacity-30 animate-float">
          <AnimatedBlob className="w-full h-full" />
        </div>
        <div className="absolute bottom-16 left-16 w-24 md:w-40 h-24 md:h-40 opacity-20 animate-float-delayed">
          <AnimatedBlob className="w-full h-full" />
        </div>
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="h-full w-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
          </div>
        </div>
        
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[60%] h-[30%] bg-blue-500/10 rounded-full blur-[80px] animate-glow"></div>
          <div className="absolute top-1/3 right-1/4 w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[80px] animate-glow-delayed"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content with Animation */}
          <div 
            className={`text-left transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Advancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                <span className={`inline-block min-w-[180px] md:min-w-[240px] transition-opacity duration-400 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
                  {displayText}
                </span>
              </span> and Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              We build cutting-edge digital solutions that transform businesses 
              and create exceptional user experiences for the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white px-6 py-5 md:px-8 md:py-6 animate-pulse-subtle">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 backdrop-blur-sm text-white px-6 py-5 md:px-8 md:py-6">
                Our Services
              </Button>
            </div>
          </div>

          {/* Technology Icons Grid with Animation and Modular Characters */}
          <div 
            className={`relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100 rotate-0" : "translate-y-10 opacity-0 rotate-12"
            }`}
          >
            {/* Main tech icon grid */}
            <div className="relative w-full h-full">
              <HeroIconGrid className="w-full h-full animate-float" />
              
              {/* Modular cartoon characters - positioned strategically around the grid */}
              <div className="absolute top-[10%] right-[5%] w-16 md:w-20 lg:w-24 animate-float">
                <CartoonAvatar seed="dev1" role="Developer" className="w-full h-auto" />
              </div>
              
              <div className="absolute bottom-[10%] left-[5%] w-16 md:w-20 lg:w-24 animate-float-delayed">
                <CartoonAvatar seed="designer" role="Designer" className="w-full h-auto" />
              </div>
              
              <div className="absolute top-[40%] left-[8%] w-14 md:w-16 lg:w-20 animate-float">
                <CartoonAvatar seed="eng1" role="Engineer" className="w-full h-auto" />
              </div>
              
              <div className="absolute bottom-[30%] right-[8%] w-14 md:w-16 lg:w-20 animate-float-delayed">
                <CartoonAvatar seed="manager" role="Manager" className="w-full h-auto" />
              </div>
              
              {/* Animated circles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border-2 border-blue-500/20 animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border border-purple-500/10 animate-spin-slower"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-orbit blur-[2px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Badges - More mobile responsive */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4 opacity-80 flex-wrap justify-center max-w-[90%]">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 md:px-4 text-xs md:text-sm flex items-center animate-float">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
            Innovative Solutions
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 md:px-4 text-xs md:text-sm flex items-center animate-float-delayed">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            24/7 Support
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 md:px-4 text-xs md:text-sm flex items-center animate-float">
            <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
            Global Expertise
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
