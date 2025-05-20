import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight, HiPlay, HiInformationCircle } from "react-icons/hi";

const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
    setCurrentIndex(prev => (prev + 1) % movieList.length);
  };
  
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
    setCurrentIndex(prev => (prev - 1 + movieList.length) % movieList.length);
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-[40px] absolute
        left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer
        hover:scale-125 transition-all duration-300 ease-in-out"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[40px] absolute
        right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer
        hover:scale-125 transition-all duration-300 ease-in-out"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div className="relative">
        <div
          className="flex overflow-x-hidden w-full scrollbar-none scroll-smooth"
          ref={elementRef}
        >
          {movieList.map((item, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={IMAGE_BASE_URL + item.backdrop_path}
                className="w-full h-[400px] md:h-[600px] object-cover"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(20,20,20,0.6)] to-[#141414]" />
              <div className="absolute bottom-[20%] left-16 right-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{item.title || item.name}</h1>
                <p className="text-lg max-w-[50%] mb-6 line-clamp-3">{item.overview}</p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-opacity-80 transition-all">
                    <HiPlay className="text-2xl" /> Play
                  </button>
                  <button className="flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-40 transition-all">
                    <HiInformationCircle className="text-2xl" /> More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;