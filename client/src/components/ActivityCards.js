import React from "react";
import RedPlayer from "../assets/Icons-svgs/Player-red.svg";
import BlueTimer from "../assets/Icons-svgs/Timer-blue.svg";

export default function ActivityCards({ activity }) {
  const { category, timer, players, name } = activity;
  const categoryStyle = category.toLowerCase();
  // console.log(categoryStyle);

  return (
    <section className="card">
      <div className="card__activity--filters">
        <div>
          <img src={BlueTimer} alt="Time" />
          <span className="timer--blue">{timer} Minutes</span>
        </div>
        <div>
          <img src={RedPlayer} alt="Players" />
          <span className="players--red">{players} or More</span>
        </div>
      </div>
      <div className="card__activity--name">{name}</div>
      <button className="card__activity--select">Select Activity</button>
      <div className={`card__activity--category ${categoryStyle}`}>
        {category.toUpperCase()}
      </div>
    </section>
  );
}
