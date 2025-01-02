import React from 'react';

export default function Timer({ timeLeft = 0 }) {
    // Ensure timeLeft is a non-negative number
    const totalSeconds = Math.max(0, timeLeft);
  
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  
    return (
      <span className="text-gray-500">
        {minutes}:{seconds}
      </span>
    );
  }
  