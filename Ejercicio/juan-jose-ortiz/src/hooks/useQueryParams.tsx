import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";

interface IQueryState {
    [key: string] : string;
}

const useQueryParams = () => {

  const [queries, setQueries] = useState<IQueryState>({} as IQueryState) ;
  const { search } = useLocation();

  const onDecodeParams = useCallback((params: string) => {
    const replaceFirstCharacter = params.replace('?', '');
    const splitString = replaceFirstCharacter.split('&')
    const formattedQueries = {} as IQueryState
    splitString.forEach(query => {
        const [key, value] = query.split('=');
        Object.assign(formattedQueries, {
            [key] : value
        })
    })
    setQueries(formattedQueries)
  }, []);

  useEffect(() => {
    if (search.trim()) {
      onDecodeParams(search);
    }
  }, [search, onDecodeParams]);

  return {
    queries
  };
};

export default useQueryParams;
