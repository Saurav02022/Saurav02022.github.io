const Home = () => {
  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/1XDP7rusRRjdXCl0pDYVi8jRVI-5J3G7s/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      name="Home"
      className="sm:h-screen w-full pt-20 md:pt-0 bg-gradient-to-r from-[#f0f4ff] to-[#ffffff] relative"
      id="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full space-y-12 md:space-y-0 md:space-x-12 p-10 md:px-0">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-snug">
            I am Saurav Kumar,
            <br /> a Frontend-Focused Full Stack Developer.
          </h2>
          <p className="text-lg md:text-xl text-[#333] leading-relaxed md:max-w-lg">
            With over 2 years of experience, I specialize in frontend
            development using React.js, Next.js, and TypeScript. I create
            intuitive, responsive user interfaces and have hands-on experience
            with backend technologies like Node.js and MongoDB. I’m passionate
            about scalable web applications and continuous learning.
          </p>
          <button
            className="bg-[#75bcd6] text-white hover:bg-[#5aa7c4] transition-all duration-300 w-fit px-8 py-4 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 mx-auto md:mx-0"
            onClick={downloadResume}
          >
            <span className="text-xl font-semibold">Download Resume</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/profile_pic.png"
            alt="Portrait of Saurav Kumar"
            className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 w-3/4 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
