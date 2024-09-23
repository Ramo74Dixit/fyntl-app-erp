import React, { useEffect, useState } from 'react';
import Building from '../assets/building.png';
import edit from '../assets/edit.png';

// Business card component to display each business's info
const BusinessCard = ({ gstin, legalName, tradeName }) => {
  return (
    <div className="bg-blue-100 rounded-lg p-4 shadow-md">
      <p>{gstin}</p>
      <p>{legalName}</p>
      <p>{tradeName}</p>
      <div className="mt-2 flex justify-end">
        <button className="text-sm text-gray-500 flex items-center">
          <img src={edit} alt='edit icon' className='mr-1 w-4 mt-1' /> edit
        </button>
      </div>
    </div>
  );
};

const YourBusiness = () => {
  const [businesses, setBusinesses] = useState([]);  // Initialize with an empty array for businesses
  const [loading, setLoading] = useState(true);  // For showing a loading state

  useEffect(() => {
    // Fetch API data with authorization token
    fetch('https://fyntl.sangrahinnovations.com/user/myBusiness', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2OTYxMzRmYjA3MTBjODU4OWQ4OWMyOCIsImNvbnRhY3QiOiIrOTE3OTAyMjY4ODA2IiwiY3JlYXRlZF9hdCI6IjIwMjQtMDctMTVUMTU6MzY6MDguMzYxWiIsInN1YnNjcmlwdGlvbl90aWxsIjoiMjAyNS0wNy0yNlQwNjoyOTozNS45NTRaIiwiYWNjZXNzX3R5cGUiOiJ0cmlhbCIsImZ1bGxfbmFtZSI6IlNoaXZhbSBSYWpwb290In0sInVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuNDIuMCIsImlhdCI6MTcyNzA3MDkwMywiZXhwIjoxNzI3MTU3MzAzfQ.AGLwwkDfnU2yG4vIKywBFQ25HJbOyUEq3c4OjG-BM0w')}`,  // Ensure the token is correct
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);  // Handle errors like 401
        }
        return response.json();
      })
      .then(data => {
        setLoading(false);  // Turn off loading state
        if (data && data.data) {
          setBusinesses(data.data);  // Set businesses data from the response
        } else {
          setBusinesses([]);  // Fallback if no businesses are returned
        }
      })
      .catch(error => {
        setLoading(false);
        console.error('Error fetching businesses:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex p-3 rounded-xl bg-blue-100 text-4xl font-normal text-blue-600 items-center mb-6">
        <img src={Building} alt='building icon' className='mr-3 -mt-1 w-12' />
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

      {/* Loading state */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          {/* Check if there are businesses */}
          {businesses.length > 0 ? (
            businesses.map((business, index) => (
              <BusinessCard
                key={index}
                gstin={business.gstin}
                legalName={business.legal_name}  // Adjusted to match API response
                tradeName={business.trade_name}
              />
            ))
          ) : (
            <p>No businesses found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default YourBusiness;
