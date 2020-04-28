import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-wrapper light-blue lighten-2">
          <div className="container">
            <Link to="/" className="brand-logo">
              React app
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/weather">Weather</Link>
              </li>
              <li>
                <Link to="/quiz">Quiz</Link>
              </li>
              <li>
                <Link to="/gibbets">Gibbets</Link>
              </li>
              <li>
                <Link to="/music">Music player</Link>
              </li>
              <li>
                <Link to="/profiles">Profiles</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
