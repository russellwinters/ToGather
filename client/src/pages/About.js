import React from "react";
import Header from "../components/Header";

//assets
import BackgroundDots from "../assets/Icons-svgs/white-dots-for-background.svg";
import GirlLookingSVG from "../assets/svg-for-dashboard.svg";
import StreakIcon from "../assets/badges/bookmark.svg";
import fivein5 from "../assets/badges/warranty.svg";
import diamonIcon from "../assets/badges/diamond.svg";

export default function Exercise({ match }) {
  return (
    <>
      <Header match={match} />
      <section className="dashboard-main">
        <h1>
          Welcome back, <span>Danielle</span>
        </h1>

        <img className="background-dots" src={BackgroundDots} alt="dots" />
        <img className="girl-looking-img" src={GirlLookingSVG} alt="looking" />
      </section>

      <section className="dashboard-cards__wrapper">
        <div className="card-container">
          <div className="dashboard-card">
            <h3>History</h3>
            <div className="card-info">
              <p>
                You successfully completed a <span>movement activity</span>{" "}
                today.
              </p>
              <p>
                You completed a <span>problem-solving activity</span> on Monday,
                April 27.
              </p>
              <p>
                You completed a <span>problem-solving activity</span> on Friday,
                April 24.
              </p>
              <p className="no-border">
                You completed a <span>creativity activity</span> on Thursday
                April 23.
              </p>
            </div>
            <button>See All History</button>
          </div>
          <div className="dashboard-card">
            <h3>Upcoming</h3>
            <div className="card-info">
              <p>
                You'll be joining a <span>creativity activity</span> on Friday,
                May 1.
              </p>
              <p>
                You'll be doing a <span>problem-solving activity</span> on
                Friday, May 1.
              </p>
              <p>
                You'll be doing a <span>movement activity</span> on Monday, May
                4.
              </p>
              <p className="no-border">
                You'll be doing a <span>movement activity</span> on Tuesday, May
                5.
              </p>
            </div>
            <button>See All Upcoming</button>
          </div>
          <div className="dashboard-card">
            <h3>Badges</h3>
            <div className="card__badge">
              <img src={StreakIcon} alt="Streak!" />
              <span>10 Activities Streak</span>
            </div>
            <div className="card__badge">
              <img src={fivein5} alt="five" />
              <span>5 Activities in 5 Days</span>
            </div>
            <div className="card__badge">
              <img src={diamonIcon} alt="diamond" />
              <span>15 Creativity Activities</span>
            </div>
          </div>
          <div className="dashboard-card">
            <h3>Recommended</h3>
            <div className="card-info">
              <p>
                Check out <span>Sudoku!</span> We think you'd love to
                problem-solve!.
              </p>
              <p>
                We love <span>Pictionary!</span> Play in Pairs or in groups of
                4+!
              </p>
              <p>
                <span>Word Search</span> is the perfect way to work your mind!
              </p>
              <p>
                Bond with your peers, play a game of <span>2 Truths 1 Lie</span>
              </p>
              <p className="no-border">
                See what's cookin', get ready to{" "}
                <span>show off your lunch!</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
