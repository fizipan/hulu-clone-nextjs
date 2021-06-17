import React from 'react';
import requests from 'utils/requests';

const Nav = () => {
  return (
    <nav className="relative">
      <ul className="flex whitespace-nowrap space-x-10 sm:space-x-20 px-10 sm:px-20 overflow-x-auto text-2xl scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <li key={key} className="last:pr-24 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">
            <a href="">{title}</a>
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-hulu-theme h-10 w-1/12"></div>
    </nav>
  );
};

export default Nav;
