import Navigation from './Navigation.js';
import SocialIcons from './atoms/SocialIcons';
import jayson from '../assets/images/jayson.png';


function Header() {
  return (

   <header>
    
      <img src={jayson} alt="jayson-logo" />
      <h4>{document.title}</h4>
    

    <Navigation />
    <SocialIcons />
   </header>
  )
}
export default Header