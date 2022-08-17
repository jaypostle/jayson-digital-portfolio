import Project from '../../components/sections/Project';
import {React, useState } from 'react';
import portfolioData from '../../assets/data/portfolioData';
import Accordion from '../../components/atoms/SimpleAccordion';

import vulcanHero from '../../assets/images/Vulcan/vulcan-hero.png';
import vulcanFooter from '../../assets/images/Vulcan/vulcan-footer.png';
import vulcanCodeMixins from '../../assets/images/Vulcan/vulcan-code-mixins.png';

function PageProjectVulcan() {

  return (
    <>
    <Project props={portfolioData[2]}> 
        <img src={vulcanHero} alt={portfolioData[2].title} className='projects-hero-image' />
    </Project>

    <section className='project-accordions-wrapper'>
        <article>
            <Accordion header={'Project Requirements'} >
                <p>
                We were required to build our design system in Sass using best practices of mixins and variables. Because of the fast deadline, we worked by default in an agile system, scrumming every morning to review outstanding work and make a plan for the day. 
                </p>
                <img src={vulcanFooter} alt='Vulcan Hero' className='project-functionality-image' />

            </Accordion>
        </article>
        <article>
            <Accordion header={'Highlight Functionality'} >
                <h4>Carousel & Hero</h4>
                <p>I was assigned the hero section which proved to be quite a challenge. The carousel, svg cutout, navigation floating below the header, and the amount of content in the hero itself made it difficult to display well on all screen sizes. It was one of my first tastes of responsive design on a very difficult section, using mixins and Sass. I enjoyed the challenge.</p>
                <img src={vulcanHero} alt='Vulcan Hero' className='project-functionality-image' />
                <img src={vulcanCodeMixins} alt='Vulcan Hero' className='project-functionality-image' />

            </Accordion>
        </article>
        <article>
            <Accordion header={'Final Result'}  >
                <a href="https://github.com/jaypostle/vulcan-company-website" className='primary-cta' target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://jaysonpostle.digital/vulcan-company-website/" className='primary-cta' target="_blank" rel="noopener noreferrer">Live Link</a>

            </Accordion>
        </article>
        <article>
            <Accordion header={'What I Learned'} >
                <p>While reviewing our code during and after the project, I could very quickly see how much repeated code there was. With the knowledge I have now, proper planning would ensure we write as DRY code as possible. Even for a one-page website, I would start with mixins, variables, type, and then build all repeated components and only start section work once those are built. It would also be more molecular to build if we were to build it again in React or another framework. </p>
            </Accordion>
        </article>
    </section>
    </>


    )
}

export default PageProjectVulcan