// TemplateModal.js
import React, { useState, useEffect } from 'react';

const TemplateModal = ({ isOpen, onClose, onSelect }) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const authToken = localStorage.getItem('authToken'); // Assuming the token is stored in localStorage

  useEffect(() => {
    if (isOpen) {
      // Fetch templates from the API
      const fetchTemplates = async () => {
        setLoading(true);
        setError(null); // Reset error state
        try {
          const response = await fetch('https://fyntl.sangrahinnovations.com/user/format', {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`); // Throw error if response is not ok
          }

          const data = await response.json();
          // Extract the 'bill' array from the response
          setTemplates(data.bill || []);
          console.log(data);
        } catch (err) {
          setError(err.message); // Set error message
          console.error('Error fetching templates:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchTemplates();
    }
  }, [isOpen, authToken]); // Added authToken to dependency array

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Select Template</h2>
              <button className="text-red-500" onClick={onClose} aria-label="Close modal">
                &times;
              </button>
            </div>
            {loading ? (
              <div>Loading templates...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : templates.length > 0 ? (
              <ul>
                {templates.map((template) => (
                  <li
                    key={template._id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => onSelect(template)}
                  >
                    {template.name}
                  </li>
                ))}
              </ul>
            ) : (
              <div>No templates available</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TemplateModal;
