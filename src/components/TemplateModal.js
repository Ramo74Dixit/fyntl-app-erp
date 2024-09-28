import React, { useState, useEffect } from 'react';

const TemplateModal = ({ isOpen, onClose, onSelect }) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null); // State to store the selected template ID
  const authToken = localStorage.getItem('authToken');

  // Function to fetch templates
  const fetchTemplates = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fyntl.sangrahinnovations.com/user/format', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        const errorMsg = response.status === 401 ? 'Unauthorized access, please login again.' : response.statusText;
        throw new Error(`Error: ${errorMsg}`);
      }

      const data = await response.json();
      setTemplates(data.bill || []); // Assuming 'bill' contains the templates
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching templates:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchTemplates(); // Fetch templates when modal is opened
    }
  }, [isOpen, authToken]);

  // Function to update selected template
  const updateSelectedTemplate = async (templateId) => {
    try {
      const response = await fetch('https://fyntl.sangrahinnovations.com/user/format', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ bill_id: templateId }), // Corrected variable name
      });

      if (!response.ok) {
        const errorMsg = response.status === 401 ? 'Unauthorized access, please login again.' : response.statusText;
        throw new Error(`Error: ${errorMsg}`);
      }

      const data = await response.json();
      console.log('Template updated successfully:', data);
    } catch (err) {
      setError(err.message);
      console.error('Error updating template:', err);
    }
  };

  // Function to handle template selection
  const handleTemplateSelect = (template) => {
    setSelectedTemplateId(template.bill_id); // Set selected template ID
    updateSelectedTemplate(template.bill_id); // Call the API to update the selected template
    onSelect(template); // Trigger onSelect with the selected template, without closing the modal
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-2/3 max-h-full overflow-y-auto">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {templates.map((template) => (
                  <div
                    key={template._id}
                    className="relative p-2 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer flex flex-col items-center"
                    onClick={() => handleTemplateSelect(template)} // Handle template click, without closing modal
                  >
                    {/* Template Image */}
                    <img
                      src={template.url}
                      alt="Template"
                      className="w-full h-auto object-cover rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150?text=Image+Not+Available"; // Fallback image
                      }}
                    />
                    {/* Template Name */}
                    <p className="mt-2 text-center text-sm text-gray-700">{template.name}</p>
                    {/* Green check mark overlay */}
                    {selectedTemplateId === template._id && (
                      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
                        <span className="text-green-500 text-4xl">&#10003;</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
