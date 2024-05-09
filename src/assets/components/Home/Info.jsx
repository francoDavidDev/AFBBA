import React, { useRef, useState } from "react";
//import banner

//import banners in data
import { PRESENT_HOME } from "../../../data";
import { ACTUALIDAD } from "../../../data";
//import icon
import { IoMdFitness } from "react-icons/io";
import ViewPage from "../../pages/ViewPage";
import { Link } from "react-router-dom";

const Info = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const videoRef = useRef();

  return (
    <div className="bg-gradient-to-b from-primary-300 to-primary-100 h-[auto] w-full flex flex-col justify-start items-center  py-10 xl:py-[150px] gap-y-10 ">
      <h2 className=" h3 uppercase text-primary-400  w-[90%] ">ACTUALIDAD</h2>

      {/* card container */}

      <div className="w-[90%] h-[auto] flex flex-col lg:flex-row items-start justify-between  gap-5   ">
        {/* card BANER MAIN */}

        {ACTUALIDAD.map((item, index) => (
          <div
            key={index}
            className=" w-[100%] lg:w-[60%] flex flex-col gap-y-3 cursor-pointer  "
          >
            <div
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className="w-[full] h-[300px]  overflow-hidden rounded-xl   flex flex-col justify-end cursor-pointer  hover:-translate-y-1 duration-200  hover:rounded-xl   hover:shadow-primary-400 hover:shadow-md  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   "
            >
              <div
                className="h-full w-full  flex bg-cover bg-top transition-all duration-200  hover:scale-110 justify-center items-center cursor-pointer"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
            </div>

            <h4 className="h4 text-primary-200">{item.title}</h4>
            <div className="flex gap-3 items-center ">
              <IoMdFitness className="text-primary-400 text-3xl " />
              <p className="text-lg text-neutral-400 font-bold ">
                NOTICIAS
              </p>{" "}
            </div>
          </div>
        ))}

        {/* OTHERS OTRAS NOTICIAS */}
        <div className=" w-[full] lg:w-[40%] flex gap-0 lg:gap-4 gap-y-4 justify-around lg:justify-center items-center flex-wrap  ">
          {PRESENT_HOME.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setDropdown2(true)}
              onMouseLeave={() => setDropdown2(false)}
              className="w-full  md:w-[45%] lg:w-full  h-[150px] overflow-hidden rounded-xl    flex flex-col justify-center cursor-pointer  hover:-translate-y-1 duration-200  hover:rounded-xl  hover:shadow-primary-400 hover:shadow-md  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] 
          "
            >
              <Link
                to={`/viewPageHome/${item.title}`}
                className="h-full w-full  flex bg-cover bg-top transition-all duration-200   justify-between items-center cursor-pointer "
              >
                <div className="h-full w-full     ">
                  <div className="h-full w-full bg-gradient-to-r from-gray-900 to-gray-600 flex flex-row justify-center items-center text-left">
                    <div className="  h-full w-full   ">
                      <h4 className="text-md  sm:text-xl  p-5 flex flex-col justify-start items-start md:items-center  w-full h-full    truncate whitespace-normal tracking-wider ">
                        {item.title}
                      </h4>
                    </div>

                    <img
                      src={item.image}
                      alt="banner"
                      className={` relative  w-[40%]  h-[100%]  md:w-[60%]  rounded-xl `}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;

{
  /*   <div
            className="h-full w-full z-10 flex  justify-around items-end cursor-pointer hover:border-2 border-primary-300"
            style={{
              background: "rgb(0,0,0)",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.1881127450980392) 62%, rgba(0,0,0,1) 100%)",
            }}
          >
     
          </div>*/
}
