import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import './styles/Navbar.css';

const Socials = () => (
  <>
    <div className="my-socials">
      <a
        href="https://github.com/Bludidi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaIcons.FaGithub size={25} className="my-social-icons" />
      </a>
      <a
        href="https://twitter.com/@BB_Ludidi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaIcons.FaTwitter size={25} className="my-social-icons" />
      </a>
      <a
        href="https://linkedin.com/in/brian-ludidi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <AiIcons.AiOutlineLinkedin size={25} className="my-social-icons" />
      </a>
      <a
        href="mailto:bludidi5@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <SiIcons.SiGmail size={25} className="my-social-icons" />
      </a>
    </div>
  </>
);

export default Socials;
