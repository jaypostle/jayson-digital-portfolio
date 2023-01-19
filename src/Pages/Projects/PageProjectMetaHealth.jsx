import Project from "../../components/sections/Project";
import { React, useState } from "react";
import portfolioData from "../../assets/data/portfolioData";
import Accordion from "../../components/atoms/SimpleAccordion";

import metaHealthHero from "../../assets/images/MetaHealth/metaHealthHero.png";
import chartClicking from "../../assets/images/MetaHealth/chart-clicking.gif";
import databaseStructure from "../../assets/images/MetaHealth/database-structure.png";
import dataset from "../../assets/images/MetaHealth/dataset.png";
import disscoverParamsUseState from "../../assets/images/MetaHealth/discover-params-use-state.png";
import discoverRecipesFlow from "../../assets/images/MetaHealth/discover-recipes-flow.gif";
import discoverRecipesForm from "../../assets/images/MetaHealth/discover-recipes-form.png";
import fetchUserChartData from "../../assets/images/MetaHealth/fetch-user-chart-data.png";

import ironVsSleep from "../../assets/images/MetaHealth/iron-vs-sleep.png";
import knexController from "../../assets/images/MetaHealth/knex-controller-all-nutrition-by-user.png";
import knexMigration from "../../assets/images/MetaHealth/knex-migration-for-nutrition-data.png";

import metaHealthDemoVideo from "../../assets/videos/MetaHealth/metahealth-demo-video.mp4";

function PageProjectMoveo() {
  return (
    <>
      <Project props={portfolioData[0]}>
        <img
          src={metaHealthHero}
          alt={portfolioData[0].title}
          className="projects-hero-image"
        />
      </Project>

      <section>
        <article>
          <h4>In two quick points, MetaHealth:</h4>
          <ol>
            <li>Tracks your health trends based on your diet</li>
            <li>
              Supports you to meal prep and shop based on the visualized health
              trends
            </li>
          </ol>
          <p>
            For example, a user can filter recipes for ‘vegetarian’, ‘allergic
            to nuts’, and ‘high iron diet’ and will be shown recipes that meet
            those requirements in a usable meal planning interface. Nutrition
            stats will be drawn from the recipes and will be visually graphed
            based on the RDA. Then, you will be asked to track your sleep
            quality, energy levels, feeling of contentedness, and exercise on a
            scale of 1-10. Finally, they will be able to visualize those weekly
            health points alongside what they’ve been eating. The goal of both
            sets of data is to attempt to draw correlations between, for
            example, increased iron or reduced dairy with their
            mood/sleep/happiness.
          </p>
        </article>
        <h2>Presentation</h2>
        <a
          href="https://docs.google.com/presentation/d/1vVz0LS1pe-3RQD_WHGb6HvFuzZITFK3NTcVthK4P3RI/edit?usp=sharing"
          className="primary-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Slides
        </a>

        <video width="100%" height="100%" preload="auto" controls>
          <source src={metaHealthDemoVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </section>

      <section className="project-accordions-wrapper">
        <h3>UX Planning</h3>
        <article>
          <Accordion header={"The Problem"}>
            <p>
              People often get stuck shopping and making the same food because
              it’s comfortable, familiar or they are afraid or too busy to try
              new meals. With more information and an interface that helps them
              meal plan for their family with minimal time invested, they will
              soon be able to draw connections between their personal health and
              diet.
            </p>
            <ul>
              <li>
                They might know they need more iron/protein/omega3 in their
                diet, but don’t know how to add those meals into their rotation
              </li>
              <li>
                They often find food or ingredients in their fridge is wasted{" "}
              </li>
              <li>
                Their meal planning is inefficient and they often struggle to
                find the time to cook daily
              </li>
              <li>
                They may know or consider that they have food intolerances that
                are affecting their energy/sleep/lifestyle (e.g. dairy allergy
                that affects mucus build-up or minor intolerances to gluten) but
                haven’t ever tested it
              </li>
            </ul>
          </Accordion>
        </article>
        <article>
          <Accordion header={"Primary Purpose"}>
            <ol>
              <li>Track long-term health trends based on personal diet</li>
              <li>
                Visualize and notice patterns with your mood, energy, and sleep
                based on your lifestyle
              </li>
              <li>Support you to meal prep and shop based on these goals</li>
            </ol>
          </Accordion>
        </article>
        <article>
          <Accordion header={"User Flow"}>
            <div>
              <h4>1. Discover</h4>
              <p>
                Discover recipes based on dietary preferences, allergens, or
                even “what’s in your fridge”
              </p>
              <h4>2. Create</h4>
              <p>Create a weekly meal plan from the recipes</p>
              <h4>3. Write</h4>
              <p>Write a journal entry and reflect on how you felt that week</p>
              <h4>4. See</h4>
              <p>See your journal entries and nutrition volumes side-by-side</p>
            </div>
            <div>
              <p>
                At the start of the week (say Sunday), the user will create a
                meal plan based on filters (dietary restrictions, preferences,
                intolerances) and sortable by nutritional data (high in iron).
              </p>
              <p>
                The user can add each recipe’s ingredients to a shopping list
                and remove what they already have at home. They will edit
                whether they are making a meal for two or more.
              </p>
              <p>
                At the end of the week, the user will be prompted to make a
                journal entry where they will enter, on a scale of 1 - 10, how
                they feel about their sleep quality, energy levels,
                happiness/contentedness.
              </p>
              <p>
                The user will input the meals they ate and the nutrition volumes
                for iron, zinc, and magnesium will be displayed on the nutrition
                graph and a trend line will compare their nutrition totals
                alongside their health totals.
              </p>
            </div>
          </Accordion>
        </article>
        <article>
          <Accordion header={"User Profile"}>
            <h4>There are two primary users:</h4>
            <p>
              <strong>Young working professionals</strong> who don’t have the
              time to cook daily but do care deeply about their health. They
              want a system that will help them save time and cook healthy and
              cost-effective meals for their household while supporting their
              health goals.
            </p>
            <i>Consider:</i>
            <p>
              Recipes that are quick to make, cost-effective, and filterable by
              a wide variety of diets (vegan, paleo, etc.)
            </p>

            <p>
              <strong>Parents</strong> who want to make healthy meals for their
              family.
            </p>
            <i>Consider:</i>
            <p>
              They have not just a wide variety of dietary needs but they may
              have multiple family members with different and conflicting
              dietary preferences/intolerances.
            </p>
            <p>
              While people often cook for their partner or their family, the
              app’s goal will be for the individual to connect their diet with
              their own personal health.
            </p>
          </Accordion>
        </article>

        <br></br>
        <h3>Development</h3>
        <article>
          <Accordion header={"Project Requirements"}>
            <p>
              The requirements were quite open-ended. The sandbox to play in
              was: within 8 working days, create a full-stack application that
              shows off the skills you’ve learned and if you can, use some new
              tech or libraries. Each student came up with their own idea, wrote
              a 15-page development planning document that outlined their
              problem set, user profile, tech stack, api organization, database
              structure and more. We then had to pitch our plan and spend two
              weeks building our app as close to our original plan as possible.
            </p>
            <p>
              My personal expectations were to create a well-designed app that
              uses data visualization and a relational database. I expected to
              create the nutrition entries and plotting functionality. The extra
              functionality I was able to create was adding in the mood and
              energy journal entry tracking.
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"Highlight Functionality"}>
            <h4>Relational Database Structure</h4>
            <p>
              When I created my capstone plan, I wasn’t sure how much I’d be
              able to accomplish in the two-week sprint. I thought I would have
              to stop at adding meal plans and displaying the nutritional data
              from each meal plan. I knew I wouldn't have time for Auth but I
              wanted to structure my database so that I would have the
              flexibility to add journal entries and user authentication in the
              future.
            </p>
            <p>
              I created four schemas: users, meal plans, nutrition data points,
              and journal entries. Meal plans were connected to each user with a
              foreign id and contained a string of recipe ids. Nutrition data
              points had a foreign id for the user, a foreign id for the meal
              plan they were posted from, a nutrition type (iron, magnesium, or
              zinc), and a nutrition volume. Each journal entry has a foreign id
              for the user that posted the entry, the meal plan it was
              associated with, a comment (string), and a number for the user’s
              energy, sleep, and mood.
            </p>
            <p>
              Mapping this out in a way that was intuitive and matched the flow
              of a user’s experience through the app was a difficult challenge
              but once I created all the schemas and routes, everything came
              together.
            </p>
            <img
              src={databaseStructure}
              alt="database structure"
              className="project-functionality-image"
            />
            <img
              src={knexMigration}
              alt="knex migration"
              className="project-functionality-image"
            />
            <p>I used knex.js for the migrations and routes.</p>
            <img
              src={knexController}
              alt="knex controller"
              className="project-functionality-image"
            />

            <h4>Discover Recipes Form</h4>
            <img
              src={discoverRecipesForm}
              alt="discover filters"
              className="project-functionality-image"
            />
            <p>
              While the ability to view your nutritional volumes next to your
              sleep, mood, and energy data is very helpful in itself, the form I
              created to find appropriate recipes is quietly the most important
              part of the app. With the Spoonacular API, a single route allows
              me to return recipes from a complex set of search parameters such
              as dietary preferences, allergens, or even what ingredients you
              have in the fridge. Updating the form automatically updates the
              search state. Upon submission, I turn this state variable into a
              search query string that is then appended to my API route.
            </p>
            <img
              src={disscoverParamsUseState}
              alt="discover params use state"
              className="project-functionality-image"
            />
            <p>
              Allowing for a robust set of filters allows users to find recipes
              that match their lifestyle. See a gif of the form in use below.
            </p>
            <img
              src={discoverRecipesFlow}
              alt="gif of form in use"
              className="project-functionality-image"
            />
            <h4>Chart.js</h4>
            <img
              src={chartClicking}
              alt="gif of chart in use"
              className="project-functionality-image"
            />
            <p>
              In the fall, I booked a freelance project for a client in the
              healthcare space. It was scheduled to start January 2023 and the
              deliverable was a dashboard that displayed personal health data.
              My goal for this project was to learn how to use Chart JS and to
              practice visually displaying data. I wanted the final chart to be
              clean, fun, and interactive.
            </p>
            <p>
              In my charts component in React, I requested my user’s nutrition
              and health data.
            </p>
            <img
              src={fetchUserChartData}
              alt="fetching user chart data"
              className="project-functionality-image"
            />
            <p>
              I mapped through this data to create the data points and labels
              for the chart.
            </p>
            <img
              src={dataset}
              alt="fetching and using dataset information for the chart "
              className="project-functionality-image"
            />
            <p>
              After adjusting the chart styles (rounded lines, circle points,
              line colour, etc.) the next step was to make the experience
              interactive. With the 4 nutrition types (iron, zinc, magnesium,
              and calcium) and 3 health types (energy, sleep, and mood) I was
              plotting, I needed users to be able to see a chosen nutrient next
              to a selected health type. Here is an example of iron consumption
              simultaneously charted with sleep ratings:
            </p>
            <img
              src={ironVsSleep}
              alt="fetching and using dataset information for the chart "
              className="project-functionality-image"
            />
            <p>
              I made click events to filter the incoming data and funnel that
              into the chart.
            </p>
            <p>
              Finally, I added custom click events on each data point within the
              chart to populate the data from the meal plan and journal entry
              for that data point below the table, so the user could reference
              what they ate on a particular week.
            </p>
            <img
              src={chartClicking}
              alt="gif of chart in use"
              className="project-functionality-image"
            />
            <p>
              The purpose of the project was development so I had to skip
              creating a clean wireframe for this page and testing it with
              users. Areas of improvement include giving the user the ability to
              view previous entries by searching or not having to click the
              chart and keeping the y axis totals consistent for every data
              type.
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"Final Result"}>
            <a
              href="https://github.com/jaypostle/metahealth-brainstation-capstone"
              className="primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What I Learned"}>
            <p>
              Beyond spending more time learning how a full-stack app with
              Express.js and React functions together, I learned how to create
              complex relational databases and how to structure and create their
              routes intuitively with Knex.js. I learned how to set up
              useContext to manage state components easily without prop
              drilling. I learned how to build good-looking and functional
              charts with a great library. Most importantly, I learned how to
              connect 4 different sets of schemas and routes together on the
              front-end.
            </p>
          </Accordion>
        </article>
        <article>
          <Accordion header={"What is Next"}>
            <p>Future Improvements:</p>
            <strong>Data</strong>
            <ul>
              <li>Ability to edit meal plans and journal entries</li>
              <li>Add Auth and Google sign-in</li>
            </ul>
            <strong>Functionality</strong>
            <ul>
              <li>Add RDA based on your demographic</li>
              <li>Search entered meal plans and journal entry notes</li>
              <li>Adjust servings to change total nutrition volume</li>
            </ul>
            <strong>Discover & Charts</strong>
            <ul>
              <li>Sort meals by nutrition e.g. high iron</li>
              <li>
                Sort meals by nutrition e.g. high iron Display journal entries
                and meal plans on chart click
              </li>
              <li>Toggle charts based on time frames</li>
            </ul>
          </Accordion>
        </article>
      </section>
    </>
  );
}

export default PageProjectMoveo;
