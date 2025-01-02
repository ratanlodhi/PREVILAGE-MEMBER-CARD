import { useState, useEffect, useCallback } from 'react';

export function useOTP() {
  const [otp, setOTP] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOTPChange = useCallback((value) => {
    setOTP(value);
  }, []);

  const handleResend = useCallback(() => {
    if (canResend) {
      // Add your resend OTP logic here
      console.log('Resending OTP...');
      setTimeLeft(30);
      setCanResend(false);
    }
  }, [canResend]);

  const handleVerify = useCallback(() => {
    if (otp.length === 6) {
      // Add your verification logic here
      console.log('Verifying OTP:', otp);
    }
  }, [otp]);

  return {
    otp,
    handleOTPChange,
    timeLeft,
    canResend,
    handleResend,
    handleVerify
  };
}