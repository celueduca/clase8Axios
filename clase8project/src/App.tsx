import React, { useEffect, useState } from 'react';
import HttpClient from './helpers/HttpClient'

interface Character {
  created: string,
  name: string,
  image: string
}

function App() {

  const [characters, setCharacters] = useState([]);

  const loadCharactersRM = async () => {

    await HttpClient.get('/character/?page=2')
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCharactersRM();
  }, [])

  return (
    <>
      {
        characters.length > 0 &&
        <>
          {characters.map((character: Character, j) => (
            <>
              <h2>{character.name}</h2>
              <h3>{character.created}</h3>
              <img src={character.image} />
            </>
          ))}

          <button>Atrás</button>
          <button>Siguiente</button>
        </>
      }
    </>
  );
}

export default App;
