import React, { useState } from 'react';
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
  )
}
export default GenerateNewBill
