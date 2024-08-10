import React from "react";
//import icon
import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
  return (
    <section className=" w-full h-[300px] flex flex-col justify-center items-center gap-y-1 text-center  ">
      <AiOutlineMail className="text-5xl text-primary-400 " />

      <h3 className="h4 text-primary-200 ">NEWSLETTER SIGN UP</h3>

      <p className="text-primary-200 w-[90%] ">
        Sign up for our newsletter to stay informed on the latest events &
        happenings.
      </p>

      <form className="flex  flex-col sm:flex-row  w-[90%] sm:w-[60%] mx-auto mt-4">
        <label className="w-full">
          <input
            type="email"
            placeholder="Coloca tu Email*"
            className=" bg-primary-200 py-2 px-2 w-full outline-none border-none font-medium "
          />
        </label>
        <button className="btn  h-50 w-[100px] m-auto sm:h-full sm:mt-0 mt-3 bg-primary-100 border-none">Enviar</button>
      </form>
    </section>
  );
};

export default Newsletter;
