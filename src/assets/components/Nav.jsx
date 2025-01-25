import React from "react";
import { Link } from "react-router-dom";
import { NAV } from "../../data";

const Nav = ({ className }) => {
  return (
    <nav className={`flex w-full   justify-center ${className}`}>
      <ul className="flex flex-col md:flex-row text-primary-200 font-semibold gap-y-4 md:gap-x-6">
        {NAV.map((item, index) => (
          <li
            key={index}
            className="hover:text-primary-400 cursor-pointer transition-all duration-100"
          >
            <Link
              to={item.href}
              className="text-lg sm:text-xl md:text-base lg:text-lg"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
