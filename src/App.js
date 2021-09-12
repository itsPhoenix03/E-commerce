import React from 'react';
import { Switch, Route } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';

import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Checkout from './Pages/Checkout';
import './Styles/main.scss';

function App() {
  return (
    <div className="bg-black-02">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Categories/:id" exact>
          <Categories />
        </Route>

        <Route path="/Checkout" exact>
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
