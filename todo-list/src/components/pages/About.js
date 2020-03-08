import React from "react";

function About(props) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const getData = url => {
    return fetch(url);
  };
  console.log(
    getData(url)
      .then(data => data.json())
      .then(json => console.log(json))
  );
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>Todo list v0.0.1</p>
    </React.Fragment>
  );
}

export default About;
