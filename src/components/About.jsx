const About = () => {
  return (
    <section
      name="About"
      className="w-full bg-gradient-to-r from-[#f0f4ff] to-[#ffffff]"
      id="about"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col w-full p-10 md:px-0">
        <header className="pb-5">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="border-b-4 border-[#75bcd6]">About Me</span>
          </h2>
        </header>

        <div className="mt-6 space-y-4">
          <ul className="list-disc text-lg text-gray-700 space-y-4 font-medium pl-5">
            <li>
              Hello! I’m <strong>Saurav Kumar</strong>, a dedicated
              Frontend-Focused Full Stack Developer with over{" "}
              <strong>2 years of experience</strong> in creating innovative web
              applications.
            </li>
            <li>
              I have had the privilege of working with esteemed organizations
              like <strong>Nuveb</strong> and <strong>Masai School</strong>,
              where I honed my skills in full-stack development.
            </li>
            <li>
              My expertise lies in leveraging modern technologies, especially{" "}
              <strong>JavaScript frameworks</strong> such as{" "}
              <strong>React.js</strong> and <strong>Next.js</strong>, along with{" "}
              <strong>TypeScript</strong>, to design responsive and interactive
              user interfaces.
            </li>
            <li>
              I also bring hands-on experience with backend technologies
              including <strong>Node.js</strong> and <strong>MongoDB</strong>,
              allowing me to work effectively across the entire development
              stack.
            </li>
            <li>
              Passionate about continuous improvement, I actively seek
              opportunities to expand my knowledge and stay abreast of the
              latest industry trends and best practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
