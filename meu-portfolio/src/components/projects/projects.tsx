import { FaGithub } from "react-icons/fa";
import "./Projects.scss";

const projects = [
  {
    id: 1,
    title: "TibiaToolKit",
    description: "Coleção de scripts e ferramentas em Python para automação no jogo Tibia. Desenvolvido para otimizar tarefas repetitivas e melhorar a eficiência no jogo.",
    image: "ttk.png",
    repo: "https://github.com/miltonbarroca/Tibia-Toolkit",
    techs: ["Python", "Pyautogui", "Pynput", "Opencv-python", "Numpy","Pywin32"],
  },
  //mais projetos aqui
];

const Projects = () => {
    return (
      <section className="projects">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} color="white" />
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="project-techs">
                  {project.techs.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };  

export default Projects;