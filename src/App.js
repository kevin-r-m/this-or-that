import "./App.scss";
import { useState, useEffect } from "react";
import Competition from "./pages/competition/index";
import Leaderboard from "./pages/leaderboards/index";
import data from "./testData/competitorData.json";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Header from "./components/Header/Header";
import Competitors from "./pages/competitors/index";
import Footer from "./components/Footer";
import apis from "./api";

// const schedule = require('node-schedule');

function App() {
  // const [competitionData, setCompetitonData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const fetchCompetition = schedule.scheduleJob('0 0 * * * *', function(){
  //   apis.createCompetition();
  // });

  // setCompetitonData(apis.createCompetition())
  // console.log(competitionData)
  // console.log(apis.createCompetition());

  return (
    <>
      <Header />
      <div className={"container"}>
        <Routes>
          {/* Routing for leaderboard */}
          <Route
            exact
            path="/leaderboards"
            element={<Leaderboard data={data} />}
          />
          {/* Routing for home */}
          <Route exact path="/" element={<Competition />} />
          {/* Routing for competitors */}
          <Route exact path="/competitors" element={<Competitors />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
