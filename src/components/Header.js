import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faIdCardClip,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Header = ({ setPage, open, setOpen }) => {
  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <span className="header-logo" onClick={() => setPage(0)}>
            Haeparic
          </span>
          <ul className="gnb">
            <li onClick={() => setPage(0)}>
              <span>Home</span>
            </li>
            <li onClick={() => setPage(1)}>
              <span>Profile</span>
            </li>
            <li onClick={() => setPage(2)}>
              <span>Portfolio</span>
            </li>
            <li onClick={() => setPage(3)}>
              <span>More</span>
            </li>
          </ul>
          <div className="contact">
            <a
              href="https://github.com/Haeparic"
              target="_blank"
              alt="github"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:v567v202@gmail.com"
              target="_blank"
              alt="email"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a
              href="https://gregarious-taxi-457.notion.site/6af78c7cb33448e58a98bd33cc6463dc"
              target="_blank"
              alt="portfolio_notion"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faIdCardClip} />
            </a>
          </div>
          <span
            className="mobile-bt"
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
