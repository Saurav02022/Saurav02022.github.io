import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import GitHubCalendarComponent from "./components/GithubCalender";
import Info from "./components/Info";

function App() {
  return (
    <div style={{ backgroundColor: "#CDF0EA" }}>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <GitHubCalendarComponent />
      <Contact />
      <Info />
     <SocialLinks/>
    </div>
  );
}

export default App;
