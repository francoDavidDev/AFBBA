import React, { useEffect, useState } from "react";
import image from "../imgs/logo.png";
import Nav from "./Nav";
// import react icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import NavMobile from "./NavMobile";

const Header = () => {


  
  //estado del header
  const [isActive, setIsActive] = useState(false);

  //nav mobile estado
  const [navMobile, setNavMobile] = useState(false);

  
  

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-primary-100  py-[16px]" : "bg-none  py-[20px]"
      }  fixed  max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <img src= {image} alt="logo" width={'100px'} />
      {/*nav initially hidden - show on desktop*/}
      <Nav />
      {/**btns - initially hidden -show on desktop */}

      <div
        onClick={() => setNavMobile(!navMobile)}
        className="sm:hidden absolute right-4  "
      >
        {navMobile ? (
          <RiCloseFill className="text-neutral-100 text-3xl cursor-pointer" />
        ) : (
          <RiMenu4Fill className="text-neutral-100 text-3xl cursor-pointer " />
        )}
      </div>
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
