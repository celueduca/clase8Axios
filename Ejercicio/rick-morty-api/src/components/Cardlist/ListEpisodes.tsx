import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import httpClient from "../../helpers/HttpClient";
import Episodes from "../card/Episodes";
import { IQueryState } from "../interface/Iquerystate";
import Layout from "../Layout/Index";
import footer from "../img/Locationremovebg.png";
import Buttons from "../Paginator/buttons";

const ListEpisodes = () => {
  const [episodes, setEpisodes] = useState<any>([]);
  const { search } = useLocation();
  const [actualpage, setActualPage] = useState<string>("1");
  const [limit, setLimit] = useState<number>(0);
  const loadEpisode = async (params: IQueryState) => {
    const data = await httpClient.get(`/episode/?page=${params.page}`);

    setEpisodes(data.data.results);
    setLimit(data.data.info.pages);
    console.log(episodes);
  };
  const getQueryParams = () => {
    const replaceFirstCharacter = search.replace("?", "");
    const splitString = replaceFirstCharacter.split("&");
    const formattedQueries = {} as IQueryState;
    splitString.forEach((query) => {
      const [key, value] = query.split("=");
      Object.assign(formattedQueries, {
        [key]: value,
      });
    });
    setActualPage(formattedQueries.page);
    return formattedQueries;
  };

  useEffect(() => {
    const params = getQueryParams();
    loadEpisode(params);
  }, [search]);
  return (
    <>
      <Layout>
        <div className="hero">
          <div className="wrapper-episode">
            <img className="App-logo" src={footer} alt="Cargando imagen..." />
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-1">
              <Episodes episodes={episodes} />
            </div>
          </div>
          <Buttons
            actualPage={actualpage}
            limitPages={limit}
            setactualPage={setActualPage}
            pathName="episodes"
          />
        </div>
      </Layout>
    </>
  );
};

export default ListEpisodes;
