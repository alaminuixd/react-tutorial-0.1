import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("The data url is invalid");
          }
          return response.json();
        })
        .then((data) => {
          setData((prev) => data);
          isLoading(false);
        })
        .catch((err) => {
          setError((prev) => err.message);
          isLoading(false);
        });
    }, 3000);
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
