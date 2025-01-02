import React from "react";

export default function UpdateForm() {
  return (
    <div className="bg-gray-100 h-screen">
      {/* Header */}
      <header className="bg-blue-800 text-white flex justify-between items-center px-6 py-3">
        <div className="text-lg font-bold">LOGO</div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">Users</a>
          <a href="#" className="hover:underline">Terms & Condition</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline font-bold">Profile</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-6 rounded-md shadow-md w-96">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Updated Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Re-Password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              CTA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
