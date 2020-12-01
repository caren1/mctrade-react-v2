import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css'

// REACT ROUTER IMPORTS
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

// COMPONENTS IMPORT
import { Navbar, Home, SingleOfferDetails, FooterComponent, SingleProjectDetails } from './components'

// DATA IMPORT
import offerJSONData from './mct-offer.json';
import projectsJSONData from './mct-projects.json';

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
        <SimpleReactLightbox>
          <SingleOfferDetails offer={offer} backFromPage={previousPageHandler} />
        </SimpleReactLightbox>
      </Route>

      <Route path="/projects/:id">
        <SimpleReactLightbox>
          <SingleProjectDetails project={project} backFromPage={previousPageHandler}/>
        </SimpleReactLightbox>
      </Route>

      <Route path="/">
        <div className="app">
          <Navbar />
          <Home />
          <FooterComponent />
        </div>
      </Route>
      
      <Route render={() => (
        <div className="app">
          <Navbar />
          <Home />
          <FooterComponent />
        </div>
      )}></Route>

    </Switch>
  );
}

export default App;
