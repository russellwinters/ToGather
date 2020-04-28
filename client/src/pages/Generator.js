import React from "react";
import axios from "axios";
import Header from "../components/Header";
import ActivityContainer from "../components/ActivityContainer";

export default function Generator({ match }) {
  const submitHandler = (event) => {
    event.preventDefault();

    let category = event.target.categories.value;
    let timer = event.target.timer.value;
    let players = event.target.players.value;

    axios
      .get(`http://localhost:5000/api/games/${category}/${timer}/${players}`)
      .then((res) => {
        console.log(res.data);
      });
    // console.log(search);
  };

  return (
    <div>
      <Header match={match} />

      <form onSubmit={submitHandler} className="generator">
        <div className="generator__categories">
          <select name="categories" defaultValue="">
            <option value="" disabled hidden>
              Categories
            </option>
            <option value="movement">Movement</option>
            <option value="problem-solving">Problem-solving</option>
            <option value="creativity">Creativity</option>
          </select>
        </div>

        <div className="generator__timer">
          <select name="timer" defaultValue="">
            <option value="" disabled hidden>
              Timer
            </option>
            <option value="10">10 Minutes</option>
            <option value="15">15 Minutes</option>
            <option value="20">20 Minutes</option>
          </select>
        </div>

        <div className="generator__players">
          <select name="players" defaultValue="">
            <option value="" disabled hidden>
              Players
            </option>
            <option value="1">Solo</option>
            <option value="2">2 or More</option>
            <option value="4">4 or More</option>
          </select>
        </div>

        <div className="generator__button">
          <button>New Activities</button>
        </div>
      </form>
      <ActivityContainer />
    </div>
  );
}
