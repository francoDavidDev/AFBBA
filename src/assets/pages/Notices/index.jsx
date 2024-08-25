import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CarrouselSponsors from "../../components/CarrouselSponsors";

const notices = [
  {
    id: 1,
    title: "Card title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis nobis repudiandae molestiae architecto totam, impedit non molestias nam cum, rem nostrum aspernatur, nulla quis illo saepe quibusdam fuga facere.",
    image:
      "https://plus.unsplash.com/premium_photo-1706807135398-31770beffb74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8fHx8",
  },
  {
    id: 2,
    title: "Card title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis nobis repudiandae molestiae architecto totam, impedit non molestias nam cum, rem nostrum aspernatur, nulla quis illo saepe quibusdam fuga facere.",
    image: "https://placekitten.com/800/600",
  },
  {
    id: 3,
    title: "Card title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis nobis repudiandae molestiae architecto totam, impedit non molestias nam cum, rem nostrum aspernatur, nulla quis illo saepe quibusdam fuga facere.",
    image: "https://placekitten.com/801/600",
  },
];

const NoticesPage = () => {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  return (
    <motion.section
      className="w-full h-auto flex flex-col justify-center gap-y-10 items-center"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
    

      <motion.div
        className="w-[90%] h-auto m-auto mt-[100px] gap-y-10"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-[1px] bg-white flex justify-center"
          initial={{ width: 0, transformOrigin: "center" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        
        <motion.div
          className="flex justify-center flex-col text-center mt-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-[60px] font-bold tracking-widest"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            NOTICIAS
          </motion.h2>
          <motion.p
            className="text-[30px] text-primary-400/80 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            TODAS LAS NOTICIAS ACTUALIZADAS DE FAMF
          </motion.p>
        </motion.div>


      </motion.div>

        {/* Sección de imágenes */}
        <div className="w-[90%] flex justify-between gap-4 mb-10">
        <motion.div
          className="w-[40%] h-[300px] bg-blue-500   rounded-lg flex items-center justify-center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-2xl font-bold">60% Width Section</p>
        </motion.div>
        <motion.div
          className="w-[60%] h-[300px] rounded-lg bg-green-500 flex items-center justify-center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-2xl font-bold">40% Width Section</p>
        </motion.div>
      </div>

      <div className="w-[90%] flex items-center justify-center">
        <div className="w-full m-auto grid grid-cols-3 gap-8 md:grid-cols-3 sm:grid-cols-1">
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full h-auto"
                onMouseEnter={() => setHoveredImageId(notice.id)}
                onMouseLeave={() => setHoveredImageId(null)}
              >
                <Link to={`/notices/${notice.id}`}>
                  <img
                    className="w-full h-auto"
                    src={notice.image}
                    alt={`image-${notice.id}`}
                  />
                </Link>
              </motion.div>
              <div className="p-5">
                <motion.h2
                  className={`text-[#0078c2] text-[28px] mt-2 ${
                    hoveredImageId === notice.id ? 'text-[#FFB11B]' : ''
                  }`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  style={{ y: hoveredImageId === notice.id ? -5 : 0 }}
                >
                  {notice.title}
                </motion.h2>
                <motion.p
                  className={`text-[#222] leading-relaxed ${
                    hoveredImageId === notice.id ? 'text-[#FFB11B]' : ''
                  }`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  style={{ y: hoveredImageId === notice.id ? -5 : 0 }}
                >
                  {notice.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Carrousel de Sponsors*/}
           {/* Carrousel de Sponsors*/}
           <CarrouselSponsors/>
    </motion.section>
  );
};

export default NoticesPage;
