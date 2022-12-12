import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GitHubCalendarComponent = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="flex flex-col justify-center  justify-items-stretch h-full w-full mx-auto mt-5 ">
      <p className="text-center text-4xl pb-2 underline font-bold ">GitHub Statistics</p>
      <div>
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Saurav02022"
          transformData={selectLastHalfYear}
          blockSize={15}
          fontSize={15}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="flex flex-col justify-center item-center mx-auto mt-10">
        <div></div>
        <div>
          <p>
            <a href="https://github.com/Saurav02022/github-readme-stats">
              <img
                alt="Saurav02022 Top Languages"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saurav02022&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
              />
            </a>
          </p>
        </div>

        <div>
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
