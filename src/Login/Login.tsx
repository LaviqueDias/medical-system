import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full font-sans">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center md:flex-1 bg-white p-10 md:p-16">
        <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
          Welcome Back
        </h1>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          <a
            href="https://facebook.com/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 text-3xl transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 text-3xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 text-3xl transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Form */}
        <form className="flex flex-col w-full max-w-md space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-green-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-green-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-green-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 font-semibold transition"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center md:flex-1 bg-green-500 text-white p-10 md:p-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">New Here?</h2>
        <p className="mb-6 text-white/90">
          Create an account and start your journey with us.
        </p>
        <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
