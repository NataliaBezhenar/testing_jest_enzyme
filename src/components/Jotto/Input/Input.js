import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { guessWord } from "../actions";

export const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const success = useSelector((state) => state.success);
  const dispatch = useDispatch();

  if (success) {
    return <div data-test="input-component" />;
  }

  return (
    <div data-test="input-component">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        ></input>
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={(event) => {
            event.preventDefault();
            dispatch(guessWord(currentGuess));
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
