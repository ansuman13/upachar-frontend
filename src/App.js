import React from 'react';
import Home from "./pages/Home";
import Login from './components/auth/Login/Login'
import { Route, Switch } from 'react-router-dom';
import Signup from './components/auth/Signup/Signup';
import TopProducts from './components/TopProducts/TopProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductList from './pages/ProductList/ProductList';

function App() {
  return (
    <div>
      <div className="App-routes">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup}/>
          <Route exact path='/top-products' component={TopProducts} />
          <Route path='/product/list' component={ProductList}/>
          <Route path='/products/details/:id' component={ProductDetails}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
