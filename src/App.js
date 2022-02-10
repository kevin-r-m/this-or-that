import './App.css';
import Competition from './components/Competition';
import Leaderboard from './components/Leaderboard';
import Nav from './components/Nav';
import data from './testData/data.json'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="page-title">This -or- That</h1>
        <Nav/>
      </header>
      <body>
        <Competition />
        <Leaderboard data={data}/>
      </body>
    </div>
  );
}

export default App;
