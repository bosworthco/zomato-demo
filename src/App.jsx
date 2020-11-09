import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from 'pages/Home';
import Styleguide from 'pages/Styleguide';

import 'styles/app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/styleguide">
          <Styleguide />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
