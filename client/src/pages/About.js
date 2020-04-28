import React from "react";
import Header from "../components/Header";

export default function Exercise({ match }) {
  return (
    <>
      <Header match={match} />
      <h1>Exercise</h1>
    </>
  );
}
