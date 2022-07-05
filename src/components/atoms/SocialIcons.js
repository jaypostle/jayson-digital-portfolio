import { FaSpotify, FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialIcons() {
  return (
    <article className='social-icons-wrapper'>
      {/* <h4>Social</h4> */}
      <a href="https://open.spotify.com/user/22bojkrubn2anhr4lpukyflza?si=3b880c45500a4ffc" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
      <a href="https://github.com/jaypostle/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/jaysonpostle/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </article>
  )
}
export default SocialIcons