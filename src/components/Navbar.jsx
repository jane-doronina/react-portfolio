import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white py-6 px-6 md:px-10">
      <div className="container flex justify-between items-center">
        <h3 className="font-jost font-bold text-sm md:text-lg">
          Zhanna Doronina
        </h3>
        <div className="flex md:w-[30%] justify-between">
          <ul className="list-none hidden md:flex justify-end items-center">
            <li className="mr-2 md:mr-6 last:mr-0 nav-link">
              <a href="#projects" className="scroll-smooth">
                Projects
              </a>
            </li>
            <li className="mr-2 md:mr-6 last:mr-0 nav-link">
              <a href="#about" className="scroll-smooth">
                About
              </a>
            </li>
            <li className="mr-2 md:mr-6 last:mr-0 nav-link">
              <a href="#contact-me" className="scroll-smooth">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex ml-2 justify-end">
            <a href="mailto:work@zhanna-doronina.me" className="icon-link">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 md:mr-5 icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/zhanna-doronina"
              className="icon-link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="mr-0 md:mr-5 icon"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
