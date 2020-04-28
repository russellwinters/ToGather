import React from "react";
import Header from "../components/Header";

export default function Generator({ match }) {
  return (
    <>
      <Header match={match} />
      <h1>Generator</h1>
    </>
  );
}
