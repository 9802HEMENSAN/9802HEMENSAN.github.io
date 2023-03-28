import Navbar  from "./Components/Navbar/Navbar";
import   Hero  from "./DiffrentSection/Hero/Hero";
import   Projects  from "./DiffrentSection/Projects/Projects";
import Calendar from "./DiffrentSection/Github/Calandar";
import Skills from "./DiffrentSection/skills/Skills"; 
import About from "./DiffrentSection/About/About";
import ContactSection from "./DiffrentSection/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Calendar />
      <ContactSection />
   
   
    </div>
  );
}

export default App;
