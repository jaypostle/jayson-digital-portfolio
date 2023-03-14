import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

function Navigation() {
  return (
    <nav className="primary-nav">
      <ul>
        <li>
          <span className="gold-nav-hover-span">hello</span>
          <NavLink to="/">
            <FaHome />
            Home
          </NavLink>
        </li>
        <li>
          <span className="gold-nav-hover-span">hello</span>
          <NavLink to="/portfolio">
            <FaLayerGroup />
            Portfolio
          </NavLink>
        </li>
        <li>
          <span className="gold-nav-hover-span">hello</span>
          <NavLink to="/about">
            <FaUserAstronaut />
            About
          </NavLink>
        </li>
        <li>
          <span className="gold-nav-hover-span">hello</span>
          <NavLink to="/techstack">
            <FaCubes />
            Tech Stack
          </NavLink>
        </li>
        <li>
          <span className="gold-nav-hover-span">hello</span>
          <NavLink to="/contact">
            <FaMobileAlt />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
