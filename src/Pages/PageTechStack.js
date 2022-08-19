import techStackData from '../assets/data/techStack';
import useDocumentTitle from '../utilities/documentTitle';


function PageTechStack() {
  useDocumentTitle('Tech Stack')

  return (
    <>
    <section>
        <article>
          <h1>Tools & Tech Stack</h1>
          <h3>Front-end Developer with UX Design and Digital Marketing Experience | The Digital Problem Solver</h3>
          <p>I am a graduate of the Front-end Web Development program @ BCIT. Prior to that, I was the lead web/UX designer and digital marketer at Echo Echo Digital in Sidney, BC. There, I spent half my time creating sitemaps and wireframes for web and app projects and the rest of my time making and implementing marketing strategy for our list of local, ecommerce, and NGO clients. </p>
        <h4>As a front-end developer with a background in web/UX design and digital marketing, I develop web apps with an eye for the user's experience, interaction, and connecting with the user's needs and goals.</h4>
        </article>
    </section>
    <section className='tech-stack-article-wrapper'>
      <h2>My Technical Experience:</h2>
    <article>
        <h3>Engineering</h3>
        <p>Websites and web apps built in React.js, Wordpress, and from scratch in HTML/CSS. </p>
        
        {       
        techStackData && techStackData.engineering.map((skill) =>  <span className='pill'>{skill.skill}</span>)
        }        
      </article>
      <article>
        <h3>UX and Web Design</h3>
        <p>Websites and web apps designed with Figma and Sketch and prototyped in Invision and Figma. Over 40 websites built in Squarespace and Wordpress.</p>
        {       
        techStackData && techStackData.design.map((skill) =>  <span className='pill'>{skill.skill}</span>)
        }        
      </article>
      <article>
        <h3>Digital Marketing</h3>
        <p>7 Years of experience conducting digital marketing campaigns for small business to enterprise level clients with 7 figure marketing budgets.</p>
        {       
        techStackData && techStackData.marketing.map((skill) =>  <span className='pill'>{skill.skill}</span>)
        }        
      </article>
    </section>
    </>

  )
}
export default PageTechStack