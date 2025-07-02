import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import Header from "./Header";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-2 sm:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Twitter</span>
              <XIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">YouTube</span>
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold text-gray-900">Company Name</h3>
          <p className="mt-4 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Header />
      </div>

      {/* شريط الحقوق */}
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; {year} Lorem Ipsum. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
