import myglamm from "../assets/portfolio/navbar.png";
import myntra from "../assets/portfolio/myntra.jpg";

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
      src: "https://user-images.githubusercontent.com/104342116/224603504-899f47b6-9a83-465b-ae52-54c4529a42c9.png",
      github: "https://github.com/Saurav02022/BigBasket-Clone",
      netlify: "https://bigbasketclone.saurav02022.vercel.app/",
      websiteName: "BigBasket Clone",
      des: "The goal of this project was to recreate the essential features of BigBasket.com, such as product listings, a shopping cart, checkout, and payment. The project was developed as an individual project and took 5 days to complete. The project features responsive design for a seamless shopping experience on all devices.",
      TechStack: [reactImage, Redux, Chakra],
      Area: "Area of responsibility :- An individual project",
    },
    {
      id: 2,
      src: "https://user-images.githubusercontent.com/104342116/227706094-dde6962c-89ec-4209-aae0-9ff7f5b96f2b.png",
      github: "https://github.com/Saurav02022/Task-Planner",
      netlify: "https://taskplanner.saurav02022.vercel.app/login",
      websiteName: "Task-Planner",
      des: "It is a Task-Planner,it allows users to Create tasks, change their status, and view progress to Improve team productivity with this easy-to-use tool.also user can create sprint ,delete sprint,update sprint name.",
      TechStack: [reactImage, Redux, Chakra, node, express, mongo],
      Area: "Area of responsibility :- An individual project",
    },
    {
      id: 3,
      src: "https://user-images.githubusercontent.com/104342116/213980455-c8c6e7a5-3e17-4e40-bee0-0e211a835752.png",
      github: "https://github.com/Saurav02022/Nykaa-Clone",
      netlify: "https://nykaaclone.saurav02022.vercel.app/",
      websiteName: "Nykaa Clone",
      des: "Nykaa is an e-commerce website that sells beauty, wellness, and fashion products etc.This clone was created to showcase my skills in building complex e-commerce applications and to provide a seamless shopping experience for users.",
      TechStack: [reactImage, Redux, Chakra, node, express, mongo],
      Area: "Area of responsibility :- Home Page,Cart Page and Payment Page",
    },
    {
      id: 4,
      src: myntra,
      github: "https://github.com/harshau9/Myntra-Clone",
      netlify: "https://myntra-black.vercel.app/",
      websiteName: "Myntra Clone",
      des: "Myntra Clone by using ReactJS. It is an Indian online fashion and lifestyle e-commerce company. It sells clothing, footwear, and accessories for men, women, and children. The main goal of the project is to gain teamwork experience. The UI is designed in the way so that it resembles with the Myntra website.",
      TechStack: [reactImage, Redux, Chakra],
      Area: "Area of responsibility :- Signup Page,Login Page and Admin Page",
    },

    {
      id: 5,
      src: myglamm,
      github: "https://github.com/Saurav02022/languid-smash-8138",
      netlify: "https://bright-moxie-fed954.netlify.app",
      websiteName: "myglamm Clone",
      des: "I created a clone of myglamm.com's home, signup, login and one product pages using HTML, CSS,Bootstrap and JavaScript.This was an individual project that I completed and pushed onto GitHub for others to view and evaluate. My clone project is intended to showcase my skills in development and ability to replicate a real-world website.",
      TechStack: [html, css, javascript, Bootsrap],
      Area: "Area of responsibility :- An individual project",
    },
  ];

  return (
    <div name="Project" className=" text-black" id="projects">
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
              classes,
            }) => (
              <div
                key={id}
                className={`shadow-sm rounded-lg font-Big text-xl project-card`}
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
                <h2 className="text-3xl mt-3 text-center project-title">
                  {websiteName}
                </h2>
                <h2 className="text-xl mt-4 text-center leading-tight project-description">
                  {des}
                </h2>
                <div className="flex gap-4 items-center justify-center mt-4 project-tech-stack">
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
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 project-github-link"
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={50} />
                    </a>
                  </div>
                  <div className="hover:scale-105 duration-500">
                    <a
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 project-deployed-link"
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
