import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white px-4 py-6 text-xl flex flex-col md:flex-row items-center justify-around'>
      <div>
        <span className='text-blue-600 font-bold'> Need</span> For
        <span className='text-blue-600 font-bold'> News</span>
      </div>

      <div>
        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
        </div>
      </div>

      <div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-300 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      <div className="text-sm mt-4 md:mt-0">
        &copy; {new Date().getFullYear()} Need For News. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;