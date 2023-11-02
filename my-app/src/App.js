import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';


function App() {
  return (
    <div className="App">
      <StatefulGreetingWithCallback greeting="Im a stateful class component" name="Mike"/>
    </div>
  );
}

export default App;
