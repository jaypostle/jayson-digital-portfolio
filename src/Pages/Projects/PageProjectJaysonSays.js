import Project from '../../components/sections/Project';
import {React, useState } from 'react';
import portfolioData from '../../assets/data/portfolioData';
import Accordion from '../../components/atoms/SimpleAccordion';

import jsGameScreen from '../../assets/images/JaysonSays/js-game-screen.png';
import jsBoard from '../../assets/images/JaysonSays/js-board.png';
import jsStartGameBoard from '../../assets/images/JaysonSays/js-start-game-board.png';
import jsCodeCheckSequence from '../../assets/images/JaysonSays/js-code-check-sequence.png';
import jsCodeCodePhantom from '../../assets/images/JaysonSays/js-code-phantom.png';

function PageProjectJaysonSays() {

  return (
    <>
    <Project props={portfolioData[3]}> 
        <img src={jsGameScreen} alt={portfolioData[3].title} className='projects-hero-image' />
    </Project>
    
    <section className='project-accordions-wrapper'>
        <article>
            <Accordion header={'Project Requirements'} >
                <p>
                The game was an opportunity to learn about manipulating the DOM, using forms, bootstrap and modals, and screen switching for a play again/quit functionality. The game itself needed to have 4 difficulty settings as well as a fun and engaging game played in the desktop browser.  

                </p>
            </Accordion>
        </article>
        <article>
            <Accordion header={'Highlight Functionality'} >
                <h4>Phantom Difficulty Setting</h4>
                <p>Easy mode will flash a sequence of 4 keys. First, it will flash one key. If you match it correctly, it will flash the second key, then the third, etc. Each time, or “round”, it will flash the same order of keys. So if the sequence is Red - Blue - Red - Yellow, it will flash red, then red blue, then red blue red etc. I created an extremely difficult mode called “phantom” that has 16 rounds and randomizes the sequence each round so you can not use the previous round to remember what the sequence is. </p>
                <img src={jsStartGameBoard} alt='start game board' className='project-functionality-image' />
                <img src={jsCodeCodePhantom} alt='code of phantom difficulty' className='project-functionality-image' />
                <img src={jsCodeCheckSequence} alt='code to check the sequence' className='project-functionality-image' />

            </Accordion>
        </article>
        <article>
            <Accordion header={'Final Result'}  >
                <a href="https://github.com/jaypostle/jayson-says-js-game" className='primary-cta' target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* <a href="https://jaysonpostle.digital/vulcan-company-website/" className='primary-cta' target="_blank" rel="noopener noreferrer">Live Link</a> */}

            </Accordion>
        </article>
        <article>
            <Accordion header={'What I Learned'} >
                <p>While we were learning jQuery at the Front-End Web Developer program at BCIt, we were led to believe that jQuery was the dominant/primary way JS was written! It was quite a shock when I discovered that it wasn’t really the case… I’m glad I know jQuery but for any future game design I would write it in vanilla JS since there really isn’t a benefit to using jQuery anymore now that vanilla JS has great DOM manipulation and a lot of great methods out of the box. </p>
                <p>If I had to recreate the game, I would write it much DRYER. I would spend time writing more dynamic functions. For example, I wrote functions for each individual key. This would be a headache if I wanted to expand the gameboard to have 8, 12, or even 20 keys. This should really just be a single function that changes based on the submitted parameter(s). I don’t foresee recreating this game; however, I would love to take a stab at recreating my own variation of Wordle…</p>
            </Accordion>
        </article>
    </section>
    </>


    )
}

export default PageProjectJaysonSays
