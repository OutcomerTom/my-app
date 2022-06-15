import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

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

  const api = async () => {
    const data = await fetch(url, {
      method: "GET",
    });
    const jsonData = await data.json();
    setResults(jsonData.results);
    random();
  };

  useEffect(() => {
    api();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
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
      <Box m="1em">
        <img src={results[randomIndex]?.image} alt="" />
      </Box>
    </Box>
  );
};
