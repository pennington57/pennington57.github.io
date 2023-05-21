import logo from './logo.svg';
import './App.css';
import Cocktail from "./components/Cocktail/Cocktail";

import drinks from "./data/drinks.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Cocktail drinks={drinks}></Cocktail>
    </div>
  );
}

export default App;
