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
        <section>
          <div class="intro">
            <h1 className="heading">MC Trade Sp. z o.o.</h1>
            <p className="subheading">Usługi Ogólnobudowlane</p>
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
