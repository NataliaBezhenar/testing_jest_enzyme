import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ClickCounter } from "./components/ClickCounter";
import { Jotto } from "./components/Jotto/Jotto";
import { getSecretWord } from "./components/Jotto/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSecretWord());
  }, []);
  return (
    <div className="App">
      <h1>Learn React Testing with Jest and Enzyme</h1>
      <ClickCounter />
      <Jotto />
    </div>
  );
}

export default App;
