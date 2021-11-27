import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import PageMain from './Pages/PageMain'
import PageCharacter from './Pages/PageCharacter';
import PageLocation from './Pages/PageLocation';
import Header from "./Components/Header";
import PageEpisode from './Pages/PageEpisode';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


      <BrowserRouter>
      <Header/>
        <Switch>

          <Route exact path="/pageLocation" component={PageLocation}/>
          <Route exact path="/pageCharacter" component={PageCharacter}/>
          <Route exact path="/pageEpisode" component={PageEpisode}/>
          <Route exact path="/" component={PageMain}/>
        </Switch>
      
      </BrowserRouter>
  );
}

export default App;
