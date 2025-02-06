import "./SidebarLeft.scss";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

const SidebarLeft = () => {
  return (
    <aside className="sidebar-left">
      <ul className="social-links">
        <li>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarLeft;
