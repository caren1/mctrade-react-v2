import React from 'react';
import './App.css'

import { Navbar, Info, Offer, SingleOfferDetails } from './components'
import offerJSONData from './mct-offer.json';
const example1 = offerJSONData[0];
const example2 = offerJSONData[1];
const example3 = offerJSONData[2];
const example4 = offerJSONData[3];
const example5 = offerJSONData[4];

console.log(example1);


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
        <section>
          <SingleOfferDetails />
          {/* <SingleOfferDetails offer={example2}/>
          <SingleOfferDetails offer={example3}/>
          <SingleOfferDetails offer={example4}/>
          <SingleOfferDetails offer={example5}/> */}
        </section>
      </main>
    </div>
  );
}

export default App;
