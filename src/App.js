import React from 'react';
import './App.css'

import { Navbar } from './components'

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
    </div>
  );
}

export default App;
