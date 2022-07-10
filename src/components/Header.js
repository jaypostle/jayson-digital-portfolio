import Navigation from './Navigation.js';
import SocialIcons from './atoms/SocialIcons';
import jayson from '../assets/images/jayson.png';
import { Link } from 'react-router-dom';


function Header() {
  return (

   <header>
                        
      <div className='logo-wrapper'>
        <Link to="/"><img src={jayson} alt="jayson-logo" /></Link>
        {/* <h4>{document.title}</h4> */}
        {/* <h4></h4> */}
      </div>
    

    <Navigation />
    <SocialIcons />
   </header>
  )
}
export default Header