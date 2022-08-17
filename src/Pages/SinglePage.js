import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./SinglePage.css";
const SinglePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/" + id, {
        params: {
          api_key: "4b1ab8284d7999d94c42f9427e96b18c",
        },
      })
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="w-75 text-white mx-auto d-flex mt-5">
          <div className="single__page--box-one">
            <img
              className="single-movie-img"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`${movie.title}`}
            />
            <span
              onDoubleClick={(evt) => {
                if (evt.target == evt.target) {
                  evt.target.style.display = "none";
                }
              }}
              className="movie__id bg-primary"
            >
              {movie.id}
            </span>
          </div>
          <div>
            <h4 className="text-uppercase border-bottom">
              {" "}
              <span className="text-primary fs-4 fw-bold text-uppercase">
                Film name and language:
              </span>{" "}
              <span className="text-body">{movie.title}</span>
              <sup className="text-lowercase ms-2 text-danger">
                {movie.original_language}
              </sup>
            </h4>
            <p className="text-secondary">
              <h6 className="text-uppercase text-primary">Overview: </h6>
              {movie.overview}
            </p>
            <div className="d-flex align-items-center mb-2">
              <span>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <span className="text-primary"> {movie.popularity} </span>
              </span>
            </div>
            <p>
              <span className="text-primary">About film:</span>{" "}
              <span className="text-body">{movie.tagline}</span>
            </p>

            <p>
              {" "}
              <span className="text-primary">Date: </span>
              <span className="text-body">{movie.release_date}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
