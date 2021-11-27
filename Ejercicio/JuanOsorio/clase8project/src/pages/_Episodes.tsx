import React, { useEffect, useState } from 'react';
import HttpClient from '../helpers/HttpClient'
import Header from '../components/Header';


interface Episode {
    name: string,
    air_date: string,
    episode: string
}

const _Episodes = () => {

    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState<number>(1);
    const loadEpisodesRM = async () => {

        await HttpClient.get('/episode/?page=' + page)
            .then((res) => {
                setEpisodes(res.data.results);
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
        loadEpisodesRM();

    }, [page])
    return (
        <>
            <Header title="Episodes" />
            {
                episodes.length > 0 &&
                <>
                    <div className="container__main">
                        <div className="container__link">
                            {episodes.map((episode: Episode, j) => (
                                <div className="card">
                                    <h2>{episode.name}</h2>
                                    <br />
                                    <h3>{episode.air_date}</h3>
                                    <h3>{episode.episode}</h3>
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

export default _Episodes;
