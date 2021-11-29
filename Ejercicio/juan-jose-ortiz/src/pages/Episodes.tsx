import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Layout from "../layouts/Layout";
import { IEpisodes } from "../interfaces/IEpisodes";
import httpClient from "../helpers/HttpClient";
import ButtonsNavigation from "../components/Buttons/ButtonsNavigation";
import CardEpisodes from "../components/Episodes/CardEpisodes";

interface IQueryState {
  [key: string]: string;
}

const Episodes = () => {
  const { search } = useLocation();
  const [episodes, setEpisodes] = useState<IEpisodes[]>([]);
  const [actualPage, setactualPage] = useState<string>("1");
  const [limitPages, setLimitPage] = useState<number>(0);

  const loadEpisodesRM = async (queries: IQueryState) => {
    try {
      const response: any = await httpClient.get(
        `/episode/?page=${queries["page"]}`
      );
      const data: IEpisodes[] = response.data.results;
      setLimitPage(response.data.info.pages);
      console.log(data)
      setEpisodes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const replaceFirstCharacter = search.replace("?", "");
    const splitString = replaceFirstCharacter.split("&");
    const formattedQueries = {} as IQueryState;
    splitString.forEach((query) => {
      const [key, value] = query.split("=");
      Object.assign(formattedQueries, {
        [key]: value,
      });
    });
    setactualPage(formattedQueries.page);
    if (formattedQueries) loadEpisodesRM(formattedQueries);
    return () => {};
  }, [search]);

  return (
    <Layout>
      {episodes.length > 0 ? (
        <>
          <h2 className="Main-Title"> Episodes</h2>
          <ButtonsNavigation
            actualPage={actualPage}
            limitPages={limitPages}
            setactualPage={setactualPage}
            pathName="episodes"
          ></ButtonsNavigation>
          <div className="container-fluid row">
            {episodes &&
              episodes.map((episode, i) => (
                <CardEpisodes key={i} episode={episode}></CardEpisodes>
              ))}
          </div>
          <ButtonsNavigation
            actualPage={actualPage}
            limitPages={limitPages}
            setactualPage={setactualPage}
            pathName="episodes"
          ></ButtonsNavigation>
        </>
      ) : (
        <>
          <p>Loading Characters</p>
        </>
      )}
    </Layout>
  );
};

export default Episodes;
