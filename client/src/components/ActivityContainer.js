import React, {useEffect, useState} from "react";
import ActivityCards from "./ActivityCards";
import axios from 'axios';
export default function ActivityContainer({ activities }, isRefreshed) {

  //Just here while Mongo doesn't have enough activities
  // if (activities.length < 3) {
  //   console.log("Not enough activities");

  //   const FAKE_ACTIVITY1 = {
  //     category: "movement",
  //     timer: 15,
  //     players: 1,
  //     name: "Get Up for some Yoga Stretches",
  //   };
  //   const FAKE_ACTIVITY2 = {
  //     category: "creativity",
  //     timer: 15,
  //     players: 1,
  //     name: "Get Up for some Yoga Stretches",
  //   };
  //   const FAKE_ACTIVITY3 = {
  //     category: "problem-solving",
  //     timer: 15,
  //     players: 1,
  //     name: "Get Up for some Yoga Stretches",
  //   };

  //   return (
  //     <section className="activity__container">
  //       <h2>
  //         Take a <span>Break</span> and...
  //       </h2>
  //       <div className="card-container">
  //         {
  //        
  //         }
  //       </div>
  //     </section>
  //   );
  // }
  // const FAKE_ACTIVITY1 = {
  //   category: "movement",
  //   timer: 15,
  //   players: 1,
  //   name: "Get Up for some Yoga Stretches",
  // };
  // const FAKE_ACTIVITY2 = {
  //   category: "creativity",
  //   timer: 15,
  //   players: 1,
  //   name: "Get Up for some Yoga Stretches",
  // };
  // const FAKE_ACTIVITY3 = {
  //   category: "problem-solving",
  //   timer: 15,
  //   players: 1,
  //   name: "Get Up for some Yoga Stretches",
  // };

  return  (
    <section className="activity__container">
        <h2>
         Take a <span>Break</span> and...
         </h2>
      <div className="card-container">
      
      {activities.length === 0 ? <h1 className = "none">None Found</h1> : activities.map(item => {
        return <ActivityCards activity = {item}/>
        })
      } 
      </div>
    </section>
  );
}
