import React from "react";

export default function ActivityCards({ activity }) {
  const { category, timer, players, name } = activity;

  return (
    <section className="card">
      <div className="card__activity--filters">
        <div>
          {/* Icon */}
          <span>{timer} Minutes</span>
        </div>
        <div>
          {/* Icon */}
          <span>{players} or More</span>
        </div>
      </div>
      <div className="card__activity--name">{name}</div>
      <button className="card__activity--select">Select Activity</button>
      <div className="card__activity--category">{category}</div>
    </section>
  );
}
