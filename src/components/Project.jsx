import React from "react";
import kfc from "../assets/portfolio/installNode.png";
import myglamm from "../assets/portfolio/navbar.png";
import bigbasket from "../assets/portfolio/reactWeather.jpg";
import { FaGithub} from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: myglamm,
      github: "https://github.com/Saurav02022/languid-smash-8138",
      netlify: "https://bright-moxie-fed954.netlify.app",
    },
    {
      id: 2,
      src: kfc,
      github: "https://github.com/Saurav02022/busy-channel-5933",
      netlify: "https://magical-kitsune-faf088.netlify.app/index.html",
    },
    {
      id: 3,
      src: bigbasket,
      github: "https://github.com/Saurav02022/major-flock-5344",
      netlify: "https://bigbasket-apnidukan.netlify.app",
    },
  ];

  return (
    <div name="Project" className=" text-black  sm:-mt-10 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#75bcd6] font-Big">
            Project
          </p>
          <p className="py-6 font-Big text-xl">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7  sm:px-0">
          {portfolios.map(({ id, src,github,netlify }) => (
            <div
              key={id}
              className="shadow-md shadow-[#75bcd6] rounded-lg font-Big text-xl"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-Big text-xl" href={github}  target="_blank">
                <FaGithub size={40}/>
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-Big text-xl" href={netlify} target="_blank">
                 <SiNetlify size={40}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
