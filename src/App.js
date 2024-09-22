import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import GitHubCalendarComponent from "./components/GithubCalender";
import Info from "./components/Contact";

function App() {
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
