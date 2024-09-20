import React, { useState } from "react";
import { FaFileAlt, FaSearch, FaEdit, FaTrashAlt, FaEye } from "react-icons/fa"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const GeneratedBills = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const bills = [
    {
      id: 2001,
      plan: "Platinum Subscription Plan",
      issueDate: "06 Sep 2023",
      dueDate: "06 Oct 2023",
      total: "Rs.799.00",
      status: "Paid",
    },
    {
      id: 2000,
      plan: "Flexible Subscription Plan",
      issueDate: "05 Sep 2023",
      dueDate: "05 Oct 2023",
      total: "Rs.645.00",
      status: "Due",
    },
    {
      id: 1999,
      plan: "Platinum Subscription Plan",
      issueDate: "05 Sep 2023",
      dueDate: "05 Oct 2023",
      total: "Rs.415.00",
      status: "Paid",
    },
    {
      id: 1998,
      plan: "Gold Subscription Plan",
      issueDate: "04 Sep 2023",
      dueDate: "04 Oct 2023",
      total: "Rs.784.00",
      status: "Cancelled",
    },
    {
      id: 1997,
      plan: "Flexible Subscription Plan",
      issueDate: "04 Aug 2023",
      dueDate: "04 Aug 2023",
      total: "Rs.215.00",
      status: "Paid",
    },
    {
      id: 1996,
      plan: "Platinum Subscription Plan",
      issueDate: "04 Aug 2023",
      dueDate: "04 Aug 2023",
      total: "Rs.648.00",
      status: "Due",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex items-center space-x-2 h-14 bg-[#E7EDFF] border rounded-lg p-5 text-[#1436FF] font-bold text-3xl">
        <FaFileAlt className="text-3xl" />
        <span>Generated Bills</span>
      </div>
      <div className="flex justify-end items-center space-x-4 p-4">
        <div className="flex items-center border rounded-md p-2 bg-white">
          <input
            type="text"
            placeholder="Search Bill ID"
            className="outline-none px-2 text-sm"
          />
          <FaSearch className="text-gray-500" />
        </div>
        <div className="relative">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Date"
            className="border border-gray-300 rounded-md p-2 text-sm bg-white"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="bg-white shadow-xl rounded-lg p-6 w-full h-40 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-5xl text-center text-gray-800 mt-2">175</h2>
          <p className="text-center text-gray-500 text-sm mt-4">
            Total Bills Generated
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6 w-full h-40 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-5xl text-center text-gray-800 mt-2">150</h2>
          <p className="text-center text-gray-500 text-sm mt-4">
            Bills Generated last month
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6 w-full h-40 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-5xl text-center text-gray-800 mt-2">25</h2>
          <p className="text-center text-gray-500 text-sm mt-4">
            Bills Generated this month
          </p>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Bill ID</th>
              <th className="px-4 py-2 text-left">Bill For</th>
              <th className="px-4 py-2 text-left">Issue Date</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td className="border px-4 py-2">{bill.id}</td>
                <td className="border px-4 py-2">{bill.plan}</td>
                <td className="border px-4 py-2">{bill.issueDate}</td>
                <td className="border px-4 py-2">{bill.dueDate}</td>
                <td className="border px-4 py-2">{bill.total}</td>
                <td
                  className={`border px-4 py-2 ${
                    bill.status === "Paid"
                      ? "text-green-500"
                      : bill.status === "Due"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {bill.status}
                </td>
                <td className="border px-4 py-2">
                  <div className="flex space-x-2">
                    <FaEye className="text-gray-500 cursor-pointer" />
                    <FaEdit className="text-blue-500 cursor-pointer" />
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">Showing 1 out of 6 entries</span>
          <div className="flex space-x-1">
            <button className="px-2 py-1 border rounded-md text-sm">
              Previous
            </button>
            <button className="px-2 py-1 border rounded-md text-sm">1</button>
            <button className="px-2 py-1 border rounded-md text-sm">2</button>
            <button className="px-2 py-1 border rounded-md text-sm">3</button>
            <button className="px-2 py-1 border rounded-md text-sm">4</button>
            <button className="px-2 py-1 border rounded-md text-sm">5</button>
            <button className="px-2 py-1 border rounded-md text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneratedBills;
