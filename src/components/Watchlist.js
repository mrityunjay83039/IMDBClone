import React from "react";

function Watchlist() {
  let movies = [
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      id: 753342,
      title: "Napoleon",
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      media_type: "movie",
      genre_ids: [36, 12, 10752, 18],
      popularity: 398.187,
      release_date: "2023-11-22",
      video: false,
      vote_average: 6.4,
      vote_count: 900,
    },
    {
      adult: false,
      backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
      id: 906126,
      title: "Society of the Snow",
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
      poster_path: "/k7rEpZfNPB35FFHB00ZhXHKTL7X.jpg",
      media_type: "movie",
      genre_ids: [18, 36],
      popularity: 917.756,
      release_date: "2023-12-13",
      video: false,
      vote_average: 8.128,
      vote_count: 392,
    },
    {
      adult: false,
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      id: 872585,
      title: "Oppenheimer",
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      media_type: "movie",
      genre_ids: [18, 36],
      popularity: 1129.554,
      release_date: "2023-07-19",
      video: false,
      vote_average: 8.117,
      vote_count: 5982,
    },
    {
      adult: false,
      backdrop_path: "/ckAwjXyW7LQEbvjdbzJGEJNSfWl.jpg",
      id: 374252,
      title: "Shaun the Sheep: The Farmer's Llamas",
      original_language: "en",
      original_title: "Shaun the Sheep: The Farmer's Llamas",
      overview:
        "Shaun bluffs his dimwitted farmer master into bidding for three llamas at a county fair. Once they arrive, however, they cause such chaotic destructive mayhem that Shaun has to carefully remove them – high-speed chases, careful rooftop scrambles and dangerous falls ensue.",
      poster_path: "/a3wjyadC2l3ehoqHjKlk5w89ErM.jpg",
      media_type: "movie",
      genre_ids: [10770, 10751, 16, 35],
      popularity: 10.024,
      release_date: "2015-11-13",
      video: false,
      vote_average: 6.8,
      vote_count: 53,
    },
  ];

  return (
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
          {movies.map((movie) => {
            return (
              <tr className="hover:bg-gray-50">
                <td className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
                    <img
                        className="h-[6rem]  w-[10rem] object-fit"
                        src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                        />
                    <div className="font-medium text-gray-700  text-sm">{movie.title}</div>
                </td>
                <td className=" pl-6 py-4">{movie.vote_average}</td>
                <td className="pl-6 py-4">{movie.popularity}</td>
                <td className="py-4">{movie.genre_ids}</td>
                <td>
                    <button className="text-red-600">
                      Delete
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
