import React from 'react';
import './App.css';

import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import Assets from './routes/Assets'
import Entities from './routes/Entities'
import HeroBanner from './components/HeroBanner/HeroBanner'
import { StateProvider } from './store/store';


function App() {
  return (
    <StateProvider>
      <div className="App">
        <Router>
          <HeroBanner />
          <Switch>
            <Route exact path='/'> <Assets /> </Route>
            <Route path='/entity/:entityId'> <Entities /> </Route>
          </Switch>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
