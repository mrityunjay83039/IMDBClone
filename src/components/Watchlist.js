import React, { useState, useEffect } from "react";

function Watchlist() {
  const [favourites, setFavourites] = useState([]);
  const [geners, setGeners] = useState([]);

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

  useEffect(() => {
    let temp = favourites.map((favourite) => {
      return genreids[favourite.genre_ids[0]];
    });
    temp = new Set(temp);
    setGeners(["All Geners", ...temp]);
  });

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
              className="tst">
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
              <th>Rating</th>
              <th>Popularity</th>
              <th>Gener</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {favourites.map((movie) => {
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
                    <button className="text-red-600">Delete</button>
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
