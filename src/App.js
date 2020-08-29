import React, {useContext} from 'react';
import './App.css';

import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import Assets from './routes/Assets'
import Entities from './routes/Entities'
import HeroBanner from './components/HeroBanner/HeroBanner'
import {store} from './store/store' 

function App() {
  const globalState = useContext(store);

  let nightmode = globalState.state.nightmode ? "App-nightmode" : "App-daymode"

  return (
      <div className={`App ${nightmode}`}>
        <Router>
          <HeroBanner />
          <Switch>
            <Route exact path='/'> <Assets /> </Route>
            <Route path='/entity/:entityId'> <Entities /> </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
