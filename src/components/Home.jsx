import React from "react";

const downloadResume = async () => {
  window.open(
    "https://drive.google.com/file/d/1EXTQAFDi1i8VXpzl9tlAEFsJPzo2V23r/view"
  );
};

const Home = () => {
  return (
    <div name="Home" className="sm:h-screen w-full pt-24">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <h2 className="text-2xl sm:text-5xl font-bold tracking-wide">
            I am a Full Stack Web Developer
          </h2>
          <p className="py-4 max-w-md tracking-wide text-lg ">
            Currently, I like to work on web application using these
            technologies like JavaScript,React,Redux and Next Js. I like to
            explore new technologies and leverage them to solve real-life
            problems.
          </p>
          <button className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-cyan-500 cursor-pointer">
            <a
              href="/Saurav-Kumar-Resume.pdf"
              download={true}
              target={"_blank"}
              rel="noreferrer"
              onClick={downloadResume}
            >
              Resume
            </a>
          </button>
        </div>

        <div className="mb-10 sm:mb-0 w-3/6">
          <img
            src={"/profife_pic.png"}
            alt="my-profile"
            className="rounded-2xl mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
