import React from 'react'
import { Route, Switch } from "react-router-dom";
import FirstPage from '../FirstPage'
import Admin from '../Admin';

export default function Router() {
    return (
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/admin" component={Admin} />
      </Switch>
    )
}
