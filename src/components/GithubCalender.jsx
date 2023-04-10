import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GitHubCalendarComponent = () => {
  return (
    <div className="flex flex-col justify-center  justify-items-stretch h-full w-full mx-auto mt-5">
      <p className="text-center text-4xl pb-2 underline font-bold ">
        GitHub Statistics
      </p>
      <div>
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Saurav02022"
          blockSize={15}
          fontSize={15}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="flex flex-col justify-center item-center mx-auto mt-10">
        <div
          style={{
            width: "100%",
          }}
        >
          <p>
            <a href="https://github.com/Saurav02022/github-readme-stats">
              <img
                alt="Saurav02022 Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=Saurav02022&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitHubCalendarComponent;
