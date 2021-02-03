import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Greeting from './pages/Greeting';
import Products from './pages/Products';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Greeting} />
      <Route path="/shop" component={Products} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}
