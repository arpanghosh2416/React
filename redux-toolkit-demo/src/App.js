import Counter from "./feature/counter/Counter";
import Coin from "./feature/coin/Coin";
import Theme from "./feature/theme/Theme";
import "./App.css";

function App() {
  console.log("App.js");

  return (
    <div className="App">
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
