import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <nav  className="bg-gray-800">
  <div  className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div  className="relative flex h-16 items-center justify-between">
      <div  className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button"  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span  className="sr-only">Open main menu</span>
         
          <svg  className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg  className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div  className="flex flex-1 items-center justify-center sm:items-stretch ">
        <div  className="hidden sm:ml-6 sm:block">
          <div  className="flex space-x-4">
          <Link to={'/home'}><div className="text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">HOME</div></Link>

          <Link to={'/review'}><div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">REVIEWS</div></Link>

          <Link to={'/dashboard'}><div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">DASHBOARD</div></Link>

          <Link to={'/blog'}><div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">BLOGS</div></Link>

          <Link to={'/about'}><div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ABOUTS</div></Link>
          </div>
        </div>
      </div>
    </div>
</div>


  <div  className="sm:hidden" id="mobile-menu">
    <div  className="space-y-1 px-2 pt-2 pb-3">
    <Link to={'/home'}><a href="/home"  className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">HOME</a></Link>

    <Link to={'/review'}><a href="reviwe"  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">REVIEWS</a></Link>

    <Link to={'/dashboard'}><a href="/dashboard"  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">DASHBOARD</a></Link>

    <Link to={'/blog'}><a href="/"  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">BLOGS</a></Link>

    <Link to={'/about'}><a href="/"  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ABOUTS</a></Link>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;
