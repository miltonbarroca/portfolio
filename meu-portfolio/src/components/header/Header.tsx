import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
            <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#experiencia">Experiências</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
