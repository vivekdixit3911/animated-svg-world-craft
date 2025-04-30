
import React from 'react';

interface GratechLogoProps {
  className?: string;
}

const GratechLogo: React.FC<GratechLogoProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="#2563EB" />
      <path 
        d="M28 12L20 20M20 20L12 28M20 20L12 12M20 20L28 28" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default GratechLogo;
