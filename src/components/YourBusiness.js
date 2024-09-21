import React from 'react';
import Building from '../assets/building.png'
import edit from '../assets/edit.png'

const BusinessCard = ({ gstin, legalName, tradeName }) => {
  return (
    <div className="bg-blue-100 rounded-lg p-4 shadow-md">
      <p>{gstin}</p>
      <p>{legalName}</p>
      <p>{tradeName}</p>
      <div className="mt-2 flex justify-end">
        <button className="text-sm text-gray-500 flex items-center">
          <img src={edit} alt='logo' className='mr-1 w-4 mt-1'></img>edit
        </button>
      </div>
    </div>
  );
};

const YourBusiness = () => {
  const businesses = [
    { gstin: '<Gstin 1>', legalName: '<Legal Name 1>', tradeName: '<Trade Name 1>' },
    { gstin: '<Gstin 2>', legalName: '<Legal Name 2>', tradeName: '<Trade Name 2>' },
    { gstin: '<Gstin 3>', legalName: '<Legal Name 3>', tradeName: '<Trade Name 3>' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex p-3 rounded-xl bg-blue-100 text-4xl font-normal text-blue-600 items-center mb-6">
        <img src={Building} alt='logo' className='mr-3 -mt-1 w-12'></img>
        Your Business
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-normal mb-4">Hey, here are your businesses</p>
        </div>
        <div>
          <button className="bg-blue-100 text-blue-500 rounded-xl px-4 text-xl py-2 flex items-center">
            Add More Business <strong className="text-3xl ml-2 -mt-1">+</strong>
          </button>
        </div>
      </div>

      {/* Business Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
        {businesses.map((business, index) => (
          <BusinessCard
            key={index}
            gstin={business.gstin}
            legalName={business.legalName}
            tradeName={business.tradeName}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBusiness;
