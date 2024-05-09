import React, { useState } from "react";
import { Link } from "react-router-dom";
// import data
import { NAV } from "../../data";
//import icon arrow
import { RiArrowRightSLine } from "react-icons/ri";

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownRedes, setDropdownRedes] = useState(false);

  return (
    <nav className="hidden sm:flex ">
      <ul className="flex text-primary-200 font-semibold  gap-x-6">
        {NAV.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:text-primary-400  text-xñ cursor-pointer transition-all duration-100"
            >
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        })}
        <div
          className="cursor-pointer flex items-center "
          onClick={() => setDropdownRedes(!dropdownRedes)}
        >
          <p
            onMouseEnter={() => setDropdownRedes(true)}
            onMouseLeave={() => setDropdownRedes(false)}
            className="hover:text-primary-400 text-[12px] "
          >
            REDES
          </p>

          <RiArrowRightSLine
            className={`${
              dropdownRedes
                ? "text-xl rotate-90 text-primary-400"
                : "text-xl -rotate-90"
            } transition-all duration-100 `}
          />
          <div
            onMouseEnter={() => setDropdownRedes(true)}
            onMouseLeave={() => setDropdownRedes(false)}
            className={`${
              dropdownRedes ? "absolute" : "hidden"
            }   bg-primary-100 h-[200px] sm:right-[20px] lg:right-[100px] top-[60px] flex flex-col justify-around gap-5 px-5 py-2   font-normal`}
          >
            <p className="hover:text-primary-400 transition-all duration-100">
              Contenido
            </p>
            <p className="hover:text-primary-400 transition-all duration-100">
              Contenido 2
            </p>
            <p className="hover:text-primary-400 transition-all duration-100">
              Contenido 3
            </p>
          </div>
        </div>
        <div
          className="cursor-pointer flex items-center "
          onClick={() => setDropdown(!dropdown)}
        >
          <p
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            className="hover:text-primary-400 text-[12px] "
          >
            MAS
          </p>

          <RiArrowRightSLine
            className={`${
              dropdown
                ? "text-xl rotate-90 hover:text-primary-300"
                : "text-xl -rotate-90"
            } transition-all duration-100 `}
          />
          <div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            className={`${
              dropdown ? "absolute" : "hidden"
            }   bg-primary-100 h-[200px] sm:right-[20px] lg:right-[10px] top-[60px] flex flex-col justify-between gap-5 px-5 py-3   font-normal`}
          >
            <p className="hover:text-primary-400  transition-all duration-100">
              Contenido
            </p>
            <p className="hover:text-primary-400 transition-all duration-100">
              Contenido 2
            </p>
            <p className="hover:text-primary-400  transition-all duration-100">
              Contenido 3
            </p>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
