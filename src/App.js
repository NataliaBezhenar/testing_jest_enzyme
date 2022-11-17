import "./App.css";
import { ClickCounter } from "./components/ClickCounter";
import { Jotto } from "./components/Jotto/Jotto";

function App() {
  return (
    <div className="App">
      <h1>Learn React Testing with Jest and Enzyme</h1>
      <ClickCounter />
      <Jotto />
    </div>
  );
}

export default App;
