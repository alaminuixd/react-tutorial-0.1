import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid URL! Data loading failed.");
        }
        return response.json();
      })
      .then((data) => {
        setData((prev) => data);
        setIsErr(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsErr((prev) => err.message);
      });
  }, [url]);
  return { isLoading, isErr, data };
}

export default useFetch;
