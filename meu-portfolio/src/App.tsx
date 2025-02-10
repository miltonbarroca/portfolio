import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SidebarLeft from "./components/sidebarleft/SidebarLeft";
import SidebarRight from "./components/sidebarright/SidebarRight";
import About from "./components/about/About";
import Projects from "./components/projects/projects";
import "./styles/Main.scss";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <SidebarLeft />
      <SidebarRight />
      <About />
      <Projects />
    </>
  );
}

export default App;