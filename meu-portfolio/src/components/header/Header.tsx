import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
            <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            <button className="nav-button">Botão</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
