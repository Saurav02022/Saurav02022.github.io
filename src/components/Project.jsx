import myglamm from "../assets/portfolio/navbar.png";
import bigbasket from "../assets/portfolio/reactWeather.jpg";
import myntra from "../assets/portfolio/myntra.jpg";
import nykaa from "../assets/portfolio/nykaa.png";

import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

import html from "../assets/html.png";
import css from "../assets/css.png";
import Chakra from "../assets/chakraui.png";
import Bootsrap from "../assets/bootstarp.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Redux from "../assets/redux.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import mongo from "../assets/mongodb.png";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: bigbasket,
      github: "https://github.com/Saurav02022/BigBasket-Clone",
      netlify: "https://bigbasket-apnidukan.netlify.app",
      websiteName: "Bigbasket Clone",
      des: "It is an E-commerce website for online supermarket of all your daily needs.",
      TechStack: [reactImage, Redux, Chakra],
      Area: "Area of responsibility :- An individual project",
    },
    {
      id: 2,
      src: nykaa,
      github: "https://github.com/Saurav02022/Nykaa-Clone",
      netlify: "https://frontend-three-coral.vercel.app/",
      websiteName: "Nykaa Clone",
      des: "Nykaa is an e-commerce website that sells beauty, wellness, and fashion products etc.",
      TechStack: [reactImage, Redux, Chakra, node, express, mongo],
      Area: "Area of responsibility :- Home Page,Cart Page and Payment Page",
    },
    {
      id: 3,
      src: myntra,
      github: "https://github.com/harshau9/eager-grain-3783",
      netlify: "https://myntra-gilt.vercel.app",
      websiteName: "Myntra Clone",
      des: "Myntra is an e-commerce website that sells cosmetics and personal care products etc.",
      TechStack: [reactImage, Redux, Chakra],
      Area: "Area of responsibility :- Signup Page,Login Page and Admin Page",
    },

    {
      id: 4,
      src: myglamm,
      github: "https://github.com/Saurav02022/languid-smash-8138",
      netlify: "https://bright-moxie-fed954.netlify.app",
      websiteName: "myglamm Clone",
      des: "MyGlamm is an e-commerce website that sells cosmetics and personal care products.",
      TechStack: [html, css, javascript, Bootsrap],
      Area: "Area of responsibility :- An individual project",
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

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({
              id,
              src,
              github,
              netlify,
              websiteName,
              des,
              TechStack,
              Area,
            }) => (
              <div
                key={id}
                className="shadow-sm rounded-lg font-Big text-xl"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                }}
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
                      key={i}
                      src={data}
                      alt={id}
                      width="12%"
                      className="duration-200 hover:scale-105"
                    />
                  ))}
                </div>
                <h2 className="text-lg mt-4 text-center">{Area}</h2>
                <div className="flex items-center  justify-around">
                  <div className="hover:scale-105 duration-500">
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={50} />
                    </a>
                  </div>
                  <div className="hover:scale-105 duration-500">
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      href={netlify}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiNetlify size={50} color="#3bc0c0" />
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
