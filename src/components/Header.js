import Navigation from './Navigation.js';
import SocialIcons from './atoms/SocialIcons';


function Header() {
  return (

   <header>
    <h1>Jayson Logo</h1>
    <Navigation />
    <SocialIcons />
    {document.title}
   </header>
  )
}
export default Header