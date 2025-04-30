
import React from 'react';

interface IconProps {
  className?: string;
}

export const WebDevIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#2563EB" />
    <path d="M12 16L8 20L12 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 16L32 20L28 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 12L18 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MobileAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#2563EB" />
    <rect x="13" y="8" width="14" height="24" rx="2" stroke="white" strokeWidth="2"/>
    <line x1="13" y1="12" x2="27" y2="12" stroke="white" strokeWidth="2"/>
    <line x1="13" y1="28" x2="27" y2="28" stroke="white" strokeWidth="2"/>
    <circle cx="20" cy="31" r="1" fill="white"/>
  </svg>
);

export const UiUxIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#2563EB" />
    <circle cx="14" cy="14" r="6" stroke="white" strokeWidth="2"/>
    <circle cx="26" cy="26" r="6" stroke="white" strokeWidth="2"/>
    <path d="M22 14H32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 26H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 10H32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 30H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CloudServiceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#2563EB" />
    <path d="M28 26C30.2091 26 32 24.2091 32 22C32 19.7909 30.2091 18 28 18C27.9334 18 27.8672 18.0018 27.8015 18.0052C27.264 14.7634 24.4429 12.25 21.0525 12.25C17.662 12.25 14.8408 14.7634 14.3034 18.0052C14.2377 18.0018 14.1714 18 14.1048 18C11.8956 18 10.1047 19.7909 10.1047 22C10.1047 24.2091 11.8956 26 14.1047 26H28Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TechCircleNode: React.FC<IconProps & { color: string; delay?: number }> = ({ className, color, delay = 0 }) => (
  <svg 
    className={`${className} animate-pulse-gentle`}
    style={{ animationDelay: `${delay}s` }}
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="28" stroke={color} strokeWidth="2" />
    <circle cx="30" cy="30" r="20" fill={color} fillOpacity="0.1" />
    <circle cx="30" cy="30" r="10" fill={color} fillOpacity="0.2" />
  </svg>
);

export const AnimatedWaves: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={`${className} animate-float`}
    viewBox="0 0 100 30" 
    preserveAspectRatio="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0,0 Q5,10 10,0 Q15,10 20,0 Q25,10 30,0 Q35,10 40,0 Q45,10 50,0 Q55,10 60,0 Q65,10 70,0 Q75,10 80,0 Q85,10 90,0 Q95,10 100,0 V30 H0 Z" 
      fill="url(#gradient)" opacity="0.2"
    />
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
      <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.5" />
      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.5" />
    </linearGradient>
  </svg>
);

export const AnimatedBlob: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={`${className} animate-spin-slow`}
    viewBox="0 0 200 200" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fill="#2563EB" 
      fillOpacity="0.2"
      d="M42.3,-57.7C54.9,-49,65.3,-36.3,69.4,-22.1C73.5,-7.9,71.3,7.8,65.7,21.8C60.2,35.9,51.3,48.3,39.2,54.8C27.1,61.4,11.9,62.1,-2.3,65C-16.5,67.9,-33,73,-45.6,67.7C-58.1,62.4,-66.7,46.8,-71.4,30.5C-76.1,14.2,-76.8,-2.7,-71.1,-16.7C-65.4,-30.7,-53.3,-41.6,-40.1,-50.2C-26.9,-58.9,-13.5,-65.2,0.6,-66C14.7,-66.8,29.7,-66.4,42.3,-57.7Z" 
      transform="translate(100 100)" 
    />
  </svg>
);

export const HeroIconGrid: React.FC<IconProps> = ({ className }) => (
  <div className={`${className} relative w-full h-full`}>
    <div className="absolute top-1/4 left-1/4 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
      <TechCircleNode className="w-full h-full" color="#2563EB" delay={0} />
    </div>
    <div className="absolute top-1/4 left-3/4 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
      <TechCircleNode className="w-full h-full" color="#F59E0B" delay={0.5} />
    </div>
    <div className="absolute top-3/4 left-1/4 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
      <TechCircleNode className="w-full h-full" color="#10B981" delay={1} />
    </div>
    <div className="absolute top-3/4 left-3/4 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
      <TechCircleNode className="w-full h-full" color="#EF4444" delay={1.5} />
    </div>
    <div className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2">
      <TechCircleNode className="w-full h-full" color="#7C3AED" delay={2} />
    </div>
    
    {/* Connecting Lines */}
    <svg className="absolute inset-0" width="100%" height="100%" fill="none">
      <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#2563EB" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
  </div>
);
