import { NavLink } from 'react-router-dom';


import { FaHome } from 'react-icons/fa';
import { FaUserAstronaut } from 'react-icons/fa';
import { FaLayerGroup } from 'react-icons/fa';
import { FaCubes } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';

function Navigation() {
  return (
        <nav>
            <ul>
                <li>
                    <FaHome /><NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <FaUserAstronaut /><NavLink to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                    <FaLayerGroup /><NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <FaCubes /><NavLink to='/techstack'>Tech Stack</NavLink>
                </li>
                <li>
                    <FaMobileAlt /><NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
        
    )
}
export default Navigation