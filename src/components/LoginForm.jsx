import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { InputField } from "./InputField";
import { Link } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (email, password) => {
    console.log("Login attempt:", { email, password });
    // Handle login logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <h1 className="text-2xl font-bold text-center mb-8">Login Screen</h1>

      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="name@example.com"
        required
      />

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••••"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <Link to={"/otp"}>
        <button
          type="submit"
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200"
        >
          Sign In
        </button>
      </Link>
    </form>
  );
}

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B8C4C2]">
      <div className="w-full max-w-md p-8 mx-4">
        <Form />
      </div>
    </div>
  );
};

export default LoginForm;
