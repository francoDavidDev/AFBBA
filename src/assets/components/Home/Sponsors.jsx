import React from "react";
//import react icon
import { FaDumbbell } from "react-icons/fa6";
import { SPONSORS } from "../../../data";

const Sponsors = () => {
  return (
    <section className="w-full h-[auto] py-10 flex flex-col bg-gradient-to-t from-primary-300 to-black">
      <div className="w-[95%]  mx-auto  flex flex-col gap-5 ">
        <div className="flex justify-start items-center gap-2  py-5 ">
          <FaDumbbell className="text-5xl text-primary-400" />
          <h5 className="h5"> SPONSORS</h5>
          <div className="w-full h-[2px] bg-primary-200 "></div>
        </div>

        <div className=" h-auto flex gap-x-10  justify-evenly items-center py-5 flex-wrap">
          {SPONSORS.map((item, i) => (
            <div className="flex my-5  w-[270px] h-[270x] bg-neutral-400 rounded-lg  justify-center hover:-translate-y-2 transition-all duration-300   hover:shadow-2xl hover:bg-primary-300  cursor-pointer">
              <img src={item.image} className="p-7" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
