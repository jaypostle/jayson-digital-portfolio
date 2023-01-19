import "../styles/style.scss";
import portfolioData from "../assets/data/portfolioData";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import PageHome from "../Pages/PageHome";
import PageContact from "../Pages/PageContact";
import PageAbout from "../Pages/PageAbout";
import PagePortfolio from "../Pages/PagePortfolio";
import PageSinglePortfolio from "../Pages/PageSinglePortfolio";

import PageProjectMoveo from "../Pages/Projects/PageProjectMoveo";
import PageProjectRMF from "../Pages/Projects/PageProjectRMF";
import PageProjectVulcan from "../Pages/Projects/PageProjectVulcan";
import PageProjectJaysonSays from "../Pages/Projects/PageProjectJaysonSays";
import PageProjectMetaHealth from "../Pages/Projects/PageProjectMetaHealth";

import PageTechStack from "../Pages/PageTechStack";
import PagePrivacyPolicy from "../Pages/PagePrivacyPolicy";

import PageTestimonials from "../Pages/PageTestimonials";

function AppRouter() {
  useEffect(() => {
    document.title = "Jayson | Portfolio";
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="App-header">
          <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/portfolio" element={<PagePortfolio />} />
            {/* <Route path='/portfolio/:id' element={<PageSinglePortfolio />}/> */}
            {/*  Portfolios */}
            <Route
              path="/portfolio/moveo-movie-database"
              element={<PageProjectMoveo />}
            />
            <Route
              path="/portfolio/capstone-rocky-mountain-festival"
              element={<PageProjectRMF />}
            />
            <Route
              path="/portfolio/vulcan-business-website"
              element={<PageProjectVulcan />}
            />
            <Route
              path="/portfolio/jayson-says-js-game"
              element={<PageProjectJaysonSays />}
            />
            <Route
              path="/portfolio/metahealth"
              element={<PageProjectMetaHealth />}
            />

            {/* {portfolioData && portfolioData.map((project) => 
              <Route path={`/portfolio/${project.title.toLowerCase().split(" ").join("-")}`} element={<PageSinglePortfolio />}/>

            )
            } */}

            <Route path="/about" element={<PageAbout />} />
            <Route path="/techstack" element={<PageTechStack />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="/testimonials" element={<PageTestimonials />} />
            <Route path="/privacy-policy" element={<PagePrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
