import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
            <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            <button className="nav-button">Botão</button>
        </nav>
    </header>
  );
};

export default Header;
