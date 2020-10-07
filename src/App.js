import React from 'react';
import Home from "./pages/Home";
import Login from './components/auth/Login/Login'
import { Route, Switch } from 'react-router-dom';
import Signup from './components/auth/Signup/Signup';
import TopProducts from './components/TopProducts/TopProducts';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProductList from './pages/ProductList/ProductList';

function App() {
  // const getProduct = props => {
  //   let id = props.match.params.name;
  //   return <ProductDetails {...props} id={id} />;
  // };

  return (
    <div>
      <div className="App-routes">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route exact path='/top-products' component={TopProducts} />
          <Route path='/product/list' render={(routeProps)=> <ProductList key={Date.now()} {...routeProps} />} />
          <Route exact path='/products/details/:id' render={(props) => <ProductDetails key={Date.now()} {...props} id={props.match.params.id} />} />
          <Route render={(props) => <h1>404, Page Not Found!</h1> }/>
        </Switch>
      </div>
      </div>
  );
}

export default App;
