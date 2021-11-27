import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layouts/Layout";
import httpClient from "../helpers/HttpClient";
import ButtonsNavigation from "../components/Buttons/ButtonsNavigation";
import { ILocation } from "../interfaces/ILocation";
import CardLocation from "../components/Locations/CardLocation";

interface IQueryState {
  [key: string]: string;
}

const Locations = () => {
  const { search } = useLocation();

  const [locations, setLocations] = useState<ILocation[]>([]);
  const [actualPage, setactualPage] = useState<string>("1");
  const [limitPages, setLimitPage] = useState<number>(0);

  const loadLocationsRM = async (queries: IQueryState) => {
    try {
      const response: any = await httpClient.get(
        `/location/?page=${queries["page"]}`
      );
      const data: ILocation[] = response.data.results;
      console.log(response);
      setLimitPage(response.data.info.pages);
      setLocations(data);
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
    if (formattedQueries) loadLocationsRM(formattedQueries);
  }, [search]);

  return (
    <Layout>
      <h2 className="Main-Title">Locations</h2>
      <ButtonsNavigation
        actualPage={actualPage}
        limitPages={limitPages}
        setactualPage={setactualPage}
        pathName="locations"
      ></ButtonsNavigation>
      <div className="container-fluid row">
        {locations.map((location, i) => (
          <CardLocation key={i} location={location}></CardLocation>
        ))}
      </div>
    </Layout>
  );
};

export default Locations;
