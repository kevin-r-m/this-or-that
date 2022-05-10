import './App.scss';
import {useState, useEffect} from 'react'
import Competition from './components/Competition';
import Leaderboard from './components/Leaderboard';
import data from './testData/data.json'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router';
import Header from './components/Header';
import './styles/base.scss'
import './styles/main.scss'
import './styles/footer.scss'
import Competitors from './components/Competitors';
import api from './api'

const schedule = require('node-schedule');



function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const fetchCompetition = schedule.scheduleJob('0 0 * * * *', function(){
    api.createCompetition();
  });
  
  const [position, setPosition] = useState('');

  return (
    <div className="App">
      <Header setPosition={setPosition} />
      <body className={"main-container" + position}>
        <Routes>
          {/* Routing for leaderboard */}
          <Route exact path = '/leaderboards'
                element={<Leaderboard data={data} />}
            />
          {/* Routing for home */}
          <Route exact path = '/'
                element={<Competition />}
            />
            <Route exact path = '/competitors'
                   element={<Competitors />}
            />
        </Routes>

      </body>
      <footer>
        <p className="footnote">Created by Kevin McLaughlin &amp; Matt Lipowski <br/>&copy;2022</p>
      </footer>
    </div>
  );
}

export default App;
