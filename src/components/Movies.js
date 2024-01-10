import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import ratingIcon from "../rating-icon.png";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  //handle watchlist methods

  const addToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem("imdb", JSON.stringify(newWatchList));
  };

  const removeFromWatchList = (movie) => {
    const filteredWatchList = watchList.filter((m) => {
      return m.id != movie.id;
    });

    setWatchList(filteredWatchList);
    localStorage.setItem("imdb", JSON.stringify(filteredWatchList));
  };

  // on click of next button of pagination
  let onNext = () => {
    setPageNum(pageNum + 1);
  };

  let onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  // Fetch API Data
  useEffect(() => {
    (function () {
      let moviesFromLS = localStorage.getItem("imdb");
      moviesFromLS = JSON.parse(moviesFromLS) || [];
      setWatchList(moviesFromLS);

      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=ed9945885ba0c6f7a7edc57b379191ae&page=${pageNum}`
        )
        .then((res) => {
          setMovies(res.data.results);
          console.log(res.data.results);
        });
    })();
  }, [pageNum]);

  return (
    <section>
      <h1 className="text-center font-bold text-2xl m-8 underline decoration-double">
        Trending Movies
      </h1>
      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div className="movie-card-container w-[200px]">
              <div
                key={movie.id}
                className="movie-card h-[35vh] bg-center bg-cover m-3 rounded-xl md:h[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
                }}>
                {/* Show hide add to watch list button  */}

                <div className="watchList-action-btn">
                  {watchList.includes(movie) ? (
                    <div
                      onClick={() => removeFromWatchList(movie)}
                      className="text-2xl bg-gray-900 rounded-2xl absolute right-2 top-2 h-8 w-8 text-center text-red-600">
                      ✖
                    </div>
                  ) : (
                    <div
                      onClick={() => addToWatchList(movie)}
                      className="text-2xl bg-gray-900 rounded-2xl absolute right-2 top-2 h-8 w-8 text-center">
                      😍
                    </div>
                  )}
                </div>

                {/* Show hide add to watch list button  */}
              </div>
              <div>
                <div className="text-center w-full">
                  <p>
                  <img
                    src={ratingIcon}
                    alt="rating icon"
                    className="inline w-6"
                  />
                  {Math.round(movie.vote_average*10)/10}
                  </p>
                  {movie.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination pageno={pageNum} onNext={onNext} onPrev={onPrev} />
    </section>
  );
}

export default Movies;
