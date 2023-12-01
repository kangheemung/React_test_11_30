import logo from './logo.svg';
import Tut from './components/Tut';
import Let from './components/Let';
import StateTutorial from './components/StateTutorial';
import EffectTutorial from './components/EffectTutorial';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Tut />
        <Let />
        <StateTutorial />
        <EffectTutorial />
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
