const About = () => {
  return (
    <section
      name="About"
      className="w-full bg-gradient-to-r from-[#f0f4ff] to-[#ffffff]"
      id="about"
    >
      <div className="container mx-auto flex flex-col w-full p-10">
        <header className="pb-10 text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="border-b-4 border-[#75bcd6]">About Me</span>
          </h2>
        </header>

        <div className="space-y-6">
          <ul className="list-disc text-lg text-gray-700 space-y-4 font-medium pl-5 md:pl-8">
            <li>
              Hi there! I’m <strong>Saurav Kumar</strong>, a passionate
              Frontend-Focused Full Stack Developer with over{" "}
              <strong>2 years of experience</strong> in crafting innovative web
              applications.
            </li>
            <li>
              I've had the opportunity to work with respected organizations like{" "}
              <strong>Nuveb</strong> and <strong>Masai School</strong>, where I
              honed my full-stack development skills.
            </li>
            <li>
              My expertise lies in leveraging modern technologies, particularly{" "}
              <strong>JavaScript frameworks</strong> such as{" "}
              <strong>React.js</strong> and <strong>Next.js</strong>, alongside{" "}
              <strong>TypeScript</strong> to build responsive and engaging user
              interfaces.
            </li>
            <li>
              I also possess hands-on experience with backend technologies,
              including <strong>Node.js</strong> and <strong>MongoDB</strong>,
              enabling me to contribute effectively across the entire
              development spectrum.
            </li>
            <li>
              Committed to continuous learning, I actively pursue opportunities
              to expand my skill set while staying updated on the latest
              industry trends and best practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
