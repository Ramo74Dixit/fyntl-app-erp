import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="relative w-full max-w-lg p-8 space-y-8 bg-white bg-opacity-90 rounded-3xl shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
        
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Join ScanT Now!
          </h2>
          <p className="mt-2 text-gray-600">Sign up and be part of something amazing</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 mt-1 bg-white bg-opacity-80 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 bg-white bg-opacity-80 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 bg-white bg-opacity-80 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-400 transform hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>
        </form>

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
