import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-black sm:mt-32 lg:-mt-36 md:-mt-36">
      <div className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#75bcd6] font-Big">
            About
          </p>
        </div>
        <p className="text-xl mt-5 font-Big">
          * Hello! My name is Saurav Kumar and I enjoy creating things that live
          on the internet. <br />
          <br />* I'm a passionate Developer, with strong administrative and
          communication skills, good attention to detail and the ability to
          write efficient code using MERN Stack.
        </p>
        <br />
        <p className="text-xl font-Big">
          * My interest in web development started back last year when I was
          trying to edit things on the web, that taught me a lot about HTML&
          CSS. <br />
          <br />* Fast Forwarding to today, I built a number of web applications
          and major projects. Learned a great deal about teamwork, leadership,
          and communication. After months of rigorous training, here l am
          looking for an opportunity as a full stack web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
