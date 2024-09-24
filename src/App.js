import About from "./components/About";
import Info from "./components/Contact";
import GitHubCalendarComponent from "./components/GithubCalender";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";

import { useEffect } from "react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-2BR0PH5SXP");

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "Portfolio visit",
      page: "/",
    });
  }, []);
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <GitHubCalendarComponent />
      <Info />
    </>
  );
}

export default App;
