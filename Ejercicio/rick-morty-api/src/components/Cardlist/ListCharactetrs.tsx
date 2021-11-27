import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import httpClient from "../../helpers/HttpClient";
import Characters from "../card/Characters";
import { IQueryState } from "../interface/Iquerystate";
import Layout from "../Layout/Index";
import "./ListCharacters.css";
import footer from "../img/title.png";
import Buttons from "../Paginator/buttons";

const ListCharacters = () => {
  const [characters, setCharacters] = useState<any>([]);
  const { search } = useLocation();
  const [actualpage, setActualPage] = useState<string>("1");
  const [limit, setLimit] = useState<number>(0);
  const loadCharacters = async (params: IQueryState) => {
    const data = await httpClient.get(`/character/?page=${params.page}`);

    setCharacters(data.data.results);
    setLimit(data.data.info.pages);
    console.log(characters);
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
    loadCharacters(params);
  }, [search]);

  return (
    <>
      <Layout>
        <div className="hero">
          <div className="wrapper">
            <img src={footer} alt="Cargando imagen..." />
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-1">
              <Characters characters={characters} />
            </div>
          </div>
          <Buttons
            actualPage={actualpage}
            limitPages={42}
            setactualPage={setActualPage}
            pathName="characters"
          />
        </div>
      </Layout>
    </>
  );
};

export default ListCharacters;
