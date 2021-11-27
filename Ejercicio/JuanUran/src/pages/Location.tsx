import React, { useState, useEffect } from 'react'
import HttpClient from '../helpers/HttpClient'
import Layaout from '../components/Layout'

interface Location {
  name: string,
  type: string,
  dimension: string,
  img?: string
}

const Location = () => {

  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState<number>(1);

  const loadLocationRM = async () => {

    await HttpClient.get('/location/?page=' + page)
      .then((res) => {
        setLocations(res.data.results);
        console.log(res.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadLocationRM();
  }, [page])

  const loadNextPage = () => {
    setPage(page + 1);
  }
  const loadBeforePage = () => {
    setPage(page - 1);
  }

  return (
    <>
     <h1>Locations</h1>
      <Layaout>
        {
          locations.map((character: Location, i) => (
            <div className="card">

              <div className="container">
                <p><b>Name: {character.name}</b></p>
                <p><b>Type: {character.type}</b></p>
                <p><b>Dimension: {character.dimension}</b></p>
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

export default Location
