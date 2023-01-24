import Project from "../../components/sections/Project";
import { React, useState } from "react";
import portfolioData from "../../assets/data/portfolioData";
import Accordion from "../../components/atoms/SimpleAccordion";

import moveoHero from "../../assets/images/Moveo/moveo-hero.png";
import moveoCarousel from "../../assets/images/Moveo/moveo-carousel.png";
import moveofavourites from "../../assets/images/Moveo/moveo-favourites.png";
import moveoMovieProviders from "../../assets/images/Moveo/moveo-movie-provider.png";
import moveoCodeCarousel from "../../assets/images/Moveo/moveo-code-carousel.png";
import moveoCodeProviders from "../../assets/images/Moveo/moveo-code-providers.png";

function PageProjectMoveo() {
  return (
    <>
      <Project props={portfolioData[3]}>
        <img
          src={moveoHero}
          alt={portfolioData[3].title}
          className="projects-hero-image"
        />
      </Project>

      <section className="project-accordions-wrapper">
        <article>
          <Accordion header={"Project Requirements"}>
            <p>
              The project requirements were to build an app connected to
              themoviedb.org API. The home page needed to display a grid of
              movies, sortable by popular, top rated, now playing, and upcoming.
              The single movie page had to be linked from each movie card and
              feature expanded movie information such as overview and a movie
              backdrop. Lastly, the favourites page was meant to display all of
              the user’s selected or “favourited” movies. The action of
              adding/removing favourites is actionable on the home page, single
              movie pages, and from the favourites page, all connected to a
              single store state using Redux Toolkit.
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"Highlight Functionality"}>
            <h4>Carousel</h4>
            <p>
              The minimum requirements of the project were to display a grid of
              cards. I wanted to create an app-like or Netflix-like experience
              by using a carousel of cards that overflows to the right. The
              carousel works flawlessly from mobile to desktop and the
              scroll/click movement is customized depending on your viewing
              screen.{" "}
            </p>
            <img
              src={moveoCarousel}
              alt="moveo carousel"
              className="project-functionality-image"
            />
            <img
              src={moveoCodeCarousel}
              alt="moveo carousel code"
              className="project-functionality-image"
            />

            <h4>Movie Provider Data</h4>
            <p>
              One of the most frustrating things about searching for new movies
              online is finding the perfect movie but being unable to find the
              available movie provider (e.g. Crave, Netflix). Even worse, is
              reading it is available on a certain network you are subscribed to
              only to find that it is not available in your country. Yes, there
              are VPN networks available to circumvent this but most laypeople
              don’t know what these are or don’t want to go through the hassle.
              On the single movie pages, if a movie is available on a
              subscription network (within Canada), it will show the logo of the
              network provider. This is a separate API call to the Just Watch
              API and it returns an object with many specific permutations. Some
              movies are available to rent or buy but not stream, some are
              available in the US but not CA, some are available in Canada but
              not on one of the selected networks (Prime, Netflix, Disney,
              Crave) amongst a few other permutations. See the “What I learned”
              section for my next steps building an even better experience for
              the user.
            </p>

            <img
              src={moveoMovieProviders}
              alt="moveo carousel"
              className="project-functionality-image"
            />
            <img
              src={moveoCodeProviders}
              alt="moveo carousel code"
              className="project-functionality-image"
            />
          </Accordion>
        </article>
        <article>
          <Accordion header={"Final Result"}>
            <a
              href="https://github.com/jaypostle/moveo-database-app"
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://jaysonpostle.digital/moveo-database-app"
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What I Learned"}>
            <p>
              The toughest challenge was learning Redux and Redux Toolkit. I’m
              usually a pretty quick study but the combinations of new jargon,
              working across many different files, was a lot to wrap my head
              around! I didn’t want to just copy code and get it working - I
              wanted to fully understand what I was coding. I paused and made a
              plan. I opened up a list of Youtube Videos and tutorials on Redux
              Toolkit and tried each out in a new branch in my GitHub. About 10
              hours and 6 branches later, I got it working and now have a
              working knowledge of Redux Toolkit with the add-to-favourites
              application.{" "}
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What is Next"}>
            <p>
              Next, I will be adding network provider sortability. Currently,
              you can see on select single movie pages where that movie is
              streaming (Disney, Crave, Netflix, or Prime). Soon, from the home
              page, you will be able to select what providers you have access to
              and then a carousel will be displayed where you can explore all
              the movies of a particular category. My FireTV does this but not
              with all providers and not with the ability to sort. Stay tuned to
              see it in action!
            </p>
          </Accordion>
        </article>
      </section>
    </>
  );
}

export default PageProjectMoveo;
