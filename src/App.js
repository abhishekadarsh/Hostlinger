import "./styles.css";
// import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";
import ProjectOne from "./routes/ProjectOne";
import ProjectTwo from "./routes/ProjectTwo";
import ProjectThree from "./routes/ProjectThree";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectOne" element={<ProjectOne/>} />
        <Route path="/projectTwo" element={<ProjectTwo/>} />
        <Route path="/projectThree" element={<ProjectThree/>} />
      </Routes>

      {/* <Navbar /> */}
      {/* <Home />
      <Contact/>
      <Project/>
      <About/> */}
    </div>
  );
}
