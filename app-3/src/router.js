import React from "react";
import { Switch, Route } from "react-router-dom";
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import App from './App'


export default (
  <Switch>
      <Route exact path="/" component={App} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact}/>
  </Switch>
)