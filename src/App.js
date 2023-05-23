import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './pages/Search';
import Login from './pages/Login';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/search' component={Search}/>
    </Switch>
  );
}

export default App;
