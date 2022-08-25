import propTypes from "prop-types";
import { useState, useEffect } from "react";

export function useFetch(userId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!userId) return setLoading(true);

    const getData = () => {
      fetch("/user/" + userId, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
          setLoading(false);
        })
        .catch(() => {
          console.error("Error at fetch");
          setError(true);
          setLoading(false);
        });
    };

    getData();
  }, [userId]);

  return { data, loading, error };
}

useFetch.propTypes = {
  userId: propTypes.number.isRequired,
};
