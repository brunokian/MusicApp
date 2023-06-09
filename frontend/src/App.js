import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './pages/Search';
import Login from './pages/Login';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Provider from './context/Provider';

import './App.css'


function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/album/:id'component={Album}/>
        <Route exact path='/favorites/:user' component={Favorites}/>
        <Redirect from='/' to='/login' />
      </Switch>
    </Provider>
  );
}

export default App;
