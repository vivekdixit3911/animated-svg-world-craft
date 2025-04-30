
import React from 'react';

interface CartoonAvatarProps {
  className?: string;
  seed?: string;
  role?: string;
}

const CartoonAvatar: React.FC<CartoonAvatarProps> = ({ 
  className, 
  seed = "avatar",
  role = "Developer"
}) => {
  // Generate deterministic colors based on seed
  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const colors = [
      "#60A5FA", // light blue
      "#8B5CF6", // purple
      "#F59E0B", // amber
      "#10B981", // emerald
      "#EF4444"  // red
    ];
    
    return colors[Math.abs(hash) % colors.length];
  };

  const skinTones = ["#FFDBAC", "#F1C27D", "#E0AC69", "#C68642"];
  const hairColors = ["#090806", "#4B3621", "#755C3B", "#704A07", "#D4B27D", "#B7751F"];
  
  const skinTone = skinTones[Math.abs(seed.charCodeAt(0)) % skinTones.length];
  const hairColor = hairColors[Math.abs(seed.charCodeAt(1)) % hairColors.length];
  const bgColor = stringToColor(seed + role);
  
  // Different avatar styles based on the seed - more modern and modular
  const avatarStyle = Math.abs(seed.charCodeAt(2)) % 5;
  
  // Common face elements for modular design
  const renderFace = () => (
    <>
      {/* Eyes */}
      <circle cx="80" cy="85" r="5" fill="#000" />
      <circle cx="120" cy="85" r="5" fill="#000" />
      
      {/* Mouth - simple smile */}
      <path d="M85 115 Q100 125 115 115" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    </>
  );
  
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Geometric background for modern look */}
      <defs>
        <linearGradient id={`grad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bgColor} stopOpacity="1" />
          <stop offset="100%" stopColor={`${bgColor}99`} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      {/* Background shape - more interesting than just a circle */}
      {avatarStyle % 2 === 0 ? (
        <circle cx="100" cy="100" r="100" fill={`url(#grad-${seed})`} />
      ) : (
        <path d="M0,100 Q0,0 100,0 Q200,0 200,100 Q200,200 100,200 Q0,200 0,100 Z" fill={`url(#grad-${seed})`} />
      )}
      
      {/* Modern style 1 - Minimal */}
      {avatarStyle === 0 && (
        <>
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          <path d="M55 75 Q100 25 145 75" fill={hairColor} />
          {renderFace()}
          {role === "Developer" && (
            <rect x="70" y="65" width="60" height="10" rx="5" fill="#000" opacity="0.7" />
          )}
        </>
      )}
      
      {/* Modern style 2 - Glasses */}
      {avatarStyle === 1 && (
        <>
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          <path d="M45 65 Q100 15 155 65 L145 95 Q100 80 55 95 L45 65Z" fill={hairColor} />
          {/* Rounded rectangle glasses for modern look */}
          <rect x="68" y="77" width="24" height="16" rx="8" fill="none" stroke="#000" strokeWidth="3" />
          <rect x="108" y="77" width="24" height="16" rx="8" fill="none" stroke="#000" strokeWidth="3" />
          <line x1="92" y1="85" x2="108" y2="85" stroke="#000" strokeWidth="3" />
          <path d="M90 115 Q100 125 110 115" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      
      {/* Modern style 3 - Geometric */}
      {avatarStyle === 2 && (
        <>
          {/* Face */}
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          
          {/* Geometric hair */}
          <path d="M45 95 L45 50 L75 35 L125 35 L155 50 L155 95" fill={hairColor} />
          
          {renderFace()}
          
          {/* Role-specific accessories */}
          {role === "Designer" && (
            <circle cx="100" cy="50" r="8" fill="#000" opacity="0.7" />
          )}
        </>
      )}
      
      {/* Modern style 4 - Tech */}
      {avatarStyle === 3 && (
        <>
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          
          {/* Tech-inspired hair */}
          <path d="M65 50 Q100 20 135 50 Q150 80 135 95 Q100 110 65 95 Q50 80 65 50Z" fill={hairColor} />
          
          {/* Tech elements */}
          <circle cx="80" cy="85" r="5" fill="#000" />
          <circle cx="120" cy="85" r="5" fill="#000" />
          <path d="M90 115 Q100 110 110 115" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          
          {/* Digital elements */}
          {role === "Engineer" && (
            <>
              <circle cx="70" cy="65" r="3" fill="#000" />
              <circle cx="130" cy="65" r="3" fill="#000" />
              <line x1="70" y1="65" x2="130" y2="65" stroke="#000" strokeWidth="1" strokeDasharray="2,2" />
            </>
          )}
        </>
      )}
      
      {/* Modern style 5 - Abstract */}
      {avatarStyle === 4 && (
        <>
          {/* Abstract face shape */}
          <path d="M70,60 Q100,40 130,60 Q150,80 130,120 Q100,140 70,120 Q50,80 70,60 Z" fill={skinTone} />
          
          {/* Abstract hair */}
          <path d="M70,60 Q100,30 130,60 Q140,40 130,30 Q100,10 70,30 Q60,40 70,60 Z" fill={hairColor} />
          
          {/* Simplified face */}
          <circle cx="85" cy="80" r="4" fill="#000" />
          <circle cx="115" cy="80" r="4" fill="#000" />
          <path d="M90 105 Q100 110 110 105" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          
          {/* Role indicator */}
          {role === "Manager" && (
            <path d="M85 50 L115 50" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          )}
        </>
      )}
      
      {/* Role badge at the bottom for all avatars */}
      <g transform="translate(100, 160)" textAnchor="middle">
        <rect x="-35" y="-10" width="70" height="20" rx="10" fill="white" opacity="0.2" />
        <text 
          fill="white" 
          fontSize="10" 
          fontWeight="bold" 
          dominantBaseline="middle"
        >
          {role}
        </text>
      </g>
    </svg>
  );
};

export default CartoonAvatar;
