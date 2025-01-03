import React from "react";
import OTPInput from "./OTPInput";
import Timer from "./Timer";
import { useOTP } from "../components/hooks/useOTP";
import { Link } from "react-router-dom";

export default function OTPScreen() {
  const {
    otp,
    handleOTPChange,
    timeLeft,
    canResend,
    handleResend,
    handleVerify,
  } = useOTP();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B8C4C2]">
      <div className="w-full max-w-md p-8 mx-4">
        <div className="w-full max-w-sm space-y-6">
          <h1 className="text-2xl font-bold text-center">OTP Screen</h1>

          <div className="space-y-4">
            <p className="text-center text-gray-600">Enter 6 digit OTP</p>

            <OTPInput value={otp} onChange={handleOTPChange} />

            <div className="flex items-center justify-between text-sm">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => {}}
              >
                Didnt get otp
              </button>

              <Timer timeLeft={timeLeft} />

              <button
                className={`text-black-800 hover:text-blue-800 ${
                  !canResend && "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleResend}
                disabled={!canResend}
              >
                Resend now
              </button>
            </div>

            <button
              onClick={handleVerify}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200"
            >
              Verify Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
