import React, { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  //handle watchlist methods

  let addToWatchList = (id) => {
    const newWatchList = [...watchList, id];
    setWatchList(newWatchList);
  };

  let removeFromWatchList = (id) => {
    let filteredWatchListId = watchList.filter((watchListId) => {
      return watchListId != id;
    });
    setWatchList(filteredWatchListId);
  };

  console.log(watchList);

  // Fetch API Data
  useEffect(() => {
    let apidata = axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b89e54038c0e12872e466eaa3ccfb7cb"
    );
    apidata.then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  return (
    <section>
      <h1 className="text-center font-bold text-2xl m-8 underline decoration-double">
        Trending Movies
      </h1>
      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="w-[200px] h-[35vh] bg-center bg-cover m-3 rounded-xl md:h[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}>
              <p className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </p>
              {/* Show hide add to watch list and remove from watch list button  */}

              {watchList.includes(movie.id) ? (
                <div
                  onClick={() => removeFromWatchList(movie.id)}
                  className="text-2xl bg-gray-900 rounded-2xl absolute right-2 top-2 h-8 w-8 text-center text-red-600">
                  ✖
                </div>
              ) : (
                <div
                  onClick={() => addToWatchList(movie.id)}
                  className="text-2xl bg-gray-900 rounded-2xl absolute right-2 top-2 h-8 w-8 text-center">
                  😍
                </div>
              )}

              {/* Show hide add to watch list and remove from watch list button  */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Movies;
