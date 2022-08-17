import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/Card/Card";
import PaginationMovies from "../components/Pagination/PaginationMovies";
import useDebounce from "../hooks/useDebounce";
const Search = () => {
  const { searchQuery } = useParams();
  const debouncedValue = useDebounce(searchQuery,500)
  const [movies, setMovies] = useState({
    isLoading: true,
    isError: false,
    data: {},
    totalPage: 0,
  });

  const [active, setActive] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "4b1ab8284d7999d94c42f9427e96b18c",
          page: active,
          query: debouncedValue,
        },
      })
      .then(function (response) {
        setMovies({
          isLoading: false,
          isError: false,
          data: response.data.results,
          totalPage:
            response.data.total_pages > 500 ? 500 : response.data.total_pages,
        });
      })
      .catch(function (error) {
        setMovies({
          ...movies,
          isLoading: false,
          isError: true,
        });
      });
  }, [debouncedValue, active]);

  return (
    <div className="ps-5 pe-5 mt-4">
      {movies.data.length && (
        <ul
          style={{ listStyle: "none" }}
          className="d-flex flex-wrap justify-content-between"
        >
          {movies.data.map((film) => (
            <li className="mb-5 border border-5" key={film.id}>
              <Card film={film} />
            </li>
          ))}
        </ul>
      )}
      <PaginationMovies total={movies.totalPage} setActive={setActive}></PaginationMovies>
    </div>
  );
};

export default Search;
