import React from 'react';
import logo from './logo.svg';
import './App.css';
import Locations from './components/Cardlist/ListLocations';
import Home from './components/HomePage/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListCharacters from './components/Cardlist/ListCharactetrs';
import ListEpisodes from './components/Cardlist/ListEpisodes';
import DetailCaracters from './components/card/Character';
const App =() => {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component ={Home}/>
      <Route exact path="/Characters" component={ListCharacters}/>
      <Route exact path="/Character/:id" component= {DetailCaracters}/>
      <Route exact path="/Locations" component={Locations}/>
      <Route exact path="/Episodes" component={ListEpisodes}/>
      



      
      


    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
