import React from "react";
//import image
//images:

import image1 from "../../imgs/about/info/image_1.jpg";
import image2 from "../../imgs/about/info/image_8.jpg";
import image3 from "../../imgs/about/info/image_9.jpg";




const Info = () => {
  return (
    <div className="flex flex-col w-full h-auto py-20 text-white  ">
    <div className="flex w-full">
      <div className="w-1/2 p-10 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">SOBRE NOSOTROS</h2>
      
      </div>

      <div className="w-1/2 text-white p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
        <p className="mb-6 text-white/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, nulla et dictum interdum, nisi lorem
          egestas odio, vitae scelerisque enim ligula venenatis dolor.
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
          Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,
          facilisis sed ornare eu, lobortis in odio. Praesent convallis
          urna a lacus interdum ut hendrerit risus congue. Nunc sagittis
          dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui
          eget tellus gravida venenatis. Integer fringilla congue eros non
          fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
          purus. Mauris quis diam velit.
        </p>
      </div>
    </div>

    {/* Nuevo div para las imágenes */}
    <div className="w-full mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Reemplaza estas URLs con las nuevas imágenes */}
        <div key="1" className="relative cursor-pointer">
          <img
            src={image1}
            alt="Imagen 1"
            className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div key="2" className="relative cursor-pointer">
          <img
            src={image2}
            alt="Imagen 2"
            className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div key="3" className="relative cursor-pointer">
          <img
            src={image3}
            alt="Imagen 3"
            className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Info;
