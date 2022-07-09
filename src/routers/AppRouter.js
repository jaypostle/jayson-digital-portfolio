import '../styles/style.scss';
import portfolioData from '../assets/data/portfolioData';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import PageHome from '../Pages/PageHome';
import PageContact from '../Pages/PageContact';
import PageAbout from '../Pages/PageAbout';
import PagePortfolio from '../Pages/PagePortfolio';
import PageSinglePortfolio from '../Pages/PageSinglePortfolio';

import PageTechStack from '../Pages/PageTechStack';
import PagePrivacyPolicy from '../Pages/PagePrivacyPolicy';

import PageTestimonials from '../Pages/PageTestimonials';

function AppRouter() {

  useEffect(() => {
    document.title = "Jayson | Portfolio"
  }, [])

  return (
    <BrowserRouter >
      <div className='wrapper'>
        <div className="App-header">
          <Header />
        </div>
        <main>
          <Routes>
            <Route path='/' element={<PageHome />}/>
            <Route path='/portfolio' element={<PagePortfolio />}/>
            {/* <Route path='/portfolio/:id' element={<PageSinglePortfolio />}/> */}

            {portfolioData && portfolioData.map((project) => 
              <Route path={`/portfolio/${project.title.toLowerCase().split(" ").join("-")}`} element={<PageSinglePortfolio />}/>

            )
            }

            <Route path='/about' element={<PageAbout />}/>
            <Route path='/techstack' element={<PageTechStack />}/>
            <Route path='/contact' element={<PageContact />}/>
            <Route path='/testimonials' element={<PageTestimonials />}/>
            <Route path='/privacy-policy' element={<PagePrivacyPolicy />}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
