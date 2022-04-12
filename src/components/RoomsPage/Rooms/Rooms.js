import React from "react";
import { Link, Outlet } from "react-router-dom";

const Rooms = () => {
  return (
    <div className="container  px-4 py-4 mx-auto ">
      <h2 className="text-center font-semibold text-3xl py-4">
        Discover Our Rooms
      </h2>
      <div className="flex justify-center py-2">
        <Link
          className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 focus:bg-green-200 focus:rounded-tl-md focus:rounded-tr-md transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
          to="/rooms/single"
        >
          Single
        </Link>
        <Link
          className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600  focus:bg-green-200 focus:rounded-tl-md focus:rounded-tr-md transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
          to="/rooms/double"
        >
          Double
        </Link>

        <Link
          className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600  focus:bg-green-200 focus:rounded-tl-md focus:rounded-tr-md transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
          to="/rooms/budget"
        >
          Budget
        </Link>
        <Link
          className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600  focus:bg-green-200 focus:rounded-tl-md focus:rounded-tr-md transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
          to="/rooms/classic"
        >
          Classic
        </Link>
        <Link
          className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600  focus:bg-green-200 focus:rounded-tl-md focus:rounded-tr-md transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
          to="/rooms/luxury"
        >
          Luxury
        </Link>
      </div>
      <div className="text-center my-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Rooms;
