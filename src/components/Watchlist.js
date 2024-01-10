import React, { useState, useEffect } from "react";
import upArrow from "../upward-arrow-icon.png";
import downArrow from "../downward-arrow-icon.png";

function Watchlist() {
  const [favourites, setFavourites] = useState([]);
  const [geners, setGeners] = useState([]);
  const [currentGener, setCurrentGener] = useState("All Geners");
  const [rating, setRating] = useState(1);
  const [popularity, setPopularity] = useState(1);

  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  // Delete from watchlist method on click of delete button
  let deleteFromWatchList = (movie) => {
    let newArr = favourites.filter((m) => {
      return m.id != movie.id;
    });
    setFavourites([...newArr]);
    localStorage.setItem("imdb", JSON.stringify(newArr));
  };

  //  Filter Watchlist according to the filter button click
  let filteredArr = [];
  filteredArr =
    currentGener == "All Geners"
      ? favourites
      : favourites.filter((movie) => {
          return currentGener == genreids[movie.genre_ids[0]];
        });

  // Sorting with Respect to ratings
  if (rating == -1) {
    filteredArr = filteredArr.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });
  }

  if (rating == 1) {
    filteredArr = filteredArr.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average;
    });
  }

  // Sorting with Respect to Popularity
  if (popularity == -1) {
    filteredArr = filteredArr.sort(function (objA, objB) {
      return objB.popularity - objA.popularity;
    });
  }

  if (popularity == 1) {
    filteredArr = filteredArr.sort(function (objA, objB) {
      return objA.popularity - objB.popularity;
    });
  }

  useEffect(() => {
    let temp = favourites.map((favourite) => {
      return genreids[favourite.genre_ids[0]];
    });
    temp = new Set(temp);
    setGeners(["All Geners", ...temp]);
  }, [favourites]);

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("imdb");

    moviesFromLocalStorage = JSON.parse(moviesFromLocalStorage);

    setFavourites(moviesFromLocalStorage);
  }, []);

  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {geners.map((gener) => {
          return (
            <button
              className={
                currentGener == gener
                  ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                  : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
              }
              onClick={() => setCurrentGener(gener)}>
              {gener}
            </button>
          );
        })}
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500"'>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <img
                  src={upArrow}
                  className="sorting-icon"
                  alt="sort increasing order"
                  onClick={() => {
                    setRating(1);
                  }}
                />
                <span>Rating</span>
                <img
                  src={downArrow}
                  className="sorting-icon"
                  alt="sort decreasing order"
                  onClick={() => {
                    setRating(-1);
                  }}
                />
              </th>
              <th>
                <img
                  src={upArrow}
                  className="sorting-icon"
                  alt="sort increasing order"
                  onClick={() => {
                    setPopularity(1);
                  }}
                />
                <span>Popularity</span>
                <img
                  src={downArrow}
                  className="sorting-icon"
                  alt="sort decreasing order"
                  onClick={() => {
                    setPopularity(-1);
                  }}
                />
              </th>
              <th>Gener</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredArr.map((movie) => {
              return (
                <tr className="hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
                    <img
                      className="h-[6rem]  w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                    />
                    <div className="font-medium text-gray-700  text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className=" pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="py-4">{genreids[movie.genre_ids[0]]}</td>
                  <td>
                    <button
                      onClick={() => deleteFromWatchList(movie)}
                      className="text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
