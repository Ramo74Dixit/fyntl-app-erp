import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="relative w-full max-w-md p-8 space-y-8 bg-white bg-opacity-90 rounded-2xl shadow-2xl backdrop-blur-md">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Welcome Back!
          </h2>
          <p className="mt-2 text-gray-600">Log in to continue your journey.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 bg-white bg-opacity-80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 bg-white bg-opacity-80 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="/forgot-password" className="text-sm text-purple-500 hover:text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-purple-400 transform hover:scale-105 transition duration-300"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Don’t have an account?</p>
          <a
            href="/signup"
            className="font-bold text-purple-500 hover:text-purple-600 hover:underline transition duration-200"
          >
            Sign Up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
