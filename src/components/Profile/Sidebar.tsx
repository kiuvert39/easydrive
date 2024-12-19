import React, { useState } from "react";
import { FaUser, FaCog, FaHistory, FaBars, FaTimes } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden p-4 bg-blue-600 text-white flex justify-between">
        <h2 className="text-2xl font-bold">My Profile</h2>
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 p-6 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:relative md:flex md:min-h-screen`}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 md:block hidden">
          My Profile
        </h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaUser />
              <span>Overview</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaCog />
              <span>Settings</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <FaHistory />
              <span>Activity</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
