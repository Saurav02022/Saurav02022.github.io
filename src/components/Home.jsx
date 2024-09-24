import ReactGA from "react-ga4";

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
      className="min-h-screen w-full bg-gradient-to-r from-[#f0f4ff] to-[#ffffff] flex items-center justify-center pt-20"
      id="home"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 p-10">
        {/* Text Section */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
            I’m <span className="text-[#75bcd6]">Saurav Kumar</span>,
            <br /> a Passionate Frontend-Focused Full Stack Developer.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#333] leading-relaxed max-w-lg mx-auto md:mx-0">
            With over 2 years of experience, I specialise in frontend
            development using React.js, Next.js, and TypeScript. I create
            intuitive and responsive user interfaces while also having hands-on
            experience with backend technologies like Node.js and MongoDB,
            allowing me to deliver cohesive full-stack solutions.
          </p>
          <button
            className="bg-[#75bcd6] text-white hover:bg-[#5aa7c4] transition-all duration-300 w-fit px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring focus:ring-[#5aa7c4] focus:outline-none mx-auto md:mx-0"
            onClick={() => {
              downloadResume();
              ReactGA.event({
                category: "Home",
                action: "Clicked on the resume button.",
              });
            }}
            aria-label="Download Resume"
          >
            <span className="text-lg sm:text-xl font-semibold">
              Download My Resume
            </span>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-3/4 md:w-full lg:w-3/4">
            <img
              src="/profile_pic.png"
              alt="Portrait of Saurav Kumar"
              className="rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
