import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  return (
    <div className="flex overflow-x-auto gap-8 px-3 pt-5 pb-5 movie-scroll">
      {movieList.map((item, index) => (
        <MovieCard key={index} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;