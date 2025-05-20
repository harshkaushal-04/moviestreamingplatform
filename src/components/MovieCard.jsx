import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative group">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg
        group-hover:border-[3px] border-gray-400 cursor-pointer
        group-hover:scale-110 transition-all duration-300 ease-in-out"
        alt={movie.title}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-80">
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;