import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Popular } from "./Pages/Popular";
import SinglePage from "./Pages/SinglePage";
import { UpComing } from "./Pages/UpComing";
import { TopRated } from "./Pages/TopRated";
import { NowPlaying } from "./Pages/NowPlaying";
import Search from "./Pages/Search";
import { TvShow } from "./Pages/TVShow";
const Private = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/upcoming" element={<UpComing />}></Route>
        <Route path="/toprated" element={<TopRated />}></Route>
        <Route path="/nowplaying" element={<NowPlaying />}></Route>
        <Route path="/search/:searchQuery" element={<Search />}></Route>
        <Route path="/tv-show/*" element={<TvShow />} ></Route>
        <Route path="/movie/:id" element={<SinglePage />}></Route>
      </Routes>
    </div>
  );
};

export default Private;
