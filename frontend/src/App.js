import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './pages/Search';
import Login from './pages/Login';
import Album from './pages/Album';
import Favorites from './pages/Favorites';


function App() {
  return (
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/album/:id'component={Album}/>
      <Route exact path='/favorites' component={Favorites}/>
      <Redirect from='/' to='/login' />
    </Switch>
  );
}

export default App;
