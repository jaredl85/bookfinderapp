import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Home.js";
import SingleBook from './SingleBook';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/:id'>
          <SingleBook />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
