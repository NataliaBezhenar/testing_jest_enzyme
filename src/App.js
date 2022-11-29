import "./App.css";
// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import { ClickCounter } from "./components/ClickCounter";
import { Jotto } from "./components/Jotto/Jotto";
// import { getSecretWord } from "./components/Jotto/actions";
import { Layout } from "./components/Layout";

function App() {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getSecretWord());
  //   }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="about"
          element={<h1>Learn React Testing with Jest and Enzyme</h1>}
        />
        <Route path="counter" element={<ClickCounter />} />
        <Route path="jotto" element={<Jotto />} />
      </Route>
    </Routes>
  );
}

export default App;
