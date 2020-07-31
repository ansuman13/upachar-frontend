import React from 'react';
import Home from "./pages/Home";
import Login from './components/auth/Login/Login'
import { Route, Switch } from 'react-router-dom';
import Signup from './components/auth/Signup/Signup';
import TopProducts from './components/TopProducts/TopProducts';

function App() {
  return (
    <div>
      <div className="App-routes">
        <Switch>

          <Route exact path='/top-products' component={TopProducts} />
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
