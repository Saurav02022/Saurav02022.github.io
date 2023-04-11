import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import GitHubCalendarComponent from "./components/GithubCalender";
import Info from "./components/Info";
import { BsHeartFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <GitHubCalendarComponent />
      <Info />
      <div
        style={{
          background: "#75bcd6",
          padding: "15px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            display: "flex",
            gap: "2px",
          }}
        >
          Designed and Build with {<BsHeartFill color="red" size={30} />} by
          Saurav Kumar 2023. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default App;
