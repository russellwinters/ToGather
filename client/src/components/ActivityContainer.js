import React from "react";
import ActivityCards from "./ActivityCards";

export default function ActivityContainer({ activities }) {
  //Just here while Mongo doesn't have enough activities
  if (activities.length < 3) {
    console.log("Not enough activities");

    const FAKE_ACTIVITY1 = {
      category: "movement",
      timer: 15,
      players: 1,
      name: "Get Up for some Yoga Stretches",
    };
    const FAKE_ACTIVITY2 = {
      category: "creativity",
      timer: 15,
      players: 1,
      name: "Get Up for some Yoga Stretches",
    };
    const FAKE_ACTIVITY3 = {
      category: "problem-solving",
      timer: 15,
      players: 1,
      name: "Get Up for some Yoga Stretches",
    };

    return (
      <section className="activity__container">
        <h2>
          Take a <span>Break</span> and...
        </h2>
        <div className="card-container">
          <ActivityCards activity={FAKE_ACTIVITY1} />
          <ActivityCards activity={FAKE_ACTIVITY2} />
          <ActivityCards activity={FAKE_ACTIVITY3} />
        </div>
      </section>
    );
  }
  const FAKE_ACTIVITY1 = {
    category: "movement",
    timer: 15,
    players: 1,
    name: "Get Up for some Yoga Stretches",
  };
  const FAKE_ACTIVITY2 = {
    category: "creativity",
    timer: 15,
    players: 1,
    name: "Get Up for some Yoga Stretches",
  };
  const FAKE_ACTIVITY3 = {
    category: "problem-solving",
    timer: 15,
    players: 1,
    name: "Get Up for some Yoga Stretches",
  };

  return (
    <section>
      <h2>
        Take a <span>Break</span> and...
      </h2>
      <div className="card-container">
        <ActivityCards activity={FAKE_ACTIVITY1} />
        <ActivityCards activity={FAKE_ACTIVITY2} />
        <ActivityCards activity={FAKE_ACTIVITY3} />
      </div>
    </section>
  );
}
