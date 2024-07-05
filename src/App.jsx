import About from "./components/About";
import Contact from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
