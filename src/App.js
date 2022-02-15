import './App.scss';
import Competition from './components/Competition';
import Leaderboard from './components/Leaderboard';
import data from './testData/data.json'
import {Route} from 'react-router-dom'
import { Routes } from 'react-router';
import Header from './components/Header';


function App() {


  

  return (
    
    <div className="App">
      <Header />
      <body className="main-container">
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
        <p class="footnote">Created by Kevin McLaughlin &amp; Matt Lipowski</p>
        <p class="footnote">&copy;2022</p>
      </footer>
    </div>
  );
}

export default App;
