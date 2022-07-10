// import mountains from '../assets/images/mountains.png';
import jaysonphoto2 from '../assets/images/jaysonphoto2.jpeg';

import funFactData from '../assets/data/funFactData';
import Accordion from '../components/atoms/SimpleAccordion';
import useDocumentTitle from '../utilities/documentTitle';

function PageAbout() {
  useDocumentTitle('About')


  return (
    <>
    <section>
      <article>
        <article>
          <h1>Jayson Postle</h1>
          <h3>Full-Stack Designer & Marketer | The Digital Problem Solver</h3>
        </article>
        <img className="about-photo-jayson" src={jaysonphoto2} alt="Photo of Jayson" />
      </article>
    </section>
    <section>
      <h2>About Me</h2>
      <p>I was born and raised in Victoria, BC. I love soccer, football, spikeball, oil painting, indoor plants, history documentaries, hiking mountains and coasts, cooking, and salsa dancing!</p>
      <p>I like to travel and explore new mountains and challenges. I have travelled to Germany, Poland, England, Nicaragua, and Costa Rica. I’ve hiked in the Bavarian Alps, the Juan de Fuca Trail, West Coast Trail, Mt. Albert Edward, and many other mountains or coasts in BC.</p>
      <p>
      I love numbers, puzzles, and analytical challenges and I also consider myself quite creative, both as a problem-solver and artistically. I love oil painting.</p>
      <p>
      In my free time, you’ll find me cooking new dishes, playing soccer and strategy and resource-based games like Settlers of Catan and Civilization, and watching Ted Talks. </p>
      <p>
      Since my second year of university, I have run the premier high-end wedding DJ company in Victoria: White Lotus DJ and Events. </p>
    </section>
    <section>
      {
        funFactData && funFactData.map((fact) =>  <Accordion key={fact.id} funFact={fact}/>)
      }
    </section>
    </>
  )
}
export default PageAbout