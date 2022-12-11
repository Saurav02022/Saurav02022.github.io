import React from "react";

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
        </div>

        <div className="mb-10 sm:mb-0 w-3/6">
          <img
            src={
              "https://media-exp1.licdn.com/dms/image/D4D03AQGpp6MY_-YX6Q/profile-displayphoto-shrink_400_400/0/1670064318301?e=1675900800&v=beta&t=rSeR8kme-sTyUp-c6K-jePqDV4h5qg7iv0YNlEog1o0"
            }
            alt="my-profile"
            className="rounded-2xl mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
