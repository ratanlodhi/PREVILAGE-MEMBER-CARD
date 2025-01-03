import React from "react";
import { Link } from "react-router-dom";

export default function UpdateForm() {
  return (
    <div className="bg-gray-100 h-dvh">
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
            <Link to={"/profile"}>
              <button
                type="submit"
                className="my-4 w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                CTA
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
