// import mountains from '../assets/images/mountains.png';
import portfolioData from '../assets/data/portfolioData';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../utilities/documentTitle';


function PagePortfolio() {
  useDocumentTitle('Portfolio')

  return (
    <>
      <section>
        <h1>Portfolio</h1>
        <h4>Here are my great portfolio pieces.</h4>
      </section>
      <section>
        <nav className='portfolio-filter-nav'>
          <ul>
            <li><span className='pill'>All Projects</span></li>
            <li><span className='pill'>All Development</span></li>
            <li><span className='pill'>All Design</span></li>
          </ul>
        </nav>
        <section className='projects-wrapper'>
          {
            portfolioData && portfolioData.map((project) => 
                <article key={project.id} className="project-card">
                  <div className='project-content-wrapper'>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <article className='tech-pill-wrapper'>
                      {
                        project.techUsed.map((tech) => <span key={tech}>{tech}</span> )
                      }
                     </article>
                  </div>
                    {/* <a href="/portfolio">View Portfolio Piece</a> */}
                    <Link to={`/portfolio/${project.title.toLowerCase().split(" ").join("-")}`}>View Project {'>'}</Link>
                  
                  {/* <img src={mountains} alt="mountains" /> */}
                </article>
            )
          }
        </section>
      </section>

    </>
  )
}
export default PagePortfolio