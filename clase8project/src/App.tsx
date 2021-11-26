import React, { useEffect, useState } from 'react';
import HttpClient from './helpers/HttpClient'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLocation from './Pages/PageLocation';
import PageCharacter from './Pages/PageCharacter';
import PageMain from './Pages/PageMain';
import PrivateRoute from'./Pages/PrivateRoute';

interface Character {
  created: string,
  name: string,
  image: string
}

interface Location{
  name:string;
  type:string;
  image:string;
}

function App() {

  const [characters, setCharacters] = useState([]);
  const [locations , setLocations] = useState([]);

  const loadCharactersRM = async () => {

    await HttpClient.get('/character/?page=4')
      .then((res) => {
       setCharacters(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const loadLocationsRM = async () => {

    await HttpClient.get('/location/?page=4')
      .then((res) => {
        setLocations(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (

    <>
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/pageLocation" component={PageLocation}/>
        <Route exact path="/pageCharacter" component={PageCharacter}/>
        <Route exact path="/" component={PageMain}/>
      </Switch>
    </BrowserRouter>
    </>
   
  );
}

export default App;
