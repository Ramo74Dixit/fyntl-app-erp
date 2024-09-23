import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number (basic validation)
    if (!phone || phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await axios.post("https://fyntl.sangrahinnovations.com/user/verify", {
        contact: `+91${phone}`,
      });

      // Check if the response status is 200
      if (response.status === 200) {
        setSuccessMessage("Verification successful. Please check your messages.");
        setErrorMessage(""); // Clear any existing error message
      } else {
        setErrorMessage("Verification failed. Please try again.");
      }
    } catch (error) {
      // Handle errors
      setErrorMessage("An error occurred while verifying. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="relative w-full max-w-lg p-8 space-y-8 bg-white bg-opacity-90 rounded-3xl shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
        
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Join ScanT Now!
          </h2>
          <p className="mt-2 text-gray-600">Sign up and be part of something amazing</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 rounded-l-full">
                +91
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 bg-white bg-opacity-80 border border-gray-300 rounded-r-full shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
              />
            </div>
            {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-400 transform hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {successMessage && <p className="mt-4 text-center text-green-500">{successMessage}</p>}

        <div className="text-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <a
            href="/login"
            className="font-bold text-blue-500 hover:text-blue-600 hover:underline transition duration-200"
          >
            Login Here
          </a>
        </div>

        <div className="mt-8 text-center">
          <blockquote className="text-sm italic text-gray-500">
            "The future belongs to those who believe in the beauty of their dreams."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
