import React from 'react';

function AnimatedDash() {
  return (
    <svg className="animated-border" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7eb9" />
          <stop offset="50%" stopColor="#7afcff" />
          <stop offset="100%" stopColor="#ff65a3" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="12"
        ry="12"
        className={`border-dash`}
      />
    </svg>
  );
}

export default AnimatedDash;
