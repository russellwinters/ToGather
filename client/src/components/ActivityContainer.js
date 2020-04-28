import React from "react";
import ActivityCards from "./ActivityCards";

export default function ActivityContainer() {
  const FAKE_ACTIVITY = {
    category: "Movement",
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
        <ActivityCards activity={FAKE_ACTIVITY} />
        <ActivityCards activity={FAKE_ACTIVITY} />
        <ActivityCards activity={FAKE_ACTIVITY} />
      </div>
    </section>
  );
}
