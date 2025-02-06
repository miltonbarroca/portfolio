import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import "./SidebarLeft.scss";

const SidebarLeft = () => {
  return (
    <aside className="sidebar-left">
      <ul className="social-links">
        <li>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} color="white" /> {/* Ícone do GitHub */}
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} color="white" /> {/* Ícone do LinkedIn */}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarLeft;