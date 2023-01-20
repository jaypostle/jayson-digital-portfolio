import Project from "../../components/sections/Project";
import { React, useState } from "react";
import portfolioData from "../../assets/data/portfolioData";
import Accordion from "../../components/atoms/SimpleAccordion";

import BrainFlixHero from "../../assets/images/BrainFlix/brainflix-hero.png";
import useEffectPhoto from "../../assets/images/BrainFlix/useEffect.png";
import useStatePhoto from "../../assets/images/BrainFlix/useState.png";

import brainFlixWalkthrough from "../../assets/videos/BrainFlix/brainflix-walkthrough.mov";

function PageProjectMoveo() {
  return (
    <>
      <Project props={portfolioData[2]}>
        <img
          src={BrainFlixHero}
          alt={portfolioData[2].title}
          className="projects-hero-image"
        />
      </Project>

      <section>
        <h2>The Walkthrough</h2>
        <video width="100%" height="100%" preload="auto" controls>
          <source src={brainFlixWalkthrough} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </section>

      <section className="project-accordions-wrapper">
        <article>
          <Accordion header={"Project Requirements"}>
            <p>
              The main view shows a primary video, meta data and comments for
              this video below, and to the right, a sidebar of videos to watch
              next. The requirements were to manage state with the array of
              videos. After clicking a video in the “next videos” list, it
              showed that video in the main player and took it out of the array
              of “next videos”. Calls to the backend were tested with Postman
              and built using Axios js library. React Component architecture,
              BEM, and Flexbox best practices were used throughout the app.
              Lastly, a fake video upload page was built that uploads a title,
              description and a standardized photo. The “uploaded video” would
              then be added to the main array of videos to watch.
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"Highlight Functionality"}>
            <h4>Managing State</h4>
            <p>
              The primary learning goal of this app was to practice managing
              state across components, using Axios calls inside a useEffect to
              procure data, and build a clean route structure with React Router
              Dom. I built the Moveo Movie Database React project a few months
              before, and this project was another opportunity for me to learn
              those three core concepts of React. It was my second React project
              and I appreciated the challenge of trying to learn those concepts
              deeper. Even so, looking back after having completed two more
              React projects since, I can see where I can improve my code so
              similar projects in the future will be built more cleanly and
              efficiently.
            </p>

            <img
              src={useStatePhoto}
              alt="database structure"
              className="project-functionality-image"
            />
            <img
              src={useEffectPhoto}
              alt="database structure"
              className="project-functionality-image"
            />
          </Accordion>
        </article>
        <article>
          <Accordion header={"Final Result"}>
            <a
              href="https://github.com/jaypostle/brainflix-brainstation"
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Front-end
            </a>
            <a
              href="https://github.com/jaypostle/brainflix-api-brainstation"
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Back-end
            </a>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What I Learned"}>
            <p>
              My first React project since I graduated from BCIT a few months
              earlier, the biggest challenge was properly managing state. The
              project was built in three parts: one, just the front-end and use
              static images/files; two, get the files you need from an API;
              three, get the files you need from your own Express.js server. The
              next challenge was refactoring the code along the way to
              incorporate the new source of data.
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What is Next"}>
            <p>
              I want to rebuild this app with TypeScript and focus on best
              practice use of state management. I will build it using actual
              videos and allow the user to upload a real mp4 file from their
              computer along with a thumbnail.
            </p>
          </Accordion>
        </article>
      </section>
    </>
  );
}

export default PageProjectMoveo;
