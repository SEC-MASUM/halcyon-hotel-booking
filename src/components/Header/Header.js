import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-sans w-full bg-white dark:bg-black dark:text-white border-b border-b-gray-60 shadow-sm sticky top-0 z-50">
      <nav className="container flex flex-col md:flex-row items-center md:justify-between px-4 py-3  mx-auto">
        <div>
          <h2 className="text-3xl font-bold">
            <Link to="/">
              <span className="text-green-400">Halcyon</span>
            </Link>
          </h2>
        </div>
        <div className=" max-w-7xl  px-4 py-4">
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/"
          >
            Home
          </Link>
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/rooms"
          >
            Rooms
          </Link>

          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/login"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
