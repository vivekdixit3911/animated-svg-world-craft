
import React from 'react';

interface IconProps {
  className?: string;
}

interface TechLogoProps extends IconProps {
  type: 'react' | 'angular' | 'vue' | 'node' | 'javascript' | 'typescript' | 'tailwind' | 'python' | 'aws' | 'docker';
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

// New technology logos component
export const TechLogo: React.FC<TechLogoProps> = ({ className, type }) => {
  switch (type) {
    case 'react':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#222" />
          <path 
            d="M50 35C59.941 35 69.136 36.8335 75.912 39.8699C84.057 43.5095 89 48.757 89 53.9999C89 59.5333 83.667 65.0693 74.902 68.8392C68.337 71.6465 59.562 73.0931 50 73.0931C40.141 73.0931 31.113 71.6195 24.4686 68.7103C15.9798 64.9405 11 59.2816 11 53.9999C11 48.8041 15.6454 43.5936 23.6583 39.9628C30.4644 36.8784 39.9048 35 50 35Z" 
            stroke="#61DAFB" 
            strokeWidth="3" 
          />
          <path 
            d="M34.156 44.5877C39.1264 36.2197 44.9436 29.371 50.1329 25.489C56.0976 21.0001 61.4574 19.7377 64.7631 21.5455C68.2051 23.4183 69.6088 29.0829 68.258 36.4126C67.2026 42.0301 64.3749 48.9338 60.3157 55.8374C56.1264 62.8962 51.4021 69.1103 46.3129 72.893C40.102 77.5103 34.5972 78.7008 31.2375 76.842C27.9839 75.0432 26.5351 70.0634 27.6993 63.4648C28.7097 57.7865 31.1118 50.3656 34.156 44.5877Z" 
            stroke="#61DAFB" 
            strokeWidth="3" 
          />
          <path 
            d="M34.1488 63.5458C29.1617 55.1932 26.7049 47.6621 25.6845 41.8917C24.5392 35.2222 25.9331 30.1413 29.2047 28.3335C32.6115 26.4607 38.0793 28.0778 44.3912 32.9164C49.4195 36.7081 54.6177 42.7728 59.1538 49.6352C63.8051 56.7095 67.0678 63.8303 68.3474 69.6277C69.9665 76.5041 68.62 81.8716 65.282 83.7444C62.0553 85.5703 57.1444 84.1858 51.4614 80.0833C46.3361 76.3825 38.7323 71.1232 34.1488 63.5458Z" 
            stroke="#61DAFB" 
            strokeWidth="3" 
          />
          <circle cx="50" cy="54" r="8" fill="#61DAFB" />
        </svg>
      );
    case 'node':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#222" />
          <path 
            d="M50.0001 75.0002C48.8334 75.0002 47.7501 74.7085 46.7501 74.2085L40.8334 70.7085C39.2501 69.8752 40.0001 69.5835 40.5834 69.4168C42.4167 68.8335 42.7501 68.6668 44.5001 67.6668C44.7084 67.5002 45.0001 67.5835 45.2084 67.6668L49.7501 70.3752C50.0417 70.5418 50.4167 70.5418 50.6251 70.3752L69.0417 59.5418C69.3334 59.3752 69.5001 59.0418 69.5001 58.7085V37.0418C69.5001 36.7085 69.3334 36.3752 69.0417 36.2085L50.6251 25.3752C50.3334 25.2085 50.0001 25.2085 49.7084 25.3752L31.2917 36.2085C31.0001 36.3752 30.8334 36.7085 30.8334 37.0418V58.7085C30.8334 59.0418 31.0001 59.3752 31.2917 59.5418L36.3334 62.3752C40.2084 64.3752 42.6667 62.0002 42.6667 59.6252V39.7502C42.6667 39.2502 43.0834 38.8335 43.5834 38.8335H46.0001C46.5001 38.8335 46.9167 39.2502 46.9167 39.7502V59.6252C46.9167 65.0835 44.1667 68.2502 39.0001 68.2502C37.4167 68.2502 36.1667 68.2502 32.8334 66.5835L28.0001 63.8752C26.0001 62.7085 24.7501 60.5418 24.7501 58.2085V37.5418C24.7501 35.2085 26.0001 33.0418 28.0001 31.8752L46.7501 21.0002C48.7084 19.9168 51.2917 19.9168 53.2501 21.0002L71.6667 31.8752C73.6667 33.0418 74.9167 35.2085 74.9167 37.5418V58.2085C74.9167 60.5418 73.6667 62.7085 71.6667 63.8752L53.2501 74.7502C52.2501 74.7085 51.1667 75.0002 50.0001 75.0002ZM57.2917 58.0418C49.3751 58.0418 47.5417 54.2085 47.5417 50.9585C47.5417 50.4585 47.9584 50.0418 48.4584 50.0418H50.9584C51.4167 50.0418 51.7917 50.3752 51.7917 50.8335C52.2917 53.3752 53.4584 54.6252 57.3751 54.6252C60.4584 54.6252 61.8751 53.7085 61.8751 51.6252C61.8751 50.3752 61.4167 49.4585 55.5417 48.7085C50.6667 48.0835 47.5834 46.8335 47.5834 42.5002C47.5834 38.5002 50.8334 36.0835 56.0001 36.0835C61.7084 36.0835 64.7084 38.3335 65.1667 42.9168C65.1667 43.1668 65.0834 43.4168 64.9167 43.6252C64.7501 43.8335 64.5001 43.9168 64.2501 43.9168H61.7501C61.3334 43.9168 60.9584 43.6252 60.9167 43.2085C60.3334 41.0418 59.0001 39.5002 55.9584 39.5002C52.5417 39.5002 52.0001 41.1668 52.0001 42.3335C52.0001 43.7502 52.6251 44.1668 58.1667 45.0835C63.6667 45.9585 66.2917 47.1668 66.2917 51.4168C66.2917 55.7502 62.8334 58.0418 57.2917 58.0418Z" 
            fill="#689F63" 
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="8" fill="#F7DF1E" />
          <path d="M25 75L31.1 71.4C32.7 74.2 34.2 76.5 37.7 76.5C41.1 76.5 43.3 75.2 43.3 70.4V41.6H50.8V70.5C50.8 78.4 46.3 82.3 38.1 82.3C30.9 82.3 26.9 78.8 25 75Z" fill="#323330" />
          <path d="M55.5 74.3L61.6 70.9C62.9 73.1 64.6 74.8 67.9 74.8C70.7 74.8 72.4 73.5 72.4 71.6C72.4 69.3 70.6 68.5 67.3 67.1L65.5 66.3C60.1 64 56.7 61.1 56.7 55C56.7 49.3 61.1 45 67.5 45C72.1 45 75.4 46.6 77.9 50.9L72 54.5C70.9 52.6 69.7 51.8 67.5 51.8C65.2 51.8 63.7 53.3 63.7 54.5C63.7 56.7 65.3 57.4 68.3 58.7L70.1 59.5C76.5 62.2 79.9 65 79.9 71.3C79.9 78.1 74.5 81.7 68 81.7C61.7 81.7 57.4 78.5 55.5 74.3Z" fill="#323330" />
        </svg>
      );
    case 'typescript':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="8" fill="#3178C6" />
          <path d="M22 50V44.5H54V50H42V82H34V50H22Z" fill="white" />
          <path d="M57.5 61.035C57.5 59.817 57.789 58.741 58.3667 57.805C58.9444 56.869 59.7486 56.14 60.7792 55.618C61.8097 55.095 62.9625 54.8335 64.2375 54.8335C65.5125 54.8335 66.6653 55.095 67.6958 55.618C68.7264 56.14 69.5306 56.869 70.1083 57.805C70.686 58.741 70.9749 59.817 70.9749 61.035C70.9749 62.252 70.686 63.3178 70.1083 64.2321C69.5306 65.1464 68.7264 65.8754 67.6958 66.4192C66.6653 66.9629 65.5125 67.2348 64.2375 67.2348C62.9625 67.2348 61.8097 66.9629 60.7792 66.4192C59.7486 65.8754 58.9444 65.1464 58.3667 64.2321C57.789 63.3178 57.5 62.252 57.5 61.035ZM80 67.0348V44.5H87.0584V81.7998H80.9417L64.1083 59.7344V82H57.0499V44.7001H63.1666L80 67.0348Z" fill="white" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="8" fill="#222" />
          <path fillRule="evenodd" clipRule="evenodd" d="M50 33C41.6667 33 36.6667 37 35 45C38.3333 41 42.1667 39.5 46.5 40.5C49.0599 41.1098 50.9235 43.0025 52.9539 45.0627C56.151 48.3049 59.8431 52 68.3333 52C76.6666 52 81.6666 48 83.3333 40C79.9999 44 76.1666 45.5 71.8333 44.5C69.2734 43.8902 67.4098 41.9975 65.3794 39.9373C62.1823 36.6951 58.4902 33 50 33ZM31.6667 52C23.3334 52 18.3334 56 16.6667 64C20.0001 60 23.8334 58.5 28.1667 59.5C30.7266 60.1098 32.5902 62.0025 34.6206 64.0627C37.8177 67.3049 41.5098 71 50 71C58.3333 71 63.3333 67 65 59C61.6666 63 57.8333 64.5 53.5 63.5C50.9401 62.8902 49.0765 60.9975 47.0461 58.9373C43.849 55.6951 40.1569 52 31.6667 52Z" fill="#06B6D4" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="8" fill="#60A5FA" />
          <text x="50" y="55" textAnchor="middle" dominantBaseline="middle" fontSize="24" fill="white">
            {type.charAt(0).toUpperCase()}
          </text>
        </svg>
      );
  }
};

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
