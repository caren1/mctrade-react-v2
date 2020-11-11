import React from 'react';
import './App.css'

import { Navbar, Info, Offer } from './components'

// Components :
// - Navbar
// - Button
// - Info (o firmie i szukamy współpracy)
// - Offer -> SingleOffer -> SingleOfferDetails
// - Projects -> SingleProject -> SingleProjectDetails
// - Footer -> Contact Form

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="intro-section">
          <div className="intro">
            <h1 className="heading">MC Trade Sp. z o.o.</h1>
            <p className="subheading">Usługi Ogólnobudowlane</p>
          </div>
          <div className="intro-mobile">
            <div className="logo-container">
              <img src="../assets/icons/mct-logo.svg" alt="main-logo" />
            </div>
            <div className="arrow">
                <span></span>
            </div>
          </div>
        </section>
        <section>
          <Info />
        </section>
        <section>
          <Offer />
        </section>
      </main>
    </div>
  );
}

export default App;
