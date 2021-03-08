import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-uppercase">Do I Need A Jacket?</h1>
      <Weather defaultCity="New York" />
    </div>
  );
}

export default App;
