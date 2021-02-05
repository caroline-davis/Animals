import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path='/contact'><Contact /></Route>
        <Route exact path='/'><Home /></Route>
      </Switch>
    </Router>
  )
}

export default App;
