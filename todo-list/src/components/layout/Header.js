import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Todo list</h1>
      <Link to="/" className="link">Home</Link> | <Link to="/about" className="link">About</Link>
    </header>
  );
}

const headerStyle = {
};

const h1Style = {
    backgroundColor: "red",
    margin: "0px",
    padding: "5px"
};

export default Header;
