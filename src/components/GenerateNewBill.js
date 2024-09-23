import React, { useState } from 'react';
import Additem from '../assets/Additem.png'
import Share from '../assets/Share.png'
import Download from '../assets/Download.png'
import Select from '../assets/Select.png'
import Next from '../assets/Next.png'

// Table Component
function ItemsTable() {
  const [rows, setRows] = useState([createRow()]); // Initially one row

  // Function to create a new row object
  function createRow() {
    return { itemName: '', quantity: '', unit: '', price: '', tax: '', amount: '' };
  }

  // Function to add a new row
  const addRow = () => {
    setRows([...rows, createRow()]);
  };

  // Function to delete a specific row
  const deleteRow = (indexToDelete) => {
    setRows(rows.filter((_, index) => index !== indexToDelete));
  };

  // Modal toggle states
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-5 text-[#3D3F4B] ">
      <h2 className="text-[1.6rem] font-normal mb-4">Items Details -</h2>

      {/* Edit/Add Items Button */}
      <button 
        onClick={addRow} 
        className="flex items-center text-lg gap-2 px-3 py-[0.35rem] bg-[#eff0f4] border  border-[#BCC3D5] rounded-md shadow-md mb-4 hover:bg-gray-200"
      >
        <img src={Additem} alt='logo' ></img>
        Edit/Add Items
      </button>

      {/* Table */}
      <div className="overflow-x-auto shadow-[#a8a7a7c1] shadow-xl rounded-xl">
        <table className="min-w-full bg-[#F9FAFC]  shadow-md ">
        <thead className="bg-gray-100 text-[#51535e] ">
          <tr>
            <th className="border-b-2 border-r-2 border-[#989BAA] font-medium text-lg w-16" rowSpan="2">S No.</th>
            <th className="border-b-2 border-r-2 border-[#989BAA] font-medium text-lg w-96"  rowSpan="2">Item Name</th>
            <th className="border-b-2 border-r-2 border-[#989BAA] font-medium text-lg w-28"  rowSpan="2">Quantity</th>
            <th className="border-b-2 border-r-2 border-[#989BAA] font-medium text-lg w-28"  rowSpan="2">Unit</th>
            <th className="border-b-2 border-r-2 border-[#989BAA] font-medium text-lg w-40" rowSpan="1">Price/Unit</th>
            <th className="border-b-2 border-r-2 border-[#989BAA] font-medium text-lg w-36" colspan="2">Tax (%)</th>
            <th className="border-b-2 border-[#989BAA] font-medium text-lg w-36" rowSpan="2">Amount</th>
          
          </tr>
          <tr>
          <th className="border-b-2 border-r-2 border-[#989BAA] font-normal text-lg" colspan="1">(without tax)</th>
          <th className="border-b-2 border-r-2 border-[#989BAA] font-normal text-lg" colspan="1">percent(%)</th>
          <th className="border-b-2 border-r-2 border-[#989BAA] font-normal text-lg" colspan="1">Amount</th>
          </tr>
        </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-t">
                <td className=" p-1 border-r-2 border-[#989BAA] "><input type="number" className="border-2 border-[#EFF0F4] p-1 w-full rounded-xl" /></td>
                <td className=" p-1 border-r-2 border-[#989BAA]  "><input type="text" className="border-2 border-[#EFF0F4] p-1 w-full rounded-xl" /></td>
                <td className=" p-1 border-r-2 border-[#989BAA]  "><input type="number" className="border-2 border-[#EFF0F4] p-1 w-full rounded-xl" /></td>
                <td className=" p-1 border-r-2 border-[#989BAA]  "><input type="number" className="border-2 border-[#EFF0F4] p-1 w-full rounded-xl" /></td>
                <td className=" p-1 border-r-2 border-[#989BAA]  "><input type="number" className="border-2 border-[#EFF0F4] p-1 w-full rounded-xl" /></td>
                <td className=" p-1 border-r-2 border-[#989BAA]  "><input type="number" className="border-2 border-[#EFF0F4] p-1 w-full rounded-xl" /></td>
                <td className=" p-1 border-r-2 border-[#989BAA]  "><input type="number" className="border-2 border-[#EFF0F4] p-1 w-full rounded-xl" /></td>
                <td className=" p-1"><input type="number" className="border p-1 w-full rounded-lg" /></td>
                {/* <td className="p-3 border border-[#989BAA] ">
                  <button 
                    onClick={() => deleteRow(index)} 
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
            <tr className=" font-semibold bg-[#E7EDFF] text-[#1436FF]">
              <td colSpan="2" className=" p-3 text-right ">TOTAL</td>
              <td className="p-3 border-r-2 border-[#989BAA] text-right">0</td> {/* You can calculate total dynamically */}
              <td className=" p-3 border-r-2 border-[#989BAA] text-right "></td>
              <td className=" p-3 border-r-2 border-[#989BAA] text-right "></td>
              <td className=" p-3 border-r-2 border-[#989BAA] text-right "></td>
              <td className=" p-3 border-r-2 border-[#989BAA] text-right ">0</td>
              <td className=" p-3 text-right ">0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex items-stretch justify-end'>
        {/* Next Button to open the modal */}
      <button 
        className="flex items-center font-medium text-lg px-4 py-2 bg-[#F9FAFC] rounded-lg mr-6 mt-8 text-[#1436FF]"
      >
        <i className="fas fa-arrow-right"></i>
        Select Template
        <img src={Select} alt='logo' className='ml-2 w-[1.2rem]'></img>
      </button>
      {/* Next Button to open the modal */}
      <button 
        onClick={() => setShowModal(true)} 
        className="flex items-center font-medium text-lg px-4 py-2 bg-[#F9FAFC] rounded-lg mr-6 mt-8 text-[#1436FF]"
      >
        <i className="fas fa-arrow-right"></i>
        Next
        <img src={Next} alt='logo' className='ml-2 w-5'></img>

      </button>

      </div>
      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
    <div className="relative bg-white rounded-lg shadow-lg shadow-blue-200 px-12 py-7">

      {/* Close (X) Button */}
      <button 
        onClick={() => setShowModal(false)} 
        className="absolute top-4 right-4 text-gray-600 transition-transform duration-300 ease-in-out transform hover:rotate-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Modal Content */}
      <div className="space-y-4 p-4 flex flex-col items-start">
        <div className='flex'>
          <img src={Download} alt='Download icon' className='mr-3 w-9 h-9 mt-[0.1rem]'/>
          <button 
            onClick={() => alert('Download PDF')} 
            className="flex items-center gap-2 px-4 py-2 text-[#1436FF] bg-[#EFF2FF] rounded-full hover:bg-[#DDE6FF] transition-all"
          >
            Download as PDF
          </button>
        </div>
        <div className='flex'>
          <img src={Share} alt='Share icon' className='mr-3 w-9 h-9 mt-[0.1rem]'/>
          <button 
            onClick={() => alert('Share')} 
            className="flex items-center gap-2 px-4 py-2 text-[#1436FF] bg-[#EFF2FF] rounded-full hover:bg-[#DDE6FF] transition-all"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  </div>
)}

import { FaBusinessTime } from 'react-icons/fa';

const GenerateNewBill = () => {
  const [isRightEnabled, setIsRightEnabled] = useState(false);
  return (
     <div className='p-2 pl-2 sm:pl-4'>
      <div className='bg-blue-200 text-blue-600 text-xl sm:text-3xl font-semibold rounded-lg p-4 flex items-center'>
        <FaBusinessTime className="text-gray-500 mr-4" />
        Generate New Bill
      </div>
      <div className='text-xl sm:text-2xl mt-2 font-semibold'>
        Buyer's Details
      </div>
      <div className="flex space-x-12">
      <div className="w-2/5 p-2 relative">
          <div className="space-y-4 relative mt-4">
            {/* Input 1 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
               Name
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
              />
            </div>

            {/* Input 2 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
                Phone No
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
              />
            </div>
          </div>
          
        </div>
        <div className="w-1/5 p-2 relative">
        <div class="space-y-4">
  
  <div class="flex items-end space-x-4">
    <label for="billNo" class="font-semibold">Bill No:</label>
    <input 
      type="text" 
      id="billNo" 
      class="border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full" 
      placeholder="Enter Bill No" 
    />
  </div>

 
  <div class="flex items-center space-x-4">
    <label for="billDate" class="font-semibold">Bill Date:</label>
    <input 
      type="date" 
      id="billDate" 
      class="border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full" 
    />
  </div>
</div>

          
        </div>
        </div>
        
        
      

      <div className="flex space-x-2">
        {/* Left Section */}
        <div className="w-2/5 p-2 relative">
            <span> Address Type </span>
          {/* Input Fields for Left Section */}
          <div className="space-y-4 relative mt-4">
            {/* Input 1 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
                Address
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
              />
            </div>

            {/* Input 2 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
                City PinCode
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
              />
            </div>
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
                State
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 p-2 relative">
          <label className="flex items-center mb-4">
            <input
              type="radio"
              name="section"
              className="mr-2 text-black accent-blue-500"
              onChange={() => {
                setIsRightEnabled(true); 
              }}
            />
            <span>Same as shipping address</span>
          </label>
          {/* Input Fields for Right Section */}
          <div className="space-y-4 relative">
            {/* Input 1 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
                Address
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
                disabled={!isRightEnabled}
              />
            </div>
            {/* Input 2 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
               City Pincode
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
                disabled={!isRightEnabled}
              />
            </div>
            {/* Input 3 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-black">
                State
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
                disabled={!isRightEnabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GenerateNewBill
