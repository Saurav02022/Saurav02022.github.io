import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GitHubCalendarComponent = () => {
  return (
    <section
      name="GitHub Statistics"
      className="w-full bg-gradient-to-r from-[#f0f4ff] to-[#ffffff]"
      id="github-statistics"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full p-10 md:px-0">
        <div className="mb-10 text-left">
          <h2 className="text-4xl font-bold text-[#2b2b2b] border-b-4 border-[#75bcd6] inline-block pb-2">
            GitHub Statistics
          </h2>
        </div>

        <div className="react-activity-calendar mb-10">
          <GitHubCalendar
            style={{ margin: "auto" }}
            username="Saurav02022"
            blockSize={15}
            fontSize={15}
            color={"#75bcd6"}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-10">
          {[
            {
              id: "github-top-langs",
              alt: "Top Languages",
              src: "https://github-readme-stats.vercel.app/api/top-langs/?username=Saurav02022&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117",
              tip: "Top Languages Used",
            },
            {
              id: "github-streak-stats",
              alt: "Streak Stats",
              src: "https://github-readme-streak-stats.herokuapp.com?user=Saurav02022&hide_border=true",
              tip: "Current Streak",
            },
            {
              id: "github-stats-card",
              alt: "GitHub Stats",
              src: "https://github-readme-stats.vercel.app/api?username=Saurav02022&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117",
              tip: "Overall GitHub Stats",
            },
          ].map(({ id, alt, src, tip }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-5 transition-transform duration-200 hover:scale-105 hover:shadow-xl border border-[#75bcd6]"
              role="img"
              aria-label={tip}
            >
              <img
                id={id}
                alt={alt}
                src={src}
                className="rounded-lg shadow-md mb-2"
                data-tip={tip}
                data-for={id}
              />
              <ReactTooltip id={id} place="top" effect="solid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubCalendarComponent;
