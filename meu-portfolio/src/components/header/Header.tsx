import "./Header.scss";

const Header = () => {
  console.log("Header carregado!");

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
