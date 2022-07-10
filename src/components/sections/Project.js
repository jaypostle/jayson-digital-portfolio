import Accordion from '../atoms/SimpleAccordion';
import useDocumentTitle from '../../utilities/documentTitle';

function PageSinglePortfolio({props, requirements, children}) {
//   useDocumentTitle(`Portfolio ${props.title}`)

console.log(props);

  return (
    <>
    <section className='project-hero-wrapper'>
        <article>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
        </article>
        <article className='project-hero-wrapper'>
            {children}
        </article>
        <article>
            <h3>Tech Used</h3>
            {props.techUsed.map((tech) => <span key={tech} className='pill'>{tech}</span> )}
        </article>
        <article>
        <h2>Overview</h2>
        <p>{props.overview}</p>
        </article>
        
    </section>
    {/* <section className='project-accordions-wrapper'>
        <article>
            <Accordion header={'Project Requirements'} >
                {requirements}
            </Accordion>
        </article>
        <article>
            <Accordion header={'Highlight Functionality'} >

            </Accordion>
        </article>
        <article>
            <Accordion header={'Final Result'}  >

            </Accordion>
        </article>
        <article>
            <Accordion header={'What I Learned'} >

            </Accordion>
        </article>
    </section> */}
    </>
  )
}
export default PageSinglePortfolio