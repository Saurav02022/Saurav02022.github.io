import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import GitHubCalendarComponent from "./components/GithubCalender";
import Info from "./components/Contact";
import ReactGA from "react-ga4";
import { useEffect } from "react";

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
