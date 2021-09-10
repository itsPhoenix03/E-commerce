import React from 'react';
import { Route } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';

import Home from './Components/Home';
import './Styles/main.scss';

function App() {
  return (
    <Route exact path="/">
      <Home />
    </Route>
  );
}

export default App;
