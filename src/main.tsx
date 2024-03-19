import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";

import './index.css'

import About from './Pages/About/About';
import ErrorPage from './Pages/Error/ErrorPage';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import Services from './Pages/Services/Service';
import BradingService from './Pages/Services/SubPages/Branding/Branding';
import MarketingService from './Pages/Services/SubPages/Marketing/Marketing';
import EndomarketingService from './Pages/Services/SubPages/Endomarketing/Endomarketing';
import AudiovisualService from './Pages/Services/SubPages/Audiovisual/Audiovisual';
import AdsService from './Pages/Services/SubPages/Ads/Ads';
import ProgramaçãoService from './Pages/Services/SubPages/Programação/Programação';
import AcessoriaService from './Pages/Services/SubPages/Acessoria/Acessoria';
import MidiaService from './Pages/Services/SubPages/Midia/Midia';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <main className=''>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
            <Route path="/servicos/branding" element={<BradingService />} />
            <Route path="/servicos/marketing" element={<MarketingService />} />
            <Route path="/servicos/endomarketing" element={<EndomarketingService />} />
            <Route path="/servicos/audiovisual" element={<AudiovisualService />} />
            <Route path="/servicos/ads" element={<AdsService />} />
            <Route path="/servicos/programacao" element={<ProgramaçãoService />} />
            <Route path="/servicos/acessoria" element={<AcessoriaService />} />
            <Route path="/servicos/midia" element={<MidiaService />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
