import './App.css';
import Competition from './components/Competition';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="page-title">This -or- That</h1>
        <Nav/>
      </header>
      <body>
        <Competition />
      </body>
    </div>
  );
}

export default App;
