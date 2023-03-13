import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";
import NodeJs from "../assets/nodejs.png";
import MongoDb from "../assets/mongodb.png";
import ChakraUi from "../assets/chakraui.png";
import git from "../assets/git.png";
import vscode from "../assets/vscode.png";
import vercel from "../assets/veercel.ico";
import netlify from "../assets/netlify.png";
import Bootstrap from "../assets/bootstarp.png";
import Notion from "../assets/Notion.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 border-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 border-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 border-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React Js",
      style: "shadow-cyan-200 border-cyan-200",
    },
    {
      id: 5,
      src: Redux,
      title: "Redux",
      style: "shadow-violet-500 border-violet-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next Js",
      style: "shadow-black border-black",
    },
    {
      id: 7,
      src: NodeJs,
      title: "Node Js",
      style: "shadow-green-600 border-green-600",
    },
    {
      id: 8,
      src: MongoDb,
      title: "MongoDb",
      style: "shadow-yellow-800 border-yellow-800",
    },
    {
      id: 9,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-600 border-violet-600",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-500 border-cyan-500",
    },
    {
      id: 11,
      src: ChakraUi,
      title: "Chakra Ui",
      style: "shadow-blue-400 border-blue-400",
    },
    {
      id: 12,
      src: Notion,
      title: "Notion",
      style: "shadow-black border-black",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-black border-black",
    },
    {
      id: 14,
      src: git,
      title: "git",
      style: "shadow-teal-800",
    },
    {
      id: 15,
      src: vscode,
      title: "Vs Code",
      style: "shadow-blue-400 border-blue-400",
    },
    {
      id: 16,
      src: netlify,
      title: "Netlify",
      style: "shadow-teal-500 border-teal-500",
    },
    {
      id: 17,
      src: vercel,
      title: "Vercel",
      style: "shadow-black border-black",
    },
  ];

  return (
    <div name="Skills" className="w-full mt-0 md:mt-5">
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-content w-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#75bcd6] ml-5 ">
            Skills & Tools
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 bg-[#75bcd6] text-white border-2 border-orange-500 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto mt-1 " />
              <p className="mt-3 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
