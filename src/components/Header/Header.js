import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [InputVal, setInputVal] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (InputVal.trim().length) {
      navigate("/search/" + InputVal);
    } else {
      navigate("/");
    }
  }, [InputVal]);

  return (
    <div className="p-4 bg-primary d-flex justify-content-between">
      <div className="content">
        <NavLink
          className={`text-white ms-3 text-decoration-none fs-3 me-3 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={`text-white ms-3 text-decoration-none fs-3 me-3 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
          to="/popular"
        >
          Popular
        </NavLink>
        <NavLink
          className={`text-white ms-3 text-decoration-none fs-3 me-3 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
          to="/upcoming"
        >
          Upcoming
        </NavLink>
        <NavLink
          className={`text-white ms-3 text-decoration-none fs-3 me-3 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
          to="/toprated"
        >
          Top Rated
        </NavLink>
        <NavLink
          className={`text-white ms-3 text-decoration-none fs-3 me-3 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
          to="/nowplaying"
        >
          Now Playing
        </NavLink>
        <NavLink
          className={`text-white ms-3 text-decoration-none fs-3 me-3 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
          to="/tv-show"
        >
          TV-Show
        </NavLink>
      </div>
      <input
        onKeyUp={(evt) => setInputVal(evt.target.value)}
        className="form-control w-25 "
        placeholder="Search movies..."
      />
    </div>
  );
};

export default Header;
