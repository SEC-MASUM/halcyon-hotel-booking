import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="font-sans w-full m-0">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/"
          >
            Home
          </Link>
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/reviews"
          >
            Reviews
          </Link>
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
