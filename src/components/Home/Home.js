import React from 'react'
import './Home.css'

import { Info, Offer, Projects } from '../.'

// import offerJSONData from '../../mct-offer.json';
import infoJSONData from '../../mct-info.json';

const [ info1, info2 ] = infoJSONData;

const Home = () => {
    return (
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

          <section title="info1" id="info1">
            <Info title={info1.title} text={info1.text} subtext={info1.subtext}/>
          </section>

          <section title="offer" id="offer">
            <Offer />
          </section>

          <section title="projects" id="projects" style={{  scrollSnapAlign: 'start' }}>
            <Projects />
          </section>

          <section title="info2" id="info2">
            <Info title={info2.title} text={info2.text} subtext={info2.subtext}/>
          </section>
        </main>
    )
}

export default Home
