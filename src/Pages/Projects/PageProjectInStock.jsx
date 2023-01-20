import Project from "../../components/sections/Project";
import { React, useState } from "react";
import portfolioData from "../../assets/data/portfolioData";
import Accordion from "../../components/atoms/SimpleAccordion";

import editInventoryItem from "../../assets/images/InStock/edit-inventory-item.png";
import addInventoryItem from "../../assets/images/InStock/add-new-inventory-item.png";
import inventory from "../../assets/images/InStock/inventory.png";
import warehouses from "../../assets/images/InStock/warehouses.png";
import instockWalkthrough from "../../assets/videos/InStock/instock-walkthrough.mov";

function PageProjectMoveo() {
  return (
    <>
      <Project props={portfolioData[1]}>
        <img
          src={warehouses}
          alt={portfolioData[1].title}
          className="projects-hero-image"
        />
      </Project>

      <section>
        <h2>The Walkthrough</h2>
        <video width="100%" height="100%" preload="auto" controls>
          <source src={instockWalkthrough} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </section>

      <section className="project-accordions-wrapper">
        <article>
          <Accordion header={"Project Requirements"}>
            <p>There were three primary requirements:</p>
            <ol>
              <li>
                For our Agile Sprint, use a JIRA board to manage our production
                tickets and sync our code on GitHub
              </li>
              <li>
                Use proper React components and manage state/props as necessary
                to make the user interface dynamic with a variety of CRUD routes
                (adding, editing, deleting warehouses, inventory items)
              </li>
              <li>
                Our work must closely resemble the provided design mockups (see
                below)
              </li>
            </ol>
            <a
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.figma.com/file/qLdwhUjqq5bKxoNYZ6v5Ze/U---InStock-Mockups?node-id=1196%3A0&t=02POE0FXwSdY8j1M-1"
            >
              Figma Design File
            </a>
          </Accordion>
        </article>
        <article>
          <Accordion header={"Highlight Functionality"}>
            <h4>CRUD Setup and Routes</h4>
            <p>
              The inventory management system allows for a theoretical manager
              to view the warehouses of the company, see relevant information at
              a glance, click into each warehouse to view individual warehouse
              information, edit and delete each warehouse, as well as see the
              inventory related to that warehouse. A relational database was
              used to create the inventory items which also needed to be viewed
              altogether, with their category, stock status, quantity, and
              associated warehouse. Each item needed to be edited and deleted as
              well as the ability to add a new item.
            </p>
            <p>
              This was my first full-stack app and the challenge was
              understanding the relationships in the back-end between warehouses
              and inventory items, building every relevant CRUD route, and then
              connecting it on the front-end. It took some time to wrap my head
              around it but once it clicked, the project was produced very
              smoothly.
            </p>

            <img
              src={editInventoryItem}
              alt="database structure"
              className="project-functionality-image"
            />

            <h4>Team Code Consistency and Code Collisions</h4>
            <p>
              I was very lucky to have such a great team both in our ability but
              more importantly, communication skills. We had few code collisions
              and as a group we very quickly resolved issues. The Prettier
              extension made a few pull requests look like there were issues
              when in reality there weren’t. One area I know we would want to
              work on if given a second opportunity would be to create a
              consistent design system. We each took tickets from the project
              management board JIRA and to an extent, worked on each
              ticket/page/piece of functionality in silo. We asked each other
              questions but there are lines of duplicate code that could be
              streamlined. For example, the CSS for the Warehouse and Inventory
              tables is nearly the same. We really only need one component along
              but we made two along with two SCSS files. There are 2 other sets
              of pages that have similar views (adding and editing database
              items).
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"Final Result"}>
            <a
              href="https://github.com/IanDCF/instock-vernon"
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Front-End
            </a>
            <a
              href="https://github.com/lucaslu/instock-api-vernon"
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Back-End
            </a>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What I Learned"}>
            <p>
              A lot of projects you build in school or follow on YouTube are
              flashy and exciting like media apps, movie databases, or games. I
              really enjoyed building a full-stack app that had a practical
              business application. They require you to focus on the core
              functionality of the app instead of being able to hide bad code or
              limited functionality with flashy graphics. Functionally, the app
              does a lot and it required a lot of deep thinking and learning new
              ideas like an Express.js backend connected to a MySQL database
              with Knex.js and creating all of the CRUD routes.
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What is Next"}>
            <p>
              For what’s next, I will build a healthcare dashboard app (another
              practical business application) using the MERN stack (MongoDB,
              Express, React, and Node.js). I want to dial-in state management,
              use Redux Toolkit, create a clean backend using a new DB platform,
              and work with tooling and charting libraries to make an
              interactive and dynamic front-end.
            </p>
          </Accordion>
        </article>
      </section>
    </>
  );
}

export default PageProjectMoveo;
