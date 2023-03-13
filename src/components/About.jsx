import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full mt-0 md:mt-5 px-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#75bcd6]">
            About me
          </p>
        </div>
        <p className="tracking-wide text-lg ">
          Hello ! My name is Saurav Kumar and I enjoy creating things that live
          on the internet. <br />
          I'm a passionate Developer, with strong administrative and
          communication skills, good attention to detail and the ability to
          write efficient code using MERN Stack.
          <br />
          Fast Forwarding to today, I built a number of web applications and
          major projects. Learned a great deal about teamwork, leadership, and
          communication. After months of rigorous training, here l am looking
          for an opportunity as a Full Stack Web Developer.
        </p>
      </div>
    </div>
  );
};

export default About;
