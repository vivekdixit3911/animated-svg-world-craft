import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedBlob, AnimatedWaves } from '../icons/TechIcons';
import { TechLogo } from '../icons/TechIcons';
import NucleasLogo from '../icons/NucleasLogo';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

// Real SVGs for tech logos
const techSvgs = [
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><circle cx="20" cy="20" r="18" fill="#222" /><g stroke="#61DAFB" strokeWidth="2" fill="none"><ellipse rx="10" ry="18" cx="20" cy="20" transform="rotate(60 20 20)"/><ellipse rx="10" ry="18" cx="20" cy="20" transform="rotate(120 20 20)"/><ellipse rx="10" ry="18" cx="20" cy="20" /></g><circle cx="20" cy="20" r="3" fill="#61DAFB" /></svg>
    )
  },
  {
    name: 'Node.js',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><circle cx="20" cy="20" r="18" fill="#222" /><path d="M20 10l8 4.6v9.2l-8 4.6-8-4.6v-9.2z" fill="#3C873A" /><text x="20" y="27" textAnchor="middle" fontSize="8" fill="#fff">Node</text></svg>
    )
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#3178C6" /><text x="20" y="25" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">TS</text></svg>
    )
  },
  {
    name: 'Tailwind',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#222" /><path fill="#06B6D4" d="M20 13c-4.4 0-7.3 2.2-8.7 6.7C13.1 16.7 16.1 15.8 19 16.5c1.7.4 3.1 1.7 4.5 3.1C25.9 22.1 28.1 24 32 24c4.4 0 7.3-2.2 8.7-6.7C38.9 23.3 35.9 24.2 33 23.5c-1.7-.4-3.1-1.7-4.5-3.1C26.1 17.9 23.9 16 20 16z" /></svg>
    )
  },
  {
    name: 'Vue.js',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#222" /><polygon points="20,10 30,30 10,30" fill="#42b883" /><polygon points="20,15 27,30 13,30" fill="#35495e" /></svg>
    )
  },
  {
    name: 'Angular',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#222" /><polygon points="20,8 32,14 28,32 12,32 8,14" fill="#dd0031" /><polygon points="20,12 28,30 12,30" fill="#fff" opacity=".2" /></svg>
    )
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#F7DF1E" /><text x="20" y="25" textAnchor="middle" fontSize="16" fill="#222" fontWeight="bold">JS</text></svg>
    )
  },
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" rx="8" fill="#222" /><ellipse cx="15" cy="20" rx="7" ry="7" fill="#3776AB" /><ellipse cx="25" cy="20" rx="7" ry="7" fill="#FFD43B" /><circle cx="15" cy="20" r="2" fill="#fff" /><circle cx="25" cy="20" r="2" fill="#222" /></svg>
    )
  }
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Simplified animation state
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlineRef = useRef<NodeJS.Timeout | null>(null);
  
  // Animation state for the wheel
  const [showWheel, setShowWheel] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const wheelAnimRef = useRef<number | null>(null);

  // Animation state for the wheel
  const [rotation, setRotation] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  const [logoScale, setLogoScale] = useState(1);
  const animationRef = useRef<number | null>(null);

  // --- Animated Headline (Upwards Only, Smooth) ---
  const animatedWords = ["Software", "Innovation", "Experience", "Solutions", "Future"];

  const [visited, setVisited] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('visited')) {
      setVisited(true);
    } else {
      localStorage.setItem('visited', 'true');
    }
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    // Simplified headline animation
    headlineRef.current = setTimeout(() => {
      setHeadlineIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3000);
    return () => {
      if (headlineRef.current) clearTimeout(headlineRef.current);
    };
  }, [headlineIndex]);

  // Simplified wheel animation
  useEffect(() => {
    setShowWheel(true);
    let last = performance.now();
    function spin(now: number) {
      setWheelRotation((r) => r + 0.1); // Reduced rotation speed
      wheelAnimRef.current = requestAnimationFrame(spin);
    }
    wheelAnimRef.current = requestAnimationFrame(spin);
    return () => {
      if (wheelAnimRef.current) cancelAnimationFrame(wheelAnimRef.current);
    };
  }, []);

  useEffect(() => {
    setRotation(0);
    setShowLogo(true);
    setLogoScale(1);
    let start = Date.now();
    let durationSpin = 1800; // ms for spin+acceleration
    let durationFast = 1800; // ms for fast spin (longer)
    let durationMorph = 1500; // ms for morph (slower)
    let totalDuration = durationSpin + durationFast + durationMorph;
    let lastRotation = 0;
    let frame = () => {
      let now = Date.now();
      let elapsed = now - start;
      if (elapsed < durationSpin) {
        // Ease-in acceleration (cubic)
        let t = elapsed / durationSpin;
        let eased = t * t * t; // cubic ease-in
        let spin = 0.5 + 2.5 * eased; // from 0.5 to 3 deg/frame
        lastRotation += spin;
        setRotation(lastRotation);
      } else if (elapsed < durationSpin + durationFast) {
        // Fast constant spin
        lastRotation += 6;
        setRotation(lastRotation);
      } else if (elapsed < totalDuration) {
        // Morph: fade out wheel, fade in logo, scale up logo
        let t = (elapsed - durationSpin - durationFast) / durationMorph;
        setLogoScale(1 + 0.2 * t); // scale logo up a bit
      } else {
        setLogoScale(1.2);
        return;
      }
      animationRef.current = requestAnimationFrame(frame);
    };
    animationRef.current = requestAnimationFrame(frame);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // On mount: show logo, then transition to wheel
  useEffect(() => {
    setShowLogo(true);
    setShowWheel(false);
    setWheelRotation(0);
    // Show logo for 1.5s, then fade out logo (900ms), then show wheel
    const logoTimeout = setTimeout(() => {
      setShowLogo(false);
      setTimeout(() => {
        setShowWheel(true);
      }, 900); // fade duration matches transition
    }, 1500);
    return () => clearTimeout(logoTimeout);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Simplified background elements */}
      <div className={styles.heroBackground}>
        <div className="absolute inset-0 bg-gradient-to-br from-nucleas-dark to-nucleas-dark/80"></div>
        <div className="absolute bottom-0 w-full h-1/3 md:h-1/2">
          <AnimatedWaves className="w-full h-full" />
        </div>
        
        {/* Reduced number of animated elements */}
        <div className="absolute top-16 right-16 w-32 md:w-56 h-32 md:h-56 opacity-20">
          <AnimatedBlob className="w-full h-full" />
        </div>
        
        {/* Simplified dots grid */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="h-full w-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content with simplified animation */}
          <section aria-label="Hero" className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 pt-8 pb-4 flex flex-col items-center justify-center min-h-[60vh]">
              <div className="flex flex-col justify-center items-start max-w-2xl w-full">
                <div className="text-left w-full">
                  <div className="text-sm md:text-base text-blue-400 font-semibold mb-2">Welcome to Our Tech World</div>
                  <h1 className={styles.heroHeadline}>
                    <span className="block">Advancing</span>
                    <span className="block">
                      <span className={`font-extrabold text-5xl md:text-6xl lg:text-7xl ${styles['animated-gradient-text']}`}>{animatedWords[headlineIndex]}World</span>
                    </span>
                    <span className="block">and Digital Innovation</span>
                  </h1>
                  <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-6">
                    Nucleas IT is your trusted partner for custom software development, cloud solutions, SaaS application development, and AI-powered business solutions. We help businesses achieve digital transformation with secure web and mobile app development, UI/UX design, and scalable cloud infrastructure.
                  </p>
                </div>
                {/* Badges below headline, slightly right-shifted on md+ */}
                <div className="flex flex-row flex-wrap gap-4 mb-6">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-8 py-5 md:px-10 md:py-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" aria-label="Get Started">
                <Link to="/contact">Get Started</Link>
              </Button>
                  <Button asChild variant="outline" className="border-white/20 hover:bg-white/5 backdrop-blur-sm text-white px-8 py-5 md:px-10 md:py-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" aria-label="Our Services">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
              </div>
            </div>
          </section>

          {/* Simplified wheel animation */}
          <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto flex items-center justify-center md:justify-end">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-2xl z-0 animate-pulse" />
            <div className="relative w-full h-full flex items-center justify-center">
              {techSvgs.map((tech, i) => {
                const angle = (i / techSvgs.length) * 2 * Math.PI;
                const radius = 90;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={tech.name}
                    className={`absolute shadow-xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center ${!visited ? 'animate-float' : ''}`}
                    style={{
                      left: `calc(50% + ${x}px - 28px)` ,
                      top: `calc(50% + ${y}px - 28px)` ,
                      width: 56,
                      height: 56,
                      boxShadow: '0 4px 32px 0 rgba(80,120,255,0.25)',
                      animationDelay: `${i * 0.28}s` // slower, less CPU
                    }}
                  >
                    {React.cloneElement(tech.svg, { width: 40, height: 40 })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

