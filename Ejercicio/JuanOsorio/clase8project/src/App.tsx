import React, { useEffect, useState } from 'react';
import HttpClient from './helpers/HttpClient'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import _Characters from "./pages/_Characters";
import _Locations from "./pages/_Locations";
import _Episodes from "./pages/_Episodes";
import NotFound from "./components/NotFound";
import './styles/styles.css';

function App() {

  return (
    <>
      {
      <BrowserRouter>
      <Switch>
        <Route exact path="/Characters" component={_Characters}></Route>
        <Route exact path="/Locations" component={_Locations}></Route>
        <Route exact path="/Episodes" component={_Episodes}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      </BrowserRouter>
      }
    </>
  );
}

export default App;
