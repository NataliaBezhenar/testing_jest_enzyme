import { useState } from "react";

export const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};
