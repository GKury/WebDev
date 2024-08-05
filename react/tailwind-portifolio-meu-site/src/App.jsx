import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import About from "./components/About";
import Extracurriculars from "./components/Extracurriculars";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App =() => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Extracurriculars />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
