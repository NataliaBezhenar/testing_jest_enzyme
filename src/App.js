import "./App.css";
// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import { ClickCounter } from "./components/ClickCounter";
import { Jotto } from "./components/Jotto/Jotto";
// import { getSecretWord } from "./components/Jotto/actions";
import { Layout } from "./components/Layout";
import { Box } from "./components/Layout/Box";
import { MapLeaflet } from "./components/MapLeaflet";

function App() {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getSecretWord());
  //   }, [dispatch]);

  return (
    <>
      <Box
        as="header"
        borderBottom="2px grey solid"
        p={4}
        background="#bcaaa4"
        textAlign="center"
      >
        <Box as="h1">Welcome to our React and Enzyme Testing Site</Box>
      </Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="about"
            element={<h1>Learn React Testing with Jest and Enzyme</h1>}
          />
          <Route path="counter" element={<ClickCounter />} />
          <Route path="jotto" element={<Jotto />} />
          <Route path="map" element={<MapLeaflet />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
