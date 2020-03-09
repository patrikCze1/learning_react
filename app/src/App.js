import React from "react";
import Weather from "./components/Weather";
import MusicPlayer from "./components/MusicPlayer";
import Header from "./components/Header";
import Quiz from './components/Quiz';
import Gibbets from './components/Gibbets';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <div className="conatiner">
        <Switch>
          <Route path="/music">
            <MusicPlayer />
          </Route>

          <Route path="/weather">
            <Weather />
          </Route>

          <Route path="/quiz">
            <Quiz />
          </Route>

          <Route path="/gibbets">
            <Gibbets />
          </Route>

          <Route path="/">
            home, translator api, recepty, cutdown, image
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
