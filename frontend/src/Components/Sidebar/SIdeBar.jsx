import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dashboard from '../../Pages/Dashboard';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <button
        className="lg:hidden p-4 w-screen bg-gray-800 text-white fixed top-0 left-0 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        
        {isOpen ? <FaTimes size={24} />: <FaBars size={24} />}
      </button>


      
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:block`}
      >
        <div className="p-4 font-bold text-lg"> Library Management System</div>
        <ul className="flex flex-col space-y-4 p-4">
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/books">Books</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/issuedbooks">Issued Books</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/dues">Dues</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
