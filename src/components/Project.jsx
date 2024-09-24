import myntra from "../assets/portfolio/myntra.jpg";
import myglamm from "../assets/portfolio/navbar.png";

import ReactGA from "react-ga4";
import { FaGithub, FaLink } from "react-icons/fa";

import Bootstrap from "../assets/bootstarp.png";
import Chakra from "../assets/chakraui.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongodb.png";
import node from "../assets/node.png";
import reactImage from "../assets/react.png";
import Redux from "../assets/redux.png";

const portfolios = [
  {
    id: 1,
    src: "https://user-images.githubusercontent.com/104342116/227706094-dde6962c-89ec-4209-aae0-9ff7f5b96f2b.png",
    github: "https://github.com/Saurav02022/Task-Planner",
    netlify: "https://taskplanner.saurav02022.vercel.app/login",
    websiteName: "Task Planner",
    description:
      "A comprehensive task management application built with React, Node, and MongoDB. Enables seamless task assignment and status tracking to enhance team productivity.",
    techStack: [reactImage, Redux, Chakra, node, express, mongo],
    responsibilities: "Designed the complete user flow, focusing on usability.",
  },
  {
    id: 2,
    src: "https://user-images.githubusercontent.com/104342116/224603504-899f47b6-9a83-465b-ae52-54c4529a42c9.png",
    github: "https://github.com/Saurav02022/BigBasket-Clone",
    netlify: "https://bigbasketclone.saurav02022.vercel.app/",
    websiteName: "BigBasket Clone",
    description:
      "A project that replicates core functionalities of BigBasket.com, featuring product listings and a responsive shopping experience, demonstrating strong front-end and back-end skills.",
    techStack: [reactImage, Redux, Chakra],
    responsibilities:
      "Developed product listings and shopping cart functionalities.",
  },
  {
    id: 3,
    src: "https://user-images.githubusercontent.com/104342116/234745660-db434053-f7f7-458f-b2c8-d22ef7ff5843.png",
    github: "https://github.com/Saurav02022/Practice-Your-Self",
    netlify: "https://practice-your-self.vercel.app/",
    websiteName: "Practice Your Self",
    description:
      "An interactive web application designed to improve speaking skills through engaging voice exercises.",
    techStack: [reactImage, Chakra],
    responsibilities:
      "Implemented voice recognition features and user interaction.",
  },
  {
    id: 4,
    src: myglamm,
    github: "https://github.com/Saurav02022/languid-smash-8138",
    netlify: "https://bright-moxie-fed954.netlify.app",
    websiteName: "MyGlamm Clone",
    description:
      "Developed a clone of MyGlamm.com focusing on essential pages like home, signup, and product pages using HTML, CSS, Bootstrap, and JavaScript.",
    techStack: [html, css, javascript, Bootstrap],
    responsibilities: "Created a responsive UI with smooth navigation.",
  },
  // {
  //   id: 5,
  //   src: "https://user-images.githubusercontent.com/104342116/213980455-c8c6e7a5-3e17-4e40-bee0-0e211a835752.png",
  //   github: "https://github.com/Saurav02022/Nykaa-Clone",
  //   netlify: "https://nykaaclone.saurav02022.vercel.app/",
  //   websiteName: "Nykaa Clone",
  //   description:
  //     "Led the development of a feature-rich e-commerce platform clone, focusing on user experience and team collaboration across various modules.",
  //   techStack: [reactImage, Redux, Chakra, node, express, mongo],
  //   responsibilities:
  //     "Oversaw the development of key pages including home, cart, and checkout.",
  // },
  {
    id: 6,
    src: myntra,
    github: "https://github.com/harshau9/Myntra-Clone",
    netlify: "https://myntra-black.vercel.app/",
    websiteName: "Myntra Clone",
    description:
      "Collaborative project replicating Myntra's interface, showcasing proficiency in ReactJS and creating a user-friendly fashion e-commerce experience.",
    techStack: [reactImage, Redux, Chakra],
    responsibilities:
      "Contributed to the signup, login, and admin functionalities.",
  },
];

const Project = () => {
  return (
    <section
      name="Project"
      className="w-full bg-gradient-to-r from-[#f0f4ff] to-[#ffffff]"
      id="projects"
    >
      <div className="container mx-auto flex flex-col justify-center w-full p-10">
        <header className="pb-10 text-left">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="border-b-4 border-[#75bcd6]">Projects</span>
          </h2>
        </header>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-4">
          {portfolios.map(
            ({
              id,
              src,
              github,
              netlify,
              websiteName,
              description,
              techStack,
              responsibilities,
            }) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-lg p-5 flex flex-col transition-transform transform hover:scale-105"
              >
                <img
                  src={src}
                  alt={`${websiteName} screenshot`}
                  className="rounded-md w-full h-52 object-cover"
                />
                <h3 className="mt-5 text-xl font-semibold">{websiteName}</h3>
                <p className="mt-5 text-md text-gray-700 h-20 overflow-x-auto hidden lg:block">
                  {description}
                </p>
                <div className="mt-5 hidden lg:flex flex-wrap gap-2.5">
                  {techStack.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt="Tech stack icon"
                      width={40}
                      className="duration-200 hover:scale-110"
                    />
                  ))}
                </div>
                <p className="mt-5 text-sm text-gray-500 h-10 overflow-x-auto">
                  {responsibilities}
                </p>
                <div className="mt-5 flex gap-2.5 md:gap-0 justify-center md:justify-between items-center md:items-start">
                  <a
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition flex items-center"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Projects",
                        action: "Clicked on the Github button.",
                        label: websiteName,
                      });
                    }}
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                  <a
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-400 transition flex items-center"
                    href={netlify}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      ReactGA.event({
                        category: "Projects",
                        action: "Clicked on the Link button.",
                        label: websiteName,
                      });
                    }}
                  >
                    <FaLink className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
