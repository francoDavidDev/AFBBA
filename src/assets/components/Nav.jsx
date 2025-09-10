import React from "react";
import { Link } from "react-router-dom";
import { NAV } from "../../data";

const DEFAULT_CONFIRM =
  "Usted será dirigido a la app de entradas de FAMF.\n\nPor favor, al comprar su entrada guarde el QR y los datos de su cuenta. Queda a su disposición y responsabilidad.";

const Nav = ({ className = "" }) => {
  const handleItemClick = (e, item) => {
    if (!item.external) return;
    e.preventDefault();
    const mustConfirm = item.requiresConfirm ?? false;
    const message = item.confirmMessage || DEFAULT_CONFIRM;
    if (!mustConfirm || window.confirm(message)) {
      window.open(item.href, item.target || "_blank");
    }
  };

  return (
    <nav className={`w-full ${className}`}>
      {/* Horizontal y centrado */}
      <ul className="flex flex-row justify-center items-center text-primary-200 font-semibold gap-4 md:gap-6 px-2">
        {NAV.map((item) => (
          <li
            key={item.key || item.name}
            className="hover:text-primary-400 cursor-pointer transition-all duration-100"
          >
            {item.external ? (
              <a
                href={item.href}
                onClick={(e) => handleItemClick(e, item)}
                className="text-lg md:text-base lg:text-lg"
                rel={item.rel || "noopener noreferrer"}
              >
                {item.name}
              </a>
            ) : (
              <Link to={item.href} className="text-lg md:text-base lg:text-lg">
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
