import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './pages/Search';
import Login from './pages/Login';
import Album from './pages/Album';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/album/:id'component={Album}/>
    </Switch>
  );
}

export default App;
