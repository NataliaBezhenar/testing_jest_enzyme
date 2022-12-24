import { useState } from "react";

import "./ClickCounter.css";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleIncrementClick = () => {
    if (isError) setIsError(false);
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setIsError(true);
    }
  };

  return (
    <div data-test="component-app">
      <h2 data-test="counter-display">
        The counter is currently:&nbsp;<span data-test="count">{count}</span>
      </h2>
      <p
        data-test="error-message"
        className={`error ${isError ? "" : "hidden"}`}
      >
        The counter cannot go below 0
      </p>
      <button data-test="decrement-button" onClick={handleDecrementClick}>
        Decrement
      </button>
      <button data-test="increment-button" onClick={handleIncrementClick}>
        Increment
      </button>
    </div>
  );
};
