import React from "react";

import Button from "./Button";
import Footer from "./Footer";

export default function Navbar() {
  return (
    < div className="flex flex-col justify-between bg-gray-50">
    <div className="flex items-center justify-between px-7 p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between ">
        <div className="flex-shrink-0">
          <span className="text-3xl font-bold text-gray-800">Logo</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
            <Button />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM14.293 14.293a1 1 0 011.414-1.414l4.586 4.586a1 1 0 01-1.414 1.414l-4.586-4.586z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-64 bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>
        <div className="flex items-center">
          <button className="w-full bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition duration-300 ml-7">
            Login
          </button>
          <button className="w-full bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-500 transition duration-300 ml-7">
            Sign
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
