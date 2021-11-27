import React, { useEffect, useState } from 'react';
import HttpClient from '../helpers/HttpClient'
import Layaout from '../components/Layout'

interface Episode {
    name: string,
    air_date: string,
    episode: string,
    image?: string
}

const Episode = () => {

    const [episodes, setEpisode] = useState([]);
    const [page, setPage] = useState<number>(1);

    const loadEpisodeRM = async () => {

        await HttpClient.get('/episode/?page=' + page)
            .then((res) => {
                setEpisode(res.data.results);
                console.log(res.data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        loadEpisodeRM();
    }, [page])

    const loadNextPage = () => {
        setPage(page + 1);
    }
    const loadBeforePage = () => {
        setPage(page - 1);
    }

    return (
        <>
            <h1>Episodes</h1>
            <Layaout>
                {
                    episodes.map((episode: Episode, i) => (
                        <div className="card">
                            <div className="container">
                                <p><b>Name: {episode.name}</b></p>
                                <p><b>Air date: {episode.air_date}</b></p>
                                <p><b>Episode: {episode.episode}</b></p>
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

export default Episode
