import React from "react";
import MovieLogo from "../MovieLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex content-start items-center border gap-6">
      <img className="w-20 p-4" src={MovieLogo} />
      <ul className="flex content-start items-center gap-6">
        <li>
          <Link to="/" className="font-bold">Home</Link>
        </li>
        <li>
          <Link to="/watchlist" className="font-bold">Watchlist</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
