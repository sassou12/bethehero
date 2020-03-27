import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Container } from './styles';

import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register';

function NotFound() {
  return (<h1>Hero Not Found. No Hope.</h1>);
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
