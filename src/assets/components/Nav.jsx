import React from "react";
import { Link } from "react-router-dom";
import { NAV } from "../../data";

const Nav = ({ className }) => {
  return (
    <nav className={`flex w-full justify-center ${className}`}>
      <ul className="flex text-primary-200 font-semibold gap-x-6">
        {NAV.map((item, index) => (
          <li
            key={index}
            className="hover:text-primary-400 cursor-pointer transition-all duration-100"
          >
            <Link
              to={item.href}
              className="text-sm sm:text-base md:text-sm lg:text-xl"
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
