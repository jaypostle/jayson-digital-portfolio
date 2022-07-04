// import mountains from '../assets/images/mountains.png';
import portfolioData from '../assets/data/portfolioData';

function PagePortfolio() {
  return (
    <>
      <section>
        <h1>Portfolio</h1>
        <h4>Here are my great portfolio pieces.</h4>
      </section>
      <section>
        <nav>
          <ul>
            <li>All Projects</li>
            <li>All Development</li>
            <li>All Design</li>
          </ul>
        </nav>
        <section className='projects-wrapper'>
          {
            portfolioData && portfolioData.map((project) => 
                <article key={project.id}>
                  <section>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <footer>
                      {
                        project.techUsed.map((tech) => <span>{tech}</span> )
                      }
                     </footer>
                    <a href="/portfolio">View Portfolio Piece</a>
                  </section>
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