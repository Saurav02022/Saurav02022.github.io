import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full font-Big">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full md:flex-row px-4">
        <div className="flex flex-col justify-center h-full  w-3/6 ">
          <h2 className="sm: text-5xl font-bold text-black font-Big sm: mt-72  lg:text-7xl md:mt-5">
            I am <span>Saurav Kumar</span>
          </h2>
          <p className="text-black py-4 max-w-md">
            <span className="text-5xl font-Big"> I am a</span>
            <span className="text-red-600 text-4xl font-Big">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "Mern Stack Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-[#75bcd6] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-3/6">
          <img
            src={
              "https://media-exp1.licdn.com/dms/image/D4D03AQGpp6MY_-YX6Q/profile-displayphoto-shrink_400_400/0/1670064318301?e=1675296000&v=beta&t=dy8bp5-DXG1kLey_JEMk9OzZN-BvYSndFKbbR1CWeqY"
            }
            alt="my profile"
            className="rounded-2xl mx-auto md: mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
