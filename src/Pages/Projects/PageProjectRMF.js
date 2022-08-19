import Project from '../../components/sections/Project';
import {React, useState } from 'react';
import portfolioData from '../../assets/data/portfolioData';
import Accordion from '../../components/atoms/SimpleAccordion';

import rmfHero from '../../assets/images/RMF/rmf-homepage-hero.png';


function PageProjectRockyMountainFestival() {

  return (
    <>
    <Project props={portfolioData[1]}> 
        <img src={rmfHero} alt={portfolioData[1].title} className='projects-hero-image' />
    </Project>

    <section className='project-accordions-wrapper'>
        <article>
            <Accordion header={'Project Requirements'} >
                <p>
                The project requirements were to build an event website using WordPress and WooCommerce. Our group wanted to push the envelope and create an exciting weekend event that we would be excited to go to. We added additional content and created a connected user experience that allowed for families to make the weekend their own. Cards, filters, and accordions are used intentionally to support the user experience.              
                </p>
                {/* <img src={vulcanFooter} alt='Vulcan Hero' className='project-functionality-image' /> */}

            </Accordion>
        </article>
        <article>
            <Accordion header={'Highlight Functionality'} >
                <h4>Isotope Filter | JS Library</h4>
                <p>The team used the JS library Isotope to add a filter ability to Artists, Workshops, and Vendor pages. It’s intuitive and functions how a site visitor would expect it to work. The challenge was getting Isotope to run well on all three pages that were using it, given that each page has different content, with different cards and information. We initially wanted to add Isotope to the FAQ page but we had difficulty implementing it cleanly in a way that didn’t affect the original three filter pages.</p>
                {/* <img src={vulcanHero} alt='Vulcan Hero' className='project-functionality-image' /> */}

                <h4>Custom Post Types and ACF</h4>
                <p>We used 7 different CPTs with a range of connected ACFs to make our site content. Using CPTs alongside ACFs made our site scalable and dynamic for our fictional client. Adding new Artists, Vendors, Workshops, and more is quite simple and with our set of Training Videos we recorded, the client could feel quite comfortable updating core site details themselves.</p>
                {/* <img src={vulcanHero} alt='Vulcan Hero' className='project-functionality-image' /> */}
            </Accordion>
        </article>
        <article>
            <Accordion header={'Final Result'}  >
                {/* <a href="https://github.com/jaypostle/vulcan-company-website" className='primary-cta' target="_blank" rel="noopener noreferrer">GitHub</a> */}
                <a href="https://rockymountainfest.bcitwebdeveloper.ca/" className='primary-cta' target="_blank" rel="noopener noreferrer">Live Link</a>

            </Accordion>
        </article>
        <article>
            <Accordion header={'What I Learned'} >
                <p>It was a fast-paced project: from content creation, wireframing, UI design, development, to styles the project took 3 weeks (alongside other projects that were due). The proper workflow to work on WordPress website while on a team slowed me down at first, but quickly became second nature. We created the UX and built the functional website very quickly. We worked very efficiently in the short timeframe and allocated responsibilities well.  Our biggest challenge came from not having a finalized design and styling as a team. We all had different “styles” of styling, different methods of work and some of our methods overlapped. In future, we would make a coding style guide for class names, common elements, consistent semantic html structure. E.g. what’s a section, what’s an article, how do you wrap content within a card? This would make styling faster and make the code more DRY.</p>
            </Accordion>
        </article>
        <article>
            <Accordion header={`What's Next`} >
                <p>
                The areas that I would want to iterate and improve on the site would be:
                </p>
                <h4>Accessibility</h4>
                <p>Ensuring the colour contrasts and text sizes meet AA accessibility standards.</p>
                <h4>Consistent Card Design</h4>
                <p>Work to create a consistent card design.</p>
                <h4>Create DRYer and consistent code for the Artist, Workshop, Vendor pages</h4>
                <p>Some of the html structure, class/id names, and associated css is repeated or different when it doesn’t have to be. </p>
                <h4>Filter Page Loading Animation</h4>
                <p>When cards are sorted, they float in funky because of the very strict rules that the JS library, Isotope, has. In future, I would code the filter functionality from scratch or use a different library.</p>
            </Accordion>
        </article>
    </section>
    </>


    )
}

export default PageProjectRockyMountainFestival