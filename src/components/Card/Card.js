import "./Card.css";
import { Link } from "react-router-dom";
export const Card = ({ film }) => {
  return (
    <div className="card">
      <Link className="text-decoration-none text-white" to={`/movie/${film.id}`}>
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.original_title}
        />
        <div className="card-info p-3">
          <h3 className="card-title">{film.original_title}</h3>
          <p className="card-overview">{film.overview}</p>
          <span className="card-data">{film.release_date}</span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};
