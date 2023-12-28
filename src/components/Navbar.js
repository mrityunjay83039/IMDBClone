import React from "react";
import MovieLogo from "../MovieLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <navbar className="flex content-start items-center border gap-6">
      <img className="w-20 p-4" src={MovieLogo} />
      <ul className="flex content-start items-center gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
