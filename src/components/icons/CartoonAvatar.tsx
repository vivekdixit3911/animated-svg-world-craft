import React from 'react';

interface CartoonAvatarProps {
  className?: string;
  seed?: string;
  role?: string;
}

const CartoonAvatar: React.FC<CartoonAvatarProps> = ({ className = "", seed = "default", role = "" }) => {
  // Use seed to generate consistent colors
  const stringToHue = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash % 360;
  };

  const hue = stringToHue(seed);
  const bgColor = `hsl(${hue}, 70%, 80%)`;
  const accentColor = `hsl(${(hue + 40) % 360}, 70%, 45%)`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="50" cy="50" r="50" fill={bgColor} />

      {/* Body */}
      <path
        d="M50 100 C20 100 20 75 20 75 C20 60 35 55 50 55 C65 55 80 60 80 75 C80 75 80 100 50 100"
        fill={accentColor}
      />

      {/* Head */}
      <circle cx="50" cy="35" r="20" fill={accentColor} />

      {/* Eyes */}
      <circle cx="42" cy="32" r="3" fill="white" />
      <circle cx="58" cy="32" r="3" fill="white" />

      {/* Smile */}
      <path
        d="M40 40 Q50 47 60 40"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Role-specific accessories */}
      {role.toLowerCase().includes('dev') && (
        <>
          {/* Glasses */}
          <path
            d="M36 32 L44 32 M56 32 L64 32 M50 32 L50 32"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="42" cy="32" r="5" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="58" cy="32" r="5" fill="none" stroke="white" strokeWidth="2" />
        </>
      )}

      {role.toLowerCase().includes('design') && (
        <>
          {/* Artist palette */}
          <circle cx="70" cy="25" r="6" fill="white" />
          <circle cx="73" cy="22" r="2" fill={`hsl(${(hue + 120) % 360}, 70%, 45%)`} />
          <circle cx="73" cy="28" r="2" fill={`hsl(${(hue + 240) % 360}, 70%, 45%)`} />
        </>
      )}

      {role.toLowerCase().includes('manager') && (
        <>
          {/* Tie */}
          <path
            d="M47 55 L50 70 L53 55 L50 50 Z"
            fill="white"
          />
        </>
      )}
    </svg>
  );
};

export default CartoonAvatar;
