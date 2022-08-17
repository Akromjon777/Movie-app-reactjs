import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationMovies = ({total, setActive}) => {
  return (
    <Pagination
      onClick={(evt) => setActive(evt.target.innerText)}
      className="d-flex justify-content-center m-5"
      count={total}
      color="primary"
    />
  );
};

export default PaginationMovies;
