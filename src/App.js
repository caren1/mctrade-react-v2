import React from 'react';
import './App.css'

// REACT ROUTER IMPORTS
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

// COMPONENTS IMPORT
import { Navbar, Home, SingleOfferDetails, FooterComponent, SingleProjectDetails } from './components'

// DATA IMPORT
import offerJSONData from './mct-offer.json';
// import projectsJSONdata.f
// const example1 = offerJSONData[0];

import projectsJSONData from './mct-projects.json';
// const example1 = projectsJSONData[0];
// console.log( "initialzzzzzzzzzzz", example1);


// Components :
// - Navbar
// - HOME : { Info, Offer, Project, Info2 }
// - Info (O Firmie i Szukamy Współpracy - x2)
// - Offer -> SingleOffer -> SingleOfferDetails
// - Projects -> SingleProject -> SingleProjectDetails
// - Footer -> Contact Form

function App() {

  // route matcher for single offer
  const offerMatch = useRouteMatch('/offers/:id');
  const offer = offerMatch ? offerJSONData.find(offer => offer.id === Number(offerMatch.params.id)) : null;

  // route matcher for single project 
  const projectMatch = useRouteMatch('/projects/:id');
  const project = projectMatch ? projectsJSONData.find(project => project.id === Number(projectMatch.params.id)) : null;

  // functionality for comming back from details pages,
  const history = useHistory();
  const previousPageHandler = () => {
    history.goBack();
  }

  return (
    <Switch>

      <Route path="/offers/:id">
        <SingleOfferDetails offer={offer} backFromPage={previousPageHandler} />
      </Route>

      <Route path="/projects/:id">
        <SingleProjectDetails project={project} backFromPage={previousPageHandler}/>
      </Route>

      <Route path="/">
        <div className="app">
          <Navbar />
          <Home />
          <FooterComponent />
        </div>
      </Route>
      
    </Switch>
  );
}

export default App;
