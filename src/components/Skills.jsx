import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";
import NodeJs from "../assets/nodejs.png";
import MongoDb from "../assets/mongodb.png";
import ChakraUi from "../assets/chakraui.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-black",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-900",
    },
    {
      id: 9,
      src: Redux,
      title: "Redux",
      style: "shadow-[#764abc]",
    },
    {
      id: 10,
      src: NodeJs,
      title: "Node Js",
      style: "shadow-green-900",
    },
    {
      id: 11,
      src: MongoDb,
      title: "MongoDb",
      style: "shadow-[#3FA037]",
    },
    {
      id: 12,
      src: ChakraUi,
      title: "Chakra Ui",
      style: "shadow-teal-800",
    },
  ];

  return (
    <div name="Skills" className=" w-full h-screen sm:mt-80 lg:-mt-1 ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#75bcd6] p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
