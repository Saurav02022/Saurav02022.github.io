import React from "react";
import kfc from "../assets/portfolio/installNode.png";
import myglamm from "../assets/portfolio/navbar.png";
import bigbasket from "../assets/portfolio/reactWeather.jpg";
import { FaGithub, FaReact, FaBootstrap } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Bootsrap from "../assets/bootstarp.png";
import Redux from "../assets/redux.png";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: myglamm,
      github: "https://github.com/Saurav02022/languid-smash-8138",
      netlify: "https://bright-moxie-fed954.netlify.app",
      websiteName: "myglamm Clone",
      des: "MyGlamm is an e-commerce website that sells cosmetics and personal care products.",
      TechStack: [html, css, javascript, Bootsrap],
    },
    {
      id: 2,
      src: kfc,
      github: "https://github.com/Saurav02022/busy-channel-5933",
      netlify: "https://magical-kitsune-faf088.netlify.app/index.html",
      websiteName: "Kfc Clone",
      des: "Kentucky Fried Chicken.Kentucky Fried Chicken(KFC) is a fast food restaurant chain that specializes infried chicken.",
      TechStack: [html, css, javascript, Bootsrap],
    },
    {
      id: 3,
      src: bigbasket,
      github: "https://github.com/Saurav02022/major-flock-5344",
      netlify: "https://bigbasket-apnidukan.netlify.app",
      websiteName: "bigbasket Clone",
      des: "It is an E-commerce website for online supermarket of all your daily needs.",
      TechStack: [html, css, javascript, reactImage, Redux],
    },
    {
      id: 4,
      src: bigbasket,
      github: "https://github.com/Saurav02022/major-flock-5344",
      netlify: "https://bigbasket-apnidukan.netlify.app",
      websiteName: "bigbasket Clone",
      des: "It is an E-commerce website for online supermarket of all your daily needs.",
      TechStack: [html, css, javascript, reactImage, Redux],
    },
  ];

  return (
    <div name="Project" className=" text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-[#75bcd6] ml-5">
            Project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src, github, netlify, websiteName, des, TechStack }) => (
              <div
                key={id}
                className="shadow-md shadow-[#75bcd6] rounded-lg font-Big text-xl px-5"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <h2 className="text-3xl mt-3 text-center">{websiteName}</h2>
                <h2 className="text-xl mt-4 text-center">{des}</h2>
                <div className="flex gap-4 items-center justify-center mt-4 ">
                  {TechStack.map((data, i) => (
                    <img
                      src={data}
                      alt={id}
                      width="12%"
                      className="duration-200 hover:scale-105"
                    />
                  ))}
                </div>
                <div className="flex items-center  justify-around">
                  <div>
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={github}
                      target="_blank"
                    >
                      <FaGithub size={40} />
                    </a>
                  </div>
                  <div>
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={netlify}
                      target="_blank"
                    >
                      <SiNetlify size={40} />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
