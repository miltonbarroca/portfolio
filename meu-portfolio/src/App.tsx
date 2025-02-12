import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import SidebarLeft from "./components/sidebarleft/SidebarLeft";
import SidebarRight from "./components/sidebarright/SidebarRight";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./styles/Main.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SidebarLeft />
      <SidebarRight />
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"></div>
    </>
  );
}

export default App;