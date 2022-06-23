import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import PageHome from '../Pages/PageHome';
import PageContact from '../Pages/PageContact';
import PageAbout from '../Pages/PageAbout';
import PagePortfolio from '../Pages/PagePortfolio';
import PageTechStack from '../Pages/PageTechStack';

import PageTestimonials from '../Pages/PageTestimonials';


import '../App.css';

function AppRouter() {

  useEffect(() => {
    document.title = "Jayson | Portfolio"
  }, [])

  return (
    <BrowserRouter >
      <div className='wrapper'>
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<PageHome />}/>
            <Route path='/portfolio' element={<PagePortfolio />}/>
            <Route path='/about' element={<PageAbout />}/>
            <Route path='/techstack' element={<PageTechStack />}/>
            <Route path='/contact' element={<PageContact />}/>
            <Route path='/testimonials' element={<PageTestimonials />}/>

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
