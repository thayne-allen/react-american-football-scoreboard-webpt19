//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // useState hooks for home.
  const usingHomeState = useState(0);
  const setHomeStateVar = usingHomeState[1];
  
  const [homeCount, setHomeCount] = useState(24);

  // useState hooks for away
  const usingAwayState = useState(0);
  const setAwayStateVar = usingAwayState[1];

  const [awayCount, setAwayCount] = useState(17);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>



            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer"><span id="time">00:03</span></div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeCount(homeCount + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeCount(homeCount + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayCount(awayCount + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayCount(awayCount + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
