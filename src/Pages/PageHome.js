import Button from '../components/atoms/Button';
import mountains from '../assets/images/mountains.png';

function PageHome() {
  return (
    <div>
      {/* HERO */}
      <section className='home-hero-section'>
        <h1>Hello! I'm Jayson.</h1>
        <h4>I am a UX Engineer (UX Design + Front-End Development) striving to get 1% better everyday! </h4>
        <p>With backgrounds in behavioural economics and psychology, digital marketing, and entrepreneurship, I build complex websites and front-end applications that are detailed and exceptionally usable.</p>
        <Button />
        <img src={mountains} alt="moutains" />
      </section>

      {/* ABOUT ME */}
      <section className="home-about-me">
        <h2>About Me</h2>
        <article>
          <p>I love soccer, muay thai, spikeball, oil painting, nerding out over history documentaries, hiking mountains and coasts, cooking, and salsa dancing!</p>
          <p>In my free time, you’ll probably find me cooking some new dish, getting lost in a good book or podcast, or reviewing my goals for the year. </p>
          <p>My background prior to Design and Development is in ecommerce and service digital marketing, running my own wedding DJ business.</p>
        </article>
        <div className="accordion-wrapper">
          <div>Tools & Tech Stack</div>
          <div>Passion Projects</div>
        </div>
        <a href="/about">Learn More About Me</a>
      </section>

      {/* Highlight Work */}
      <section className="home-highlight-work">
        <article>
          <p>I love soccer, muay thai, spikeball, oil painting, nerding out over history.</p>
          <a href="/portfolio">See All Work</a>
        </article>
        <section className='highlight-work-wrapper'>
          <article>
            <section>
              <h3>Moveo Movie Database</h3>
              <p>I love soccer, muay thai, spikeball, oil painting, nerding out over history.</p>
              <footer>
                <span>React.js</span> 
                <span>Node.js</span>
                <span>WordPress</span>
              </footer>
              <a href="/portfolio">View Portfolio Piece</a>
            </section>
            <img src={mountains} alt="moutains" />
          </article>
         

          <article>Article 2</article>
          <article> Article 3</article>
        </section>
      </section>

      {/* Testimonial */}
      <section className="home-testimonial">
        <figure class="quote">
          <blockquote>
          I’ve known Jayson since March 2012. He’s worked for me as an event designer and marketer with notable events such as Diner en Blanc (6 years), Bayview Gala, and Our Place Hungry Hearts. In that time, I know him to be a self-starter, receptive to feedback, a creative problem solver, and highly motivated.
          </blockquote>
          <figcaption>
            &mdash; Aidan Henry, <cite>Brink Events</cite>
          </figcaption>
        </figure>
        <a href="/testimonials">View More Testimonials</a>
      </section>

      {/* Let's Chat */}
      <section className="home-contact">
        <h2>Curious? Let's Talk</h2>
        <p>I’m always curious about new conversations and opportunities. I’m just as excited to talk marketing & design as I am sports, hiking, and good food!</p>
        <a href="/contact">Get in touch</a>

      </section>
    </div>
  )
}
export default PageHome