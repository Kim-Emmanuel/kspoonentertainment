import React from 'react'
import smoothscroll from 'smoothscroll-polyfill';

import { About, Footer, Header, Work, Services, Events, Contact } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Services />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

smoothscroll.polyfill();
export default App;