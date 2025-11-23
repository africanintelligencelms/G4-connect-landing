
import React from 'react';

const iconProps = {
  className: "w-full h-full drop-shadow-[0_0_8px_currentColor]",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.5
};

export const AiIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4m0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
    <path d="M4 12h.01M19.99 12h.01M8.5 16.5l-1.41-1.41M16.91 9.5l-1.41-1.41" />
  </svg>
);

export const VrIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 019-9h0a9 9 0 019 9v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4z" />
    <path d="M21 12H3" />
    <circle cx="7.5" cy="12.5" r="1.5" fill="currentColor"/>
    <circle cx="16.5" cy="12.5" r="1.5" fill="currentColor"/>
  </svg>
);

export const DroneIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
    <path d="M12 12V6" />
    <path d="M4 6h16" />
    <path d="M4 6l2 6" />
    <path d="M20 6l-2 6" />
  </svg>
);

export const PopcornIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 21h14" />
    <path d="M5 21l2-14h10l2 14" />
    <path d="M8 7a2 2 0 100-4 2 2 0 000 4z" />
    <path d="M16 7a2 2 0 100-4 2 2 0 000 4z" />
    <path d="M12 11a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

export const BonfireIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5" />
    <path d="M8 21l4-8 4 8" />
    <path d="M10 13c-4 0-4 4 0 4" />
    <path d="M14 13c4 0 4 4 0 4" />
    <path d="M12 9c-3 0-3 3 0 3" />
  </svg>
);

export const FlexIcon: React.FC = () => (
  <svg {...iconProps} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 12a5 5 0 015-5h0a5 5 0 015 5v0a5 5 0 01-5 5h-2a3 3 0 00-3 3v0" />
    <path d="M17 12a5 5 0 00-5-5h0a5 5 0 00-5 5v0a5 5 0 005 5h2a3 3 0 013 3v0" />
  </svg>
);
