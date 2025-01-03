import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 h-screen">
      {/* Header */}

      {/* Main Content */}
      <div className="p-6">
        {/* Date Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="date"
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="date"
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            SUBMIT
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <p className="text-2xl font-bold">12,900</p>
            <p className="text-gray-600">Active Business</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <p className="text-2xl font-bold">2,900</p>
            <p className="text-gray-600">Renewal Business</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <p className="text-2xl font-bold">500</p>
            <p className="text-gray-600">Expired Business</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <p className="text-2xl font-bold">2,12,900</p>
            <p className="text-gray-600">New Leads</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <p className="text-2xl font-bold">12,22,12,900</p>
            <p className="text-gray-600">Earnings</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center">
            <p className="text-2xl font-bold">1,000</p>
            <p className="text-gray-600">AMC Users</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Month wise Business Growth</h3>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              NEW LIC.
            </button>
          </div>
          <div>
            {/* Placeholder for Chart */}
            <div className="h-64 bg-blue-100 flex items-center justify-center">
              <p className="text-blue-800">[Chart Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
