import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#111827';
  const subtextColor = isDark ? '#E5E7EB' : '#1F2937';

  // Size scale
  const scale = {
    sm: { icon: 32, fontMain: 'text-base', fontSub: 'text-[9px]' },
    md: { icon: 42, fontMain: 'text-xl', fontSub: 'text-[10px]' },
    lg: { icon: 54, fontMain: 'text-2xl', fontSub: 'text-xs' },
    xl: { icon: 72, fontMain: 'text-3xl', fontSub: 'text-sm' },
  }[size];

  // SVG Monogram (T, D in Orange #FFA42D, I in Black/White)
  const Monogram = ({ width = 120, height = 80 }: { width?: number; height?: number }) => (
    <svg
      viewBox="0 0 200 130"
      width={width}
      height={height}
      className="shrink-0 overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* T top bar and stem connected into D */}
      <path
        d="M 10 12 H 105 C 138 12 158 32 158 65 C 158 98 138 118 105 118 H 68 V 82 H 92 C 108 82 120 75 120 65 C 120 55 108 48 92 48 H 68 V 118 H 36 V 38 H 10 Z"
        fill="#FFA42D"
      />
      {/* Black 'I' column */}
      <rect x="174" y="12" width="18" height="106" rx="1" fill={textColor} />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} aria-label="Tech-Dhab International">
        <Monogram width={scale.icon * 1.5} height={scale.icon} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`} aria-label="Tech-Dhab International">
        <Monogram width={scale.icon * 2.2} height={scale.icon * 1.4} />
        <div className="mt-2 text-center tracking-tight">
          <span className={`block font-extrabold font-display leading-none tracking-wide ${scale.fontMain}`} style={{ color: textColor }}>
            TECHDHAB
          </span>
          <span className={`block font-semibold tracking-[0.3em] uppercase mt-1 ${scale.fontSub}`} style={{ color: subtextColor }}>
            INTERNATIONAL
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (default) - Best for navbar and header
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`} aria-label="Tech-Dhab International">
      <div className="flex items-center justify-center">
        <Monogram width={scale.icon * 1.4} height={scale.icon} />
      </div>
      <div className="flex flex-col justify-center leading-tight">
        <span className={`font-black font-display tracking-tight leading-none ${scale.fontMain}`} style={{ color: textColor }}>
          TECHDHAB
        </span>
        <span className={`font-bold uppercase tracking-[0.24em] mt-0.5 leading-none ${scale.fontSub}`} style={{ color: subtextColor }}>
          INTERNATIONAL
        </span>
      </div>
    </div>
  );
};
