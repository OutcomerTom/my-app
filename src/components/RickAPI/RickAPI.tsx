import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";

type resultProps = {
  name: string;
  gender: string;
  species: string;
  image: string;
};

export const RickData = () => {
  const [results, setResults] = useState<resultProps[]>([]);
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const url = `https://rickandmortyapi.com/api/character`;

  const random = useCallback(() => {
    const arrayLength = results.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    console.log(randomIndex);
    setRandomIndex(randomIndex);
  }, [results]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(url, {
        method: "GET",
      });
      const jsonData = await data.json();
      setResults(jsonData.results);
      random();
    };

    api();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="RickPage">
      <h1>
        <div>
          <div>{results[randomIndex]?.name}</div>
        </div>
      </h1>
      <h2>
        <div>
          <div>gender: {results[randomIndex]?.gender}</div>
          <div>{results[randomIndex]?.species}</div>
        </div>
      </h2>
      <Button variant="contained" onClick={random}>
        Random
      </Button>
      <div>
        <br />
        <img src={results[randomIndex]?.image} alt="" />
      </div>
    </div>
  );
};