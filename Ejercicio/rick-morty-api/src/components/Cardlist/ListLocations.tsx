import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import httpClient from "../../helpers/HttpClient";
import Location from "../card/Locattion";
import { IQueryState } from "../interface/Iquerystate";
import Layout from "../Layout/Index";
import footer from "../img/Footer-1-removebg-preview.png";
import Buttons from "../Paginator/buttons";

const Locations = () => {
  const [location, setLocation] = useState<any>([]);
  const { search } = useLocation();
  const [actualpage, setActualPage] = useState<string>("1");
  const [limit, setLimit] = useState<number>(0);
  const loadEpisode = async (params: IQueryState) => {
    const data = await httpClient.get(`/location/?page=${params.page}`);

    setLocation(data.data.results);
    setLimit(data.data.info.pages);
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
            <img src={footer} alt="Cargando imagen..." />
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-1">
              <Location  locations={location} />
            </div>
          </div>
          <Buttons
            actualPage={actualpage}
            limitPages={limit}
            setactualPage={setActualPage}
            pathName="locations"
          />
        </div>
      </Layout>
    </>
  );
};

export default Locations;
