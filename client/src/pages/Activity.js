import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Card from "../components/activity_page/Card"
import axios from 'axios'
//assets
import WhiteArrowDown from "../assets/Icons-svgs/arrow-down.svg";
import WhiteCategoryIcon from "../assets/Icons-svgs/categories-white.svg";
import WhiteTimerIcon from "../assets/Icons-svgs/Timer-white.svg";
import WhitePlayersIcon from "../assets/Icons-svgs/Player-white.svg";
import BackgroundDots from "../assets/Icons-svgs/white-dots-for-background.svg";
import Guy from "../assets/guy.svg";
 

export default function Activity({match}) {
    const [tasks, setTasks] = useState(undefined);
    console.log(tasks)
    useEffect(() => {
    const fetch = async() => {
      const res = await axios.get(`http://localhost:5000/api/games/oneActivity/${match.params.activityId}`)
      console.log(res);
      setTasks(res.data);
    }
     fetch();

    },[])
    if (tasks !== undefined) {
        const {rules, name, category,link, timer} = tasks;
    let slogan = category === "movement" ? `get up for some ` : category === "creativity" ? `get your mind ready for ` :  `get ready for `
    const submitHandler = async() => {

    }
    let start = Date(Date.now());
    let end = parseFloat(Date.now() + timer * 60000);
    console.log(start.toString());
    const calendar = {
        title: name,
        description: `${rules[0]} ${link}`,
        location: "Vancouver, WA",
        startTime: start.toString() ,
        endTime: end.toString(),
      }
    return (
        <div>
            <Header match = {match}/>
            <form onSubmit={submitHandler} className="generator generator--activity">
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
        <img className="balloons-image" src={Guy} alt="balloons" />
      </form>
      <section className="activity__container">
          <header>
            <h2>The <span className = "activity--highlight">Activity</span> you have chosen is <br/>{slogan} <span className = "activity--highlight">{name}</span></h2>
          </header>
          <div className="card-container">
            <Card header = {"Tips"} description = {rules[0]}/>
            <Card header = {"Details"} description = {rules[0]}/>
            <Card header = {"Share"} calendar = {calendar}/>
          </div>
      </section>
    
        </div>
    )

    } else {
        return <h1>Loading.....</h1>
    }
    
}
