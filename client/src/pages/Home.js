import React from "react";
import Header from "../components/Header";

export default function Home({ match }) {
  return (
    <>
      <Header match={match} />
      <section className = "home__hero">
        <header>
          <h1>
          Bond with your team anytime and anywhere.
          </h1>
          <button className = "home__hero-call-to-action">Explore New Activities</button>
          </header>
      </section>
    </>
  );
}
