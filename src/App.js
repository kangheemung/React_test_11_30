import logo from './logo.svg';
import Tut from './components/Tut';
import Let from './components/Let';
import StateTutorial from './components/StateTutorial';
import EffectTutorial from './components/EffectTutorial';
import LayoutEffectTutorial from './components/LayoutEffectTutorial';
import ImperatiberHandle from './components/ImperatiberHandle';
import ContextTutorial from './components/ContextTutorial';
import MemoTutorial from './components/MemoTutorial'// No trailing space and correct folder name 'components'
import Login from './components/Login'; // Corrected spelling of 'components' and ensured no trailing space
import CallBackTutorial from'./components/CallBackTutorial';
// ... rest of your App.js code


import RefTutorial from './components/RefTutorial';
import './App.css';

function App() {
  const age = 0;
  
  const increaseAge = ()=> {
    
    age = age + 1;
    
    console.log(age);
  }
  return (
    <div className="App">

      <header className="App-header">
      {age}
      {age}
      {age}
      <button onClick = {increaseAge}>Increase Age</button>
        <Tut />
        <Let />
        <StateTutorial />
        <EffectTutorial />
        <ImperatiberHandle />
        <LayoutEffectTutorial />
        <RefTutorial />
        <ContextTutorial /> 
        <MemoTutorial />
        <CallBackTutorial/>
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
