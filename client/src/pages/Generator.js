import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Header from "../components/Header";
import ActivityContainer from "../components/ActivityContainer";

//assets
import WhiteArrowDown from "../assets/Icons-svgs/arrow-down.svg";
import WhiteCategoryIcon from "../assets/Icons-svgs/categories-white.svg";
import WhiteTimerIcon from "../assets/Icons-svgs/Timer-white.svg";
import WhitePlayersIcon from "../assets/Icons-svgs/Player-white.svg";
import BackgroundDots from "../assets/Icons-svgs/white-dots-for-background.svg";
import Balloons from "../assets/Icons-svgs/balloons.svg";

export default function Generator({ match }) {
  const [activities, setActivities] = useState(undefined);
  useEffect(() => {
    const fetch = async() => {
      const res = await axios.get("http://localhost:5000/api/games/random")
      console.log(res);
      setActivities(res.data);
    }
     fetch();

  },[])
  const submitHandler = (event) => {
    event.preventDefault();

    let category = event.target.categories.value;
    let timer = event.target.timer.value;
    let players = event.target.players.value;

    axios
      .get(`http://localhost:5000/api/games/${category}/${timer}/${players}`)
      .then((res) => {
        console.log(res)
        if(res.data.message === "None Found") {
          setActivities([]);
        } else {
          console.log('success')
          setActivities(res.data.activities);
        }
      });
  };

  return activities !== undefined? (
    <div>
      <Header match={match} />

      <form onSubmit={submitHandler} className="generator">
        <div className="generator__categories">
          <img src={WhiteCategoryIcon} alt="Categories" />
          <select name="categories" defaultValue="">
            <option value="" disabled hidden>
              Categories
            </option>
            <option value="movement">Movement</option>
            <option value="problem-solving">Problem-solving</option>
            <option value="creativity">Creativity</option>
          </select>
          <img className="arrow-down" src={WhiteArrowDown} alt="arrow" />
        </div>

        <div className="generator__timer">
          <img src={WhiteTimerIcon} alt="Timer" />
          <select name="timer" defaultValue="">
            <option value="" disabled hidden>
              Timer
            </option>
            <option value="10">10 Minutes</option>
            <option value="15">15 Minutes</option>
            <option value="20">20 Minutes</option>
          </select>
          <img className="arrow-down" src={WhiteArrowDown} alt="arrow" />
        </div>

        <div className="generator__players">
          <img src={WhitePlayersIcon} alt="Players" />
          <select name="players" defaultValue="">
            <option value="" disabled hidden>
              Players
            </option>
            <option value="1">Solo</option>
            <option value="2">2 or More</option>
            <option value="4">4 or More</option>
          </select>
          <img className="arrow-down" src={WhiteArrowDown} alt="arrow" />
        </div>

        <div className="generator__button">
          <div>""</div>
          <button>New Activities</button>
        </div>

        <img className="background-dots" src={BackgroundDots} alt="dots" />
        <img className="balloons-image" src={Balloons} alt="balloons" />
      </form>
      <ActivityContainer activities={activities} />
    </div>
  ): (<h1>Loading</h1>);
}
