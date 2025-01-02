import React from "react";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">LOGO</h1>
          <nav className="flex space-x-6">
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">Users</a>
            <a href="#" className="hover:underline">Terms & Condition</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Profile</a>
          </nav>
        </div>
      </header>

      {/* Filters and Actions */}
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Search by phone</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Search by GST</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Search by business</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Status</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Date filters</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Download</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">NEW BUSINESS</button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-yellow-400">
              <tr>
                <th className="border border-gray-300 px-4 py-2">#ID</th>
                <th className="border border-gray-300 px-4 py-2">Business name</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
                <th className="border border-gray-300 px-4 py-2">GST NO</th>
                <th className="border border-gray-300 px-4 py-2">Start date</th>
                <th className="border border-gray-300 px-4 py-2">Renewal date</th>
                <th className="border border-gray-300 px-4 py-2">AMC</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">#PRI283737</td>
                <td className="border border-gray-300 px-4 py-2">AMBUJA NEOTIA</td>
                <td className="border border-gray-300 px-4 py-2">Newtown Sector IV</td>
                <td className="border border-gray-300 px-4 py-2">19CRLP793</td>
                <td className="border border-gray-300 px-4 py-2">12-07-2024</td>
                <td className="border border-gray-300 px-4 py-2">11-07-2025</td>
                <td className="border border-gray-300 px-4 py-2">YES</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center">
                    <input type="checkbox" className="toggle-checkbox" checked />
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">E V S L A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
