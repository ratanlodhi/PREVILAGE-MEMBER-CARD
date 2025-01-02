import React from "react";

export default function ProfilePage() {
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
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="p-6 grid grid-cols-3 gap-4">
        {/* Profile Section */}
        <div className="bg-white p-6 rounded-md shadow-md col-span-1">
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-purple-500 flex items-center justify-center text-white text-3xl">
              <span>👤</span>
            </div>
            {/* Profile Form */}
            <input
              type="text"
              placeholder="USER NAME"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              CTA
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white p-6 rounded-md shadow-md col-span-2">
          <h3 className="text-lg font-bold mb-4">Login Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">LOGIN ID</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">IP Address</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">ISP</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Date & Time</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Logged in Duration</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">user01</td>
                  <td className="border border-gray-300 px-4 py-2">192.168.0.1</td>
                  <td className="border border-gray-300 px-4 py-2">ISP Name</td>
                  <td className="border border-gray-300 px-4 py-2">01/02/2025 10:00 AM</td>
                  <td className="border border-gray-300 px-4 py-2">2 hours</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
