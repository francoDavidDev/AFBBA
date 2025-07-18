import React from "react";
import { Link } from "react-router-dom";
import { NAV } from "../../data";

const Nav = ({ className }) => {
  const handleEntradasClick = (e, href) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Usted será dirigido a la app de entradas de FAMF.\n\nPor favor, al comprar su entrada guarde el QR y los datos de su cuenta. Queda a su disposición y responsabilidad."
    );
    if (confirmed) {
      window.open(href, "_blank");
    }
  };

  return (
    <nav className={`flex w-full justify-center`}>
      <ul className="flex flex-col md:flex-row text-primary-200 font-semibold gap-y-4 md:gap-x-6">
        {NAV.map((item, index) => (
          <li
            key={index}
            className="hover:text-primary-400 cursor-pointer transition-all duration-100"
          >
            {item.name === "ENTRADAS" ? (
              <a
                href={item.href}
                onClick={(e) => handleEntradasClick(e, item.href)}
                className="text-lg sm:text-xl md:text-base lg:text-lg"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.href}
                className="text-lg sm:text-xl md:text-base lg:text-lg"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
