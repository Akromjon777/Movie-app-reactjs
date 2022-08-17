import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
export const TvShow = () => {
  const [films, setFilms] = useState({});
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/popular", {
        params: {
          api_key: "41b484f8ece1bd6a810cc673410dd71f",
        },
      })
      .then(function (response) {
        setFilms(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="box">
      <div className="container">
        {films.length ? (
          <ul
            style={{ listStyle: "none" }}
            className="d-flex flex-wrap justify-content-between"
          >
            {films.map((film) => (
              <li key={film.id} className="mb-5 border border-5">
                <Card film={film}/>
              </li>
            ))}
          </ul>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
};
