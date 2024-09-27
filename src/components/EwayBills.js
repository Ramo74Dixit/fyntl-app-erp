import React, { useState } from 'react';
import { FaBusinessTime } from 'react-icons/fa';
import TemplateModal from './TemplateModal'; // Import the modal component

const EwayBills = () => {
  const [isLeftEnabled, setIsLeftEnabled] = useState(false);
  const [isRightEnabled, setIsRightEnabled] = useState(false);
  const [rows, setRows] = useState([{
    itemName: '',
    quantity: '',
    unit: 'NONE',
    price: '',
    taxPercent: '0',
    amount: '',
  }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Function to add a new row to the table
  const addRow = () => {
    setRows([...rows, { itemName: '', quantity: '', unit: 'NONE', price: '', taxPercent: '0', amount: '' }]);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(false);
  };

  return (
    <div className='p-2 pl-2 sm:pl-4'>
      <div className='bg-blue-200 text-blue-600 text-xl sm:text-3xl font-semibold rounded-lg p-4 flex items-center'>
        <FaBusinessTime className="text-gray-500 mr-4" />
        E-Way Bills
      </div>
      <div className='text-xl sm:text-3xl mt-2 font-semibold'>
        Generate E-Way Bills
      </div>

      {/* Your existing form content goes here */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-transparent text-black px-4 py-2">Invoice</button>
        <label className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer">
          Upload Doc.
          <input type="file" className="hidden" />
        </label>
      </div>
      
      {/* Transportation Options */}
      <div className="flex space-x-4">
        {/* Left Section (Road) */}
        <div className="w-1/2 p-4 relative">
          <label className="flex items-center mb-4">
            <input
              type="radio"
              name="section"
              className="mr-2 text-blue-500 accent-blue-500"
              onChange={() => {
                setIsLeftEnabled(true);
                setIsRightEnabled(false);
              }}
            />
            <span>Transportation via road</span>
          </label>
          <div className="space-y-8 relative">
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">Transporter Id</span>
              <input type="text" className="w-full border border-blue-500 rounded-lg p-2" disabled={!isLeftEnabled} />
            </div>
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">Vehicle Number</span>
              <input type="text" className="w-full border border-blue-500 rounded-lg p-2" disabled={!isLeftEnabled} />
            </div>
          </div>
        </div>

        {/* Right Section (Rail/Air/Ship) */}
        <div className="w-1/2 p-4 relative">
          <label className="flex items-center mb-4">
            <input
              type="radio"
              name="section"
              className="mr-2 text-blue-500 accent-blue-500"
              onChange={() => {
                setIsRightEnabled(true);
                setIsLeftEnabled(false);
              }}
            />
            <span>Transportation via rail, air, or ship</span>
          </label>
          <div className="space-y-8 relative">
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">Transporter Id</span>
              <input type="text" className="w-full border border-blue-500 rounded-lg p-2" disabled={!isRightEnabled} />
            </div>
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">Transport Document Number</span>
              <input type="text" className="w-full border border-blue-500 rounded-lg p-2" disabled={!isRightEnabled} />
            </div>
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">Date on the document</span>
              <input type="date" className="w-full border border-blue-500 rounded-lg p-2" disabled={!isRightEnabled} />
            </div>
          </div>
        </div>
      </div>

      {/* Item Details */}
      <div className='text-xl sm:text-3xl mt-2 font-semibold'>Item Details-</div>
      <div className="flex justify-start mt-2 mb-2">
        <button onClick={addRow} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">Edit/Add Item</button>
      </div>

      {/* Items Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border" rowSpan="2">S No.</th>
              <th className="px-4 py-2 border" rowSpan="2">Item Name</th>
              <th className="px-4 py-2 border" rowSpan="2">Quantity</th>
              <th className="px-4 py-2 border" rowSpan="2">Unit</th>
              <th className="px-4 py-2 border">Price/Unit</th>
              <th className="px-4 py-2 border" colSpan="2">Tax (%)</th>
              <th className="px-4 py-2 border" rowSpan="2">Amount</th>
            </tr>
            <tr>
              <th className="px-4 py-2 border">Price without tax</th>
              <th className="px-4 py-2 border">Percent (%)</th>
              <th className="px-4 py-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full p-2"
                    value={row.itemName}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].itemName = e.target.value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full p-2"
                    value={row.quantity}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].quantity = e.target.value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <select
                    className="w-full p-2"
                    value={row.unit}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].unit = e.target.value;
                      setRows(updatedRows);
                    }}
                  >
                    <option value="NONE">NONE</option>
                    <option value="KG">KG</option>
                    <option value="L">L</option>
                  </select>
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full p-2"
                    value={row.price}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].price = e.target.value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full p-2"
                    value={row.taxPercent}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].taxPercent = e.target.value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full p-2"
                    value={row.amount}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[index].amount = e.target.value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-100 text-blue-600 font-semibold rounded-lg px-4 py-2 cursor-pointer" onClick={() => setIsModalOpen(true)}>
          Select Template
        </button>
        <label className="bg-gray-100 text-blue-600 font-semibold rounded-lg px-4 py-2 cursor-pointer">
          Next
        </label>
      </div>

      {/* Render the template modal */}
      <TemplateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleTemplateSelect}
      />

      {selectedTemplate && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Selected Template: {selectedTemplate.name}</h4>
        </div>
      )}
    </div>
  );
};

export default EwayBills;
