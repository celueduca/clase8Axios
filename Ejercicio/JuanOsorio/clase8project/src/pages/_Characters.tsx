import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import HttpClient from '../helpers/HttpClient'
import Layout from "../components/Layout";
import Header from "../components/Header";

interface Character {
    name: string,
    image: string,
    status: string,
    species: string;

}

const _Characters = ({ childen }: any) => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState<number>(1);
    const loadCharactersRM = async () => {

        await HttpClient.get('/character/?page=' + page)
            .then((res) => {
                setCharacters(res.data.results);
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
        loadCharactersRM();

    }, [page])


    return (
        <>
            <Header title="Characters" />

            {
                characters.length > 0 &&
                <>
                    <div className="container__main">
                        <div className="container__link">
                            {characters.map((character: Character, j) => (
                                <div className="card">
                                    <img src={character.image} />
                                    <h2>{character.name}</h2>
                                    <br />
                                    <h3>{character.species}</h3>
                                    <h3>{character.status}</h3>
                                    <br />
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

export default _Characters;
