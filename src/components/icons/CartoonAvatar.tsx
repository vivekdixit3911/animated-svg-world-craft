
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
  
  // Different avatar styles based on the seed
  const avatarStyle = Math.abs(seed.charCodeAt(2)) % 4;
  
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill={bgColor} />
      
      {avatarStyle === 0 && (
        <>
          {/* Basic avatar with short hair */}
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          <path d="M55 75 Q100 25 145 75" fill={hairColor} />
          <circle cx="80" cy="85" r="5" fill="#000" />
          <circle cx="120" cy="85" r="5" fill="#000" />
          <path d="M85 115 Q100 125 115 115" fill="none" stroke="#000" strokeWidth="3" />
          {role === "Developer" && (
            <rect x="75" y="65" width="50" height="15" rx="5" fill="#000" opacity="0.7" />
          )}
        </>
      )}
      
      {avatarStyle === 1 && (
        <>
          {/* Avatar with glasses */}
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          <path d="M45 65 Q100 15 155 65 L145 95 Q100 80 55 95 L45 65Z" fill={hairColor} />
          <circle cx="80" cy="85" r="12" fill="none" stroke="#000" strokeWidth="3" />
          <circle cx="120" cy="85" r="12" fill="none" stroke="#000" strokeWidth="3" />
          <line x1="92" y1="85" x2="108" y2="85" stroke="#000" strokeWidth="3" />
          <path d="M85 115 Q100 125 115 115" fill="none" stroke="#000" strokeWidth="3" />
          {role === "Designer" && (
            <path d="M70 60 Q100 75 130 60" fill="none" stroke="#000" strokeWidth="3" />
          )}
        </>
      )}
      
      {avatarStyle === 2 && (
        <>
          {/* Avatar with longer hair */}
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          <path d="M45 95 Q50 30 100 30 Q150 30 155 95 Q155 120 155 150 Q100 160 45 150 Q45 120 45 95Z" fill={hairColor} />
          <circle cx="80" cy="90" r="5" fill="#000" />
          <circle cx="120" cy="90" r="5" fill="#000" />
          <path d="M85 115 Q100 125 115 115" fill="none" stroke="#000" strokeWidth="3" />
          {role === "Manager" && (
            <path d="M75 70 L125 70" stroke="#000" strokeWidth="3" />
          )}
        </>
      )}
      
      {avatarStyle === 3 && (
        <>
          {/* Different style avatar */}
          <circle cx="100" cy="95" r="55" fill={skinTone} />
          <path d="M65 50 Q100 20 135 50 Q150 80 135 95 Q100 110 65 95 Q50 80 65 50Z" fill={hairColor} />
          <circle cx="80" cy="85" r="5" fill="#000" />
          <circle cx="120" cy="85" r="5" fill="#000" />
          <path d="M90 115 Q100 105 110 115" fill="none" stroke="#000" strokeWidth="3" />
          {role === "Engineer" && (
            <circle cx="100" cy="60" r="5" fill="#000" />
          )}
        </>
      )}
    </svg>
  );
};

export default CartoonAvatar;
