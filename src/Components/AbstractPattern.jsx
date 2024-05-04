import React from 'react';

const AbstractPattern = () => {
  const generateDotsAndLines = () => {
    const dots = [];
    const lines = [];

    // Generate 10 random dots
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      dots.push(<circle key={`dot-${i}`} cx={`${x}%`} cy={`${y}%`} r="1" fill="#805AD5" />);
    }

    // Generate lines connecting the dots
    for (let i = 0; i < dots.length; i++) {
      const x1 = dots[i].props.cx;
      const y1 = dots[i].props.cy;

      for (let j = i + 1; j < dots.length; j++) {
        const x2 = dots[j].props.cx;
        const y2 = dots[j].props.cy;
        lines.push(<line key={`line-${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6B46C1" strokeWidth="0.2" />);
      }
    }

    return (
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        {dots}
        {lines}
      </svg>
    );
  };

  return (
    <div className="abstract-pattern">
      {generateDotsAndLines()}
    </div>
  );
};

export default AbstractPattern;
