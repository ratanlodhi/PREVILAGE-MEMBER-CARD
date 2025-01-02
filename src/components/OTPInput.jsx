import React, { useRef, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function OTPInput({ value, onChange }) {
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleChange = (e, index) => {
    const newValue = e.target.value;
    if (newValue.match(/^[0-9]$/)) {
      // eslint-disable-next-line react/prop-types
      const newOTP = value.split('');
      newOTP[index] = newValue;
      onChange(newOTP.join(''));
      
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  return (
    <div className="flex justify-between gap-2">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
}