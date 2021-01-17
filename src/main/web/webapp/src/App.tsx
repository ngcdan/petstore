import React from 'react';
import { Route, Switch } from "react-router-dom";
import AboutPage from './about/AboutPage';
import { UICart } from './cart/UICart';
import Header from './common/Header';
import HomePage from './home/HomePage';
import { UIProductList } from './products/UIProducts';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={UIProductList} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={UICart} />
      </Switch>
    </div>
  );
}

export default App;
