import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong! Invalid URL.");
        }
        return response.json();
      })
      .then((data) => {
        setData((prev) => data);
        setIsLoading(false);
        setIsErr(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr(err.message);
      });
  }, []);
  return { isLoading, isErr, data };
}

export default useFetch;
