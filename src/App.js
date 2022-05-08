import './App.scss';
import {useState, useEffect} from 'react'
import Competition from './components/Competition';
import Leaderboard from './components/Leaderboard';
import data from './testData/data.json'
import {Route} from 'react-router-dom'
import { Routes } from 'react-router';
import Header from './components/Header';
import './styles/base.scss'
import './styles/main.scss'
import './styles/footer.scss'


function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

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
        </Routes>

      </body>
      <footer>
        <p class="footnote">Created by Kevin McLaughlin &amp; Matt Lipowski <br/>&copy;2022</p>
      </footer>
    </div>
  );
}

export default App;
