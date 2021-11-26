import React, { useEffect, useState } from 'react';
import HttpClient from '../helpers/HttpClient'
import Layaout from '../components/Layout'

interface Character {
  name: string,
  gender: string,
  species: string,
  image: string
}
const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState<number>(1);

  const loadCharactersRM = async () => {

    await HttpClient.get('/character/?page=' + page)
      .then((res) => {
        setCharacters(res.data.results);
        console.log(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCharactersRM();
  }, [page])

  const loadNextPage = () => {
    setPage(page + 1);
  }
  const loadBeforePage = () => {
    setPage(page - 1);
  }


  return (

    <>
      <h1>Characters</h1>
      <Layaout>
        {
          characters.map((character: Character, i) => (
            <div className="card">
              <img src={character.image} alt="Avatar" />
              <div>
                <p><b>Name: {character.name}</b></p>
                <p><b>Gender: {character.gender}</b></p>
                <p><b>Specie: {character.species}</b></p>
              </div>
            </div>
          ))
        }
      </Layaout>
      <div className="container-buttons">
        <button onClick={() => loadBeforePage()} disabled={page == 1}>Anterior</button>
        <button onClick={() => loadNextPage()}>Siguiente</button>
      </div>
    </>
  )
}

export default Character
