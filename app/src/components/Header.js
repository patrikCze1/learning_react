import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <a href="#">Quiz</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link to="/quiz">Quiz</Link>
                  </li>
                  <li>
                    <Link to="/gibbets">Gibbets</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/music">Music player</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
