import React from "react";
import Weather from "./components/weather/Weather";
import MusicPlayer from "./components/music/MusicPlayer";
import Header from "./components/Header";
import Quiz from "./components/quiz/Quiz";
import Gibbets from "./components/Gibbets";
import Profiles from "./components/profiles/Profiles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
});

function App({ dispatch }) {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />

        <div className="container uk-conatiner uk-container-large">
          <Switch>
            <Route path="/music">
              <MusicPlayer />
            </Route>

            <Route path="/weather">
              <Weather dispatch={dispatch} />
            </Route>

            <Route path="/quiz">
              <Quiz />
            </Route>

            <Route path="/gibbets">
              <Gibbets />
            </Route>

            <Route path="/profiles">
              <Profiles />
            </Route>

            <Route path="/">
              cutdown
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
