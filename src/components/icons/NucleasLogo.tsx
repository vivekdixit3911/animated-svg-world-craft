import React from 'react';

interface NucleasLogoProps {
  className?: string;
}

const NucleasLogo: React.FC<NucleasLogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
      
      {/* Inner Hexagon */}
      <path
        d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blue-600"
      />
      
      {/* Central Node */}
      <circle cx="50" cy="50" r="8" fill="currentColor" className="text-blue-500" />
      
      {/* Connecting Lines */}
      <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" className="text-blue-400" />
      <line x1="25" y1="37.5" x2="75" y2="62.5" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" className="text-blue-400" />
      <line x1="25" y1="62.5" x2="75" y2="37.5" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" className="text-blue-400" />
      
      {/* Nodes */}
      <circle cx="50" cy="25" r="4" fill="currentColor" className="text-blue-500" />
      <circle cx="50" cy="75" r="4" fill="currentColor" className="text-blue-500" />
      <circle cx="25" cy="37.5" r="4" fill="currentColor" className="text-blue-500" />
      <circle cx="75" cy="37.5" r="4" fill="currentColor" className="text-blue-500" />
      <circle cx="25" cy="62.5" r="4" fill="currentColor" className="text-blue-500" />
      <circle cx="75" cy="62.5" r="4" fill="currentColor" className="text-blue-500" />
    </svg>
  );
};

export default NucleasLogo; 