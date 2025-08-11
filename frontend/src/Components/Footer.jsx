import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-4 md:py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className="flex flex-col items-center">
          <img src="/logo.jfif" className="w-[70px] md:w-[100px] rounded-md" alt="Logo" />
          <div className="text-green-400 mt-2 font-semibold text-sm md:text-lg">Education Friend</div>
        </div>

        
        <div className="text-center">
          <h1 className="text-lg font-semibold mb-2">Connect with us</h1>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="#" className="hover:text-green-400 transition"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/educationfriend_/" className="hover:text-green-400 transition"><FaInstagramSquare /></a>
            <a href="#" className="hover:text-green-400 transition"><FaSquareXTwitter /></a>
            <a href="https://www.linkedin.com/company/education-friend/" className="hover:text-green-400 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-300">
        © 2025 <span className="text-green-400">Education Friend</span>. All rights reserved. | <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
