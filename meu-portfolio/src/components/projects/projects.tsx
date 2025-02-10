import "./Projects.scss";

const projects = [
  {
    id: 1,
    title: "TibiaToolKit",
    description: "Aplicação de chat em tempo real com autenticação via Github.",
    image: "/images/chat-app.png",
    repo: "#",
    demo: "#",
    techs: ["Python", "TypeScript", "Supabase", "Zustand", "Tailwind CSS"],
  },
  // Adicione mais projetos aqui conforme necessário
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
                <a href={project.repo} target="_blank" rel="noopener noreferrer">🔗 Repositório</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">🔗 Demo</a>
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