import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './common/Header';
import HomePage from './home/HomePage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
