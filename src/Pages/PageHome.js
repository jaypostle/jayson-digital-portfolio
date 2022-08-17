// import Button from '../components/atoms/Button';
// import mountains from '../assets/images/mountains.png';
// import jaysonphotomain from '../assets/images/jaysonphotomain.png';

import jaysonphotomainhighres2 from '../assets/images/jaysonphotomainhighres2.jpeg';
import moveoHomeProject from '../assets/images/Moveo/moveo-home-project.png';
import vulcanHomeProject from '../assets/images/Vulcan/vulcan-home-project.png';
import jsGameHomeProject from '../assets/images/JaysonSays/js-home-project.png';

import portfolioData from '../assets/data/portfolioData';
import useDocumentTitle from '../utilities/documentTitle';
import Accordion from '../components/atoms/SimpleAccordion';
import techStackData from '../assets/data/techStack';
import { Link } from 'react-router-dom';




function PageHome() {
  useDocumentTitle('Home')

  return (
    <>
      {/* HERO */}
      <section className='home-hero-section'>
        <div id="home-content-wrapper">
        <h1>Hello! I'm Ja<span className='gold'>y</span>son.</h1>
        <h4>I am a Front-end Web Developer striving to get 1% better everyday! </h4>
        <p>With backgrounds in UX design, behavioural economics and psychology, digital marketing, and entrepreneurship, I build complex websites and front-end applications that are detailed and exceptionally usable.</p>
        <a href="/portfolio" className='primary-cta'>View My Work</a>
        </div>
        <img src={jaysonphotomainhighres2} alt="Jayson Photo" className='home-jayson-photo' />
      </section>

      {/* ABOUT ME */}
      <section className="home-about-me">
        <h2>About Me</h2>
        <article>
          <p>I love soccer, muay thai, spikeball, oil painting, nerding out over history documentaries, hiking mountains and coasts, cooking, and salsa dancing!</p>
          <p>In my free time, you’ll probably find me cooking some new dish, getting lost in a good book or podcast, or reviewing my goals for the year. </p>
          <p>My background prior to Design and Development is in ecommerce and service digital marketing, running my own wedding DJ business.</p>
        </article>
        <div className="accordion-wrapper-main">
          <Accordion header={'Tools & Tech Stack'} data={''}>      
            <h4>Front-End Developer with UX and Marketing Experience </h4>
            <p>Websites and web apps built in React and Wordpress. </p>
           
            {       
            techStackData && techStackData.engineering.map((skill) =>  <span className='pill'>{skill.skill}</span>)
            } 
            {       
        techStackData && techStackData.design.map((skill) =>  <span className='pill'>{skill.skill}</span>)
            }      
            {       
            techStackData && techStackData.marketing.map((skill) =>  <span className='pill'>{skill.skill}</span>)
            }     
          </Accordion>
          <Accordion header={'Passion Projects'} data={''}>
            <h4>UX Designer Bookclub</h4>
            <p>I recently started a bookclub inside the <a className="text-link" href="https://www.designerslack.community/community/vancouver-design-check-in"  target="_blank" rel="noopener noreferrer">Vancouver Design Check-in</a> Slack community with my friend, Marisa Chan. We just completed Think Again by Adam Grant and are selecting our next book!</p>
            <h4>Impact 2022</h4>
            <strong>Reflecting on 2021 and setting actionable goals for 2022.</strong>
            <p>I created a goals and reflection worksheet to help set actionable goals for the year and learn lessons from the past. Originally, I made it for myself and my friend but I ended up publishing it <a className="text-link" href="https://jaysonpostle.com/impact-2022"  target="_blank" rel="noopener noreferrer">here</a> and shared it with my local community.</p>
          </Accordion>
        </div>
        <a href="/about" className='secondary-cta'>Learn More About Me</a>
      </section>

      {/* Highlight Work */}
      <section className="home-highlight-work">
        <article>
          <h2>Highlight Work</h2>
          <p>I love soccer, muay thai, spikeball, oil painting, nerding out over history.</p>
          <a href="/portfolio" className='secondary-cta'>See All Work</a>
        </article>
        <section className='highlight-work-wrapper'>
          {
            
            
            portfolioData && portfolioData.map((project) => 
                <article key={project.id}>
                  <div className='home-project-content-wrapper project-card'>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <footer>
                      {
                        project.techUsed.map((tech) => <span className='pill'>{tech}</span> )
                      }
                     </footer>
                    {/* <a href="/portfolio" className='secondary-cta'>View Portfolio Piece</a> */}
                    <Link to={`/portfolio/${project.title.toLowerCase().split(" ").join("-")}`}>View Project {'>'}</Link>
                  </div>
                  {/* allocate project photos */}
                  {(project.id === 1) &&
                  <img className="home-project-photo" src={moveoHomeProject} alt={project.title} />
                  }
                  {(project.id === 2) &&
                  <img className="home-project-photo" src={moveoHomeProject} alt={project.title} />
                  }
                  {(project.id === 3) &&
                  <img className="home-project-photo" src={vulcanHomeProject} alt={project.title} />
                  }
                  {(project.id === 4) &&
                  <img className="home-project-photo" src={jsGameHomeProject} alt={project.title} />
                  }
                </article>
            )
          }
          
         

        
        </section>
      </section>

      {/* Testimonial */}
      <section className="home-testimonial">
        <figure class="quote">
          <span className='testimonial-quotations quotations-left'>“</span>
          <blockquote>
          I’ve known Jayson since March 2012. He’s worked for me as an event designer and marketer with notable events such as Diner en Blanc (6 years), Bayview Gala, and Our Place Hungry Hearts. In that time, I know him to be a self-starter, receptive to feedback, a creative problem solver, and highly motivated.
          </blockquote>
          <figcaption>
            &mdash; <strong>Aidan Henry</strong> | <cite>Brink Events</cite>
          </figcaption>
          <span className='testimonial-quotations quotations-right'>“</span>
        </figure>
        {/* <a href="/testimonials" className='secondary-cta'>View More Testimonials</a> */}
      </section>

      {/* Let's Chat */}
      <section className="home-contact">
        <h2>Curious? Let's Talk</h2>
        <p>I’m always curious about new conversations and opportunities. I’m just as excited to talk marketing & design as I am sports, hiking, and good food!</p>
        <a href="/contact" className='primary-cta'>Get in touch</a>

      </section>
      </>
  )
}
export default PageHome