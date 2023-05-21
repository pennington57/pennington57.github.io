import logo from './logo.svg';
import './App.css';
import Cocktail from "./components/Cocktail";

import drinks from "./data/cocktails.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cocktail drinks={drinks}></Cocktail>
      </header>
    </div>
  );
}

export default App;
