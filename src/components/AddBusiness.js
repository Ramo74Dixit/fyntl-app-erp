import React from 'react'
import { FaBusinessTime
  
} from 'react-icons/fa';
const AddBusiness = () => {
  return (
    <div className='p-2 pl-2 sm:pl-4'>
      <div className='bg-blue-200 text-blue-600 text-xl sm:text-3xl font-semibold rounded-lg p-4 flex items-center'>
  <FaBusinessTime className="text-gray-500 mr-4" /> 
  Add Business
</div>

      <div class="grid grid-cols-3 gap-4 mt-2">
       
  <div class="col-span-2 text-xl sm:text-3xl  font-semibold">Enter your Business Details:</div>
  <div class="p-2 sm:p-4 col-span-1 bg-blue-200 text-blue-600 text-sm sm:text-2xl font-semibold rounded-lg ">Add Another Bussiness + </div>
</div>
<input type="text" placeholder="GSTIN NUMBER *" class="border bg-gray-100 border-gray-200 p-2 rounded-lg w-1/3 shadow-[0_2px_4px_rgba(0,0,0,0.7)]" required/><br/>
<button class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2">
  Verify
</button><br/>
<button class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2">
  Add Bussiness
</button>
<div class="grid grid-cols-2 gap-6 w-ful sm:w-2/3 mt-8">
  <input type="text" placeholder="Trade Name" class="p-2 border border-gray-100 rounded-md bg-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
  <input type="text" placeholder="Legal Name" class="p-2 border border-gray-100 rounded-md bg-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
  <input type="text" placeholder="Shipping Address" class="p-2 border border-gray-100 rounded-md bg-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
  <input type="text" placeholder="Legal Address" class="p-2 border border-gray-100 rounded-md bg-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
  <input type="text" placeholder="HSN Code" class="col-span-1 p-2 border border-gray-100 rounded-md bg-gray-100 text-left shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
</div>
</div>
    
  )
}

export default AddBusiness

