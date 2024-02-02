import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";

import './index.css'

import About from './Pages/About/About';
import ErrorPage from './Pages/Error/ErrorPage';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import Header from './components/Header/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <main className=''>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<About />} />
          <Route path="/fale-conosco" element={<About />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
