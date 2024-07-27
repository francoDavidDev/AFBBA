import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../../styles";
import { ASSOCIATIONS } from "../../../constants";
import { SectionWrapper } from "../../../hoc/index";
import { textVariant } from "../../../utils/motion";

const AssociationsCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div
          className="flex justify-center rounded-full items-center w-[150px] h-[150px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${experience.icon})` }}
        ></div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[24px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.instagram.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            <a href={point} target="_blank">
              Intagram
            </a>
          </li>
        ))}
      </ul>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.web.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            <a href={point} target="_blank">
              Pagina Web
            </a>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Associations = () => {
  return (
    <>
      <motion.div className="text-center  ">
        <p className="text-white">TODAS LAS ASOCIACIONES DE</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>ARGENTINA</h2>
      </motion.div>

      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {ASSOCIATIONS.map((experience, index) => (
            <AssociationsCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Associations, "work");
