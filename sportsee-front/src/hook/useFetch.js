import { useState, useEffect } from "react";

/**
 * @description React hook to fetch datas
 * @property {function} useFetch
 * @param { String } url - URL containing data to fetch
 * @returns { {data: Array, loading: Boolean, error: Boolean} } data: array containing fetched data, loading: boolean- Is datas loaded or not? , error: boolean -
 * Is error occurring or not?
 */
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      //Lorsque mes éléments sont chargés :
      setLoading(true);
      try {
        //J'affiche mes données par le biais de ma méthode Fetch()
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
        }
        const data = await response.json();
        setData(data.data);
        //Si erreur :
      } catch (error) {
        console.error("Error at fetch: ", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
}
