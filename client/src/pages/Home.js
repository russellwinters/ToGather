import React from "react";
import Header from "../components/Header";

export default function Home({ match }) {
  return (
    <>
      <Header match={match} />
      <h1>Home</h1>
    </>
  );
}
