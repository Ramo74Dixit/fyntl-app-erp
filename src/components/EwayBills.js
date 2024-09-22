import React, { useState } from 'react';
import { FaBusinessTime } from 'react-icons/fa';

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

  // Function to add a new row to the table
  const addRow = () => {
    setRows([...rows, { itemName: '', quantity: '', unit: 'NONE', price: '', taxPercent: '0', amount: '' }]);
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
      <div className="flex space-x-4 mt-4">
        <button className="bg-transparent text-black px-4 py-2">
          Invoice
        </button>
        <label className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer">
          Upload Doc.
          <input type="file" className="hidden" />
        </label>
      </div>
      <div className='text-xl sm:text-2xl mt-2 '>
        Choose Transportation
      </div>

      <div className="flex space-x-4">
        {/* Left Section */}
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

          {/* Input Fields for Left Section */}
          <div className="space-y-8 relative">
            {/* Input 1 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">
                Transporter Id
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
                placeholder="Input 1"
                disabled={!isLeftEnabled}
              />
            </div>

            {/* Input 2 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">
                Vehicle Number
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
                placeholder="Input 2"
                disabled={!isLeftEnabled}
              />
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/2 p-4 relative">
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

          {/* Input Fields for Right Section */}
          <div className="space-y-8 relative">
            {/* Input 1 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">
                Transporter Id
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
                placeholder="Input 1"
                disabled={!isRightEnabled}
              />
            </div>

            {/* Input 2 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">
                Transport Document Number
              </span>
              <input
                type="text"
                className="w-full border border-blue-500 rounded-lg p-2"
                placeholder="Input 2"
                disabled={!isRightEnabled}
              />
            </div>

            {/* Input 3 */}
            <div className="relative">
              <span className="absolute -top-3 left-2 text-sm bg-white px-1 text-blue-500">
                Date on the document
              </span>
              <input
                type="date"
                className="w-full border border-blue-500 rounded-lg p-2"
                disabled={!isRightEnabled}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='text-xl sm:text-3xl mt-2 font-semibold'>
        Item Details-
      </div>

      {/* Add Row Button */}
      <div className="flex justify-start mt-2 mb-2">
        <button onClick={addRow} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          Edit/Add Item
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border" rowSpan="2">S No.</th>
              <th className="px-4 py-2 border" rowSpan="2">Item Name</th>
              <th className="px-4 py-2 border" rowSpan="2">Quantity</th>
              <th className="px-4 py-2 border" rowSpan="2">Unit</th>
              <th className="px-4 py-2 border" rowSpan="1">Price/Unit</th>
              <th className="px-4 py-2 border" colSpan="2">Tax (%)</th>
              <th className="px-4 py-2 border" rowSpan="2">Amount</th>
            </tr>
            <tr>
              <th className="px-4 py-2 border">Price without tax</th>
              <th className="px-4 py-2 border">percent(%)</th>
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
                    className="w-full p-2 "
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
                    className="w-full p-2 "
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
                    className="w-full p-2 "
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
                    className="w-full p-2 "
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
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-100 text-blue-600 font-semibold rounded-lg px-4 py-2 cursor-pointer">
          Select Template
        </button>
        <label className="bg-gray-100 text-blue-600 font-semibold rounded-lg px-4 py-2 cursor-pointer">
          Next 
         
        </label>
      </div>
    </div>
  );
};

export default EwayBills;
