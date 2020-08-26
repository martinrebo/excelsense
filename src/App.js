import React from 'react';
import './App.css';

import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import Assets from './routes/Assets'
import Entities from './routes/Entities'
import Menu from './components/Menu'


function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Switch>
          <Route exact path='/'> <Assets /> </Route>
          <Route path='/entity/:entityId'> <Entities /> </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
