import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "24px",
      }}
    >
      <h3>Microsoft x BrainStation Hackathon</h3>

      <nav
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "24px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/exercise">Exercise</Link>
        <Link to="/random">Random</Link>
      </nav>
    </header>
  );
}
