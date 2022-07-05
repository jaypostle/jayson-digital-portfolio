import techStackData from '../assets/data/techStack';
import useDocumentTitle from '../utilities/documentTitle';


function PageTechStack() {
  useDocumentTitle('Tech Stack')

  return (
    <>
    <section>
        <article>
          <h1>Tools & Tech Stack</h1>
          <h3>Full-Stack Designer & Marketer | The Digital Problem Solver</h3>
        </article>
    </section>
    <section>
    <article>
        <h2>Engineering</h2>
        <p>Websites and web apps built in React and Wordpress. </p>
        
        {       
        techStackData && techStackData.engineering.map((skill) =>  <span className='pill'>{skill.skill}</span>)
        }        
      </article>
      <article>
        <h2>Design</h2>
        <p>Websites and web apps built in React and Wordpress. </p>
        {       
        techStackData && techStackData.design.map((skill) =>  <span className='pill'>{skill.skill}</span>)
        }        
      </article>
      <article>
        <h2>General</h2>
        <p>Websites and web apps built in React and Wordpress. </p>
        {       
        techStackData && techStackData.general.map((skill) =>  <span className='pill'>{skill.skill}</span>)
        }        
      </article>
    </section>
    </>

  )
}
export default PageTechStack