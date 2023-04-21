const About = () => {
  return (
    <div
      name="About"
      className="w-full mt-0 md:mt-5 px-8 about section"
      id="about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#75bcd6]">
            About me
          </p>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row 2xl:flex-row">
          <img
            src="https://www.techbabble.zone/content/images/2021/07/46207-programmer-1.gif"
            alt="programmer-1.gif"
            className="md:h-96 max-w-3xl"
          />
          <div>
            <ul
              style={{
                listStyleType: "disc",
                fontSize: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              id="user-detail-intro"
            >
              <li>
                Hi, I'm Saurav Kumar, a passionate Full Stack Web Developer with
                a talent for crafting dynamic and responsive web applications
                using MERN Stack.
              </li>
              <li>
                With exceptional administrative competencies and a keen eye for
                detail, I possess well-honed communication skills and a knack
                for writing efficient code.
              </li>
              <li>
                I've successfully completed numerous web-based projects and
                developed a deep understanding of teamwork, leadership, and
                communication.
              </li>
              <li>
                After undergoing rigorous training and development, I'm eagerly
                seeking a challenging opportunity to further develop my skills
                and grow as a professional.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
