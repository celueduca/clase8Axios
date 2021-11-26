import React, { useEffect, useState } from 'react';
import HttpClient from './helpers/HttpClient'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Character from './pages/Character'
import Location from './pages/Location'
import Episode from './pages/Episode'
import Body from './pages/Body';
import NavBar from './components/NavBar'

function App() {
  return (
    <>  
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/character" component={Character}></Route>
          <Route exact path="/location" component={Location}></Route>
          <Route exact path="/episode" component={Episode}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
