// insert images here too

const portfolioData = [
  {
    title: "MetaHealth",
    id: 1,
    subtitle:
      "A Full-stack React/Express.js app helping you discover the impact of food on your body. ",
    techUsed: [
      "React.js",
      "Express.js",
      "Knex.js",
      "Node.js",
      "MySQL",
      "Chart.js",
      "SCSS",
    ],
    year: 2022,
    image: "../../assets/images/MetaHealth/metaHealthHero.png",
    overview:
      "This work was the capstone project for the BrainStation Web Development program. It was a 2-week sprint to show off our skills from the previous 3 months of learning and projects. MetaHealth's primary purpose is to help people track their long-term health trends based on their diet. The app supports users with meal prepping and shopping based on these goals.",
  },
  {
    title: "InStock Inventory Management System",
    id: 2,
    subtitle:
      "Fully responsive Full-stack React/Express.js app built in a week-long sprint with a group of 4.",
    techUsed: ["React.js", "Express.js", "Knex.js", "Node.js", "MySQL", "SCSS"],
    year: 2022,
    image: "../../assets/images/instock/warehouses.png",
    overview:
      "In a group of 4, we were tasked with creating an inventory management system for a fictitious company. We were given a Figma design file and had to build a backend using a relational MySQL database, connected with Knex.js, and a server using Express.js. The front-end was built using React (Axios, SCSS, React Router Dom). The user can view warehouse and inventory data as well as add, edit, and delete warehouses and inventories.",
  },
  {
    title: "BrainFlix",
    id: 3,
    subtitle: "Full-stack React/Express.js video viewing app.",
    techUsed: ["React.js", "Express.js", "Node.js", "SCSS"],
    year: 2022,
    image: "../../assets/images/BrainFlix/brainflix-hero.png",
    overview:
      "BrainFlix is a full-stack React App built with an Express.js backend. Users can click through a set of videos, view their meta information, and view the comments for that video. Photos are used in lieu of videos, as the main exercise of the project was to manage state and connect to your backend with read routes.",
  },
  {
    title: "Moveo Movie Database",
    id: 4,
    subtitle: "A movie database built in React.js using themoviedb.org API.",
    techUsed: ["React.js", "SCSS", "JSX", "Redux Toolkit", "UX/UI Design"],
    year: 2022,
    image: "../../assets/images/Moveo/moveo-hero.png",
    overview:
      "A movie database built in React.js using themoviedb.org API. Features an add-to-favourites functionality that persists in the browser using local storage. (Personally) designed using Figma using a design system and a component architecture.",
  },
  {
    title: "Capstone Rocky Mountain Festival",
    id: 5,
    subtitle:
      "An Event Conference website built with WooCommerce and a custom WordPress theme.",
    techUsed: ["WooCommerce", "WordPress", "SCSS", "PHP", "UX/UI Design"],
    year: 2022,
    image: "../../assets/images/Moveo/moveo-hero.png",
    overview:
      "A capstone project from the Front-end Web Development program at BCIT built with a team of 4. The fictitious festival, Rocky Mountain Fest, was created as a weekend getaway for the whole family. We created and organized all the content in an intuitive manner that was findable, sortable, and explorable. Highlight functionality includes being able to find the perfect Artist, Workshop, or Vendor for the family that uses a Javascript filter library, Isotope, to give the user the ability to sort by a number of popular filters.",
  },
  {
    title: "Vulcan Business Website",
    id: 6,
    subtitle:
      "Building a one-page pixel-perfect business website from scratch based on a provided design. ",
    techUsed: ["HTML", "Gulp", "SCSS", "Vanilla JS", "GitHub"],
    year: 2022,
    image: "",
    overview:
      "Working with a team, we were provided a series of pdfs and screenshot videos showcasing a website design and functionality. Splitting up the work by sections, the goal was to create a consistent and pixel-perfect design while working with our first taste of GitHub and SCSS on a team project. Gulp was used to compile the SCSS. In our group of three, I took on the project manager and Dev Ops role to ensure our GitHub merges were clean and resolve any merge conflicts.",
  },
  {
    title: "Jayson Says JS Game",
    id: 7,
    subtitle:
      "A Simon Says game built with vanilla JS and jQuery. The game is based on the 90’s Simon Says toy with 4 keys that flash in a sequence.",
    techUsed: ["HTML", "CSS", "Vanilla JS", "jQuery", "Bootstrap"],
    overview:
      "In the opening screen, the user writes their name, selects their difficulty, and clicks start game. For help information, they can hit the help modal displayed in the top right. The game screen shows the game board, score board, and play/end game options. The keys will flash along a randomly generated sequence. Matching each “flash”, key for key, will allow you to win the game. As a class, we were learning jQuery at the time, so I built a lot of it using jQuery.",
  },
];

export default portfolioData;
