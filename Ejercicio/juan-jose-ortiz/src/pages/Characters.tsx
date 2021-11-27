import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ICharacter } from "../interfaces/ICharacter";
import httpClient from "../helpers/HttpClient";
import Layout from "../layouts/Layout";
import CardCharacter from "../components/Characters/CardCharacter";
import ButtonsNavigation from "../components/Buttons/ButtonsNavigation";

interface IQueryState {
  [key: string]: string;
}

const Characters = () => {
  const { search } = useLocation();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [actualPage, setactualPage] = useState<string>("1");
  const [limitPages, setLimitPage] = useState<number>(0);

  const loadCharactersRM = async (queries: IQueryState) => {
    try {
      const response: any = await httpClient.get(
        `/character/?page=${queries["page"]}`
      );
      const data: ICharacter[] = response.data.results;
      setLimitPage(response.data.info.pages);
      console.log(characters)
      setCharacters(data);
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
    if (formattedQueries) loadCharactersRM(formattedQueries);
    return () => {};
  }, [search]);

  return (
    <Layout>
      {characters.length > 0 ? (
        <>
          <h2 className="Main-Title">Characters</h2>
          <ButtonsNavigation
            actualPage={actualPage}
            limitPages={limitPages}
            setactualPage={setactualPage}
            pathName="characters"
          ></ButtonsNavigation>
          <div className="container-fluid row">
            {characters &&
              characters.map((character, i) => (
                <CardCharacter key={i} character={character}></CardCharacter>
              ))}
          </div>
          <ButtonsNavigation
            actualPage={actualPage}
            limitPages={limitPages}
            setactualPage={setactualPage}
            pathName="characters"
          ></ButtonsNavigation>
        </>
      ) : (
        <p>Loading Characters</p>
      )}
    </Layout>
  );
};

export default Characters;
