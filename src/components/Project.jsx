import myglamm from "../assets/portfolio/navbar.png";
import myntra from "../assets/portfolio/myntra.jpg";

import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

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

const portfolios = [
  {
    id: 1,
    src: "https://user-images.githubusercontent.com/104342116/213980455-c8c6e7a5-3e17-4e40-bee0-0e211a835752.png",
    github: "https://github.com/Saurav02022/Nykaa-Clone",
    netlify: "https://nykaaclone.saurav02022.vercel.app/",
    websiteName: "Nykaa Clone",
    des: "I spearheaded a team to create a Nykaa Clone - an e-commerce website for beauty, wellness, and fashion products. The project showcased my expertise in building intricate e-commerce applications, prioritizing user experience, and efficient team management.",
    TechStack: [reactImage, Redux, Chakra, node, express, mongo],
    Area: "Area of responsibility :- Home Page,Cart Page and Payment Page",
  },
  {
    id: 2,
    src: "https://user-images.githubusercontent.com/104342116/227706094-dde6962c-89ec-4209-aae0-9ff7f5b96f2b.png",
    github: "https://github.com/Saurav02022/Task-Planner",
    netlify: "https://taskplanner.saurav02022.vercel.app/login",
    websiteName: "Task-Planner",
    des: "A web app for managing tasks and sprints. Built with React, Node, and MongoDB, it allows users to assign tasks, change their status, and view progress. Improve team productivity with this easy-to-use tool.",
    TechStack: [reactImage, Redux, Chakra, node, express, mongo],
    Area: "Area of responsibility :- An individual project",
  },
  {
    id: 3,
    src: "https://user-images.githubusercontent.com/104342116/224603504-899f47b6-9a83-465b-ae52-54c4529a42c9.png",
    github: "https://github.com/Saurav02022/BigBasket-Clone",
    netlify: "https://bigbasketclone.saurav02022.vercel.app/",
    websiteName: "BigBasket Clone",
    des: "I successfully clone BigBasket.com's core functionalities in a solo project, including product listings, shopping cart, checkout, and payment options. The project's responsive design ensures a seamless shopping experience across all devices, highlighting my expertise in front-end development and Full Stack development.",
    TechStack: [reactImage, Redux, Chakra],
    Area: "Area of responsibility :- An individual project",
  },
  {
    id: 4,
    src: "https://user-images.githubusercontent.com/104342116/234745660-db434053-f7f7-458f-b2c8-d22ef7ff5843.png",
    github: "https://github.com/Saurav02022/Practice-Your-Self",
    netlify: "https://practice-your-self.vercel.app/",
    websiteName: "Practice-Your-Self",
    des: "Practice-Your-Self is a web app for improving speaking skills. Click Start Listening to speak, Stop Listening to finish, and Copy to save your text.",
    TechStack: [reactImage, Chakra],
    Area: "Area of responsibility :- An individual project",
  },
  {
    id: 5,
    src: myntra,
    github: "https://github.com/harshau9/Myntra-Clone",
    netlify: "https://myntra-black.vercel.app/",
    websiteName: "Myntra Clone",
    des: "Myntra Clone - A collaborative project showcasing my ReactJS skills, featuring a user-friendly web app modeled after the popular Indian fashion and lifestyle e-commerce platform.",
    TechStack: [reactImage, Redux, Chakra],
    Area: "Area of responsibility :- Signup Page,Login Page and Admin Page",
  },
  {
    id: 6,
    src: myglamm,
    github: "https://github.com/Saurav02022/languid-smash-8138",
    netlify: "https://bright-moxie-fed954.netlify.app",
    websiteName: "myglamm Clone",
    des: "I developed a clone of myglamm.com's home, signup, login, and product pages using HTML, CSS, Bootstrap, and JavaScript. This individual project is hosted on GitHub to showcase my development skills and ability to replicate a real-world website.",
    TechStack: [html, css, javascript, Bootsrap],
    Area: "Area of responsibility :- An individual project",
  },
];

const Project = () => {
  return (
    <section
      name="Project"
      className="w-full bg-gradient-to-r from-[#f0f4ff] to-[#ffffff]"
      id="projects"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full p-10 md:px-0">
        <div className="mb-10 text-left">
          <h2 className="text-4xl font-bold border-b-4 border-[#75bcd6] inline-block">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4">
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
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col transition-transform transform hover:scale-105"
              >
                <img
                  src={src}
                  alt={`${websiteName} screenshot`}
                  className="rounded-md w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{websiteName}</h2>
                <p className="text-md text-gray-700 h-20 overflow-x-auto hidden md:block">
                  {des}
                </p>
                <div className="flex justify-start gap-2 mt-3 flex-wrap">
                  {TechStack.map((tech, i) => (
                    <img
                      key={i}
                      src={tech}
                      alt="Tech stack icon"
                      width={40}
                      className="duration-200 hover:scale-110"
                    />
                  ))}
                </div>
                <h3 className="text-sm text-gray-500 mt-2">{Area}</h3>
                <div className="flex justify-between mt-4">
                  <a
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition flex items-center"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>
                  <a
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-400 transition flex items-center"
                    href={netlify}
                    target="_blank"
                    rel="noreferrer"
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
