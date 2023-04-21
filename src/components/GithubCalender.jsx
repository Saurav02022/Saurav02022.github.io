import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GitHubCalendarComponent = () => {
  return (
    <div className="flex flex-col justify-center  justify-items-stretch h-full w-full mx-auto mt-5">
      <p className="text-center text-4xl pb-2 underline font-bold ">
        GitHub Statistics
      </p>
      <div className="react-activity-calendar">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Saurav02022"
          blockSize={15}
          fontSize={15}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="flex flex-col mx-auto mt-10 items-center">
        <div>
          <img
            id="github-top-langs"
            alt="Saurav Kumar's Top Languages"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saurav02022&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
          />
        </div>
        <div>
          <img
            id="github-streak-stats"
            alt="Saurav Kumar's Top Languages"
            src="https://github-readme-streak-stats.herokuapp.com?user=Saurav02022&hide_border=true"
          />
        </div>
        <div>
          <img
            id="github-stats-card"
            alt="Saurav02022 Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=Saurav02022&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubCalendarComponent;
