import React from "react";
import Header from "./components/Header";
import About from "./components/About"; // Import About section
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
//import ThreeDScene from "./components/ThreeDScene";
import './styles/App.css';  // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <About />        {/* Include the About section */}

      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
