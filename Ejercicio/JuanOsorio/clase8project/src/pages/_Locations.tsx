import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import HttpClient from '../helpers/HttpClient'

interface Location {
    name: string,
    type: string,
    dimension: string,
}

const _Locations = ({ children }: any) => {

    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState<number>(1);
    const loadLocationsRM = async () => {

        await HttpClient.get('/location/?page=' + page)
            .then((res) => {
                setLocations(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    const beforePage = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        loadLocationsRM();

    }, [page])

    return (
        <>
            <Header title="Locations" />
            {
                locations.length > 0 &&
                <>
                <div className="container__main">
                    <div className="container__link">
                        {locations.map((location: Location, j) => (
                            <div className="card">
                                <div>
                                    <h2>{location.name}</h2>
                                    <br />
                                    <h3>{location.type}</h3>
                                    <h3>{location.dimension}</h3>
                                    <br />
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="container__buttons">
                        <button onClick={() => beforePage()}>Atrás</button>
                        <button onClick={() => nextPage()}>Siguiente</button>
                    </div>
                </>
            }
        </>
    )
}

export default _Locations;