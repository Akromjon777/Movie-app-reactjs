import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Card } from "../components/Card/Card";
import PaginationMovies from "../components/Pagination/PaginationMovies";
export const NowPlaying = () => {
  const [films, setFilms] = useState({
    isLoading: true,
    isError: false,
    data: {},
    totalPage: 0,
  });

  const [active, setActive] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing/", {
        params: {
          api_key: "7650dce43cf362883db62975d4c44f76",
          page: active,
        },
      })
      .then(function (response) {
        setFilms({
          isLoading: false,
          isError: false,
          data: response.data.results,
          totalPage:
            response.data.total_pages > 500 ? 500 : response.data.total_pages,
        });
      })
      .catch(function (error) {
        setFilms({
          ...films,
          isLoading: false,
          isError: true,
        });
      });
  }, [active]);

  return (
    <>
      <div className="inner ps-5 pe-5">
        <h2 className="mb-5 mt-3">NowPlaying Movies Page</h2>
        {films.data.length && (
          <ul
            style={{ listStyle: "none" }}
            className="d-flex flex-wrap justify-content-between"
          >
            {films.data.map((film) => (
              <li key={film.id} className="mb-5 border border-5">
                <Card film={film} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <PaginationMovies total={films.totalPage} setActive={setActive} />
    </>
  );
};
