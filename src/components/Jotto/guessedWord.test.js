import { mount } from "enzyme";
import { Provider } from "react-redux";

import { Jotto } from "./Jotto";

import { getByTestAttribute, storeFactory } from "./testUtils";

// activate global mock to make sure there are no network calls
jest.mock("./actions");

/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 # @function
 *
 * @param {object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <Jotto />
    </Provider>
  );

  // add value to input box
  const inputBox = getByTestAttribute(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate click on submit button
  const submitButton = getByTestAttribute(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe.skip("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("creates GuessedWords table with one row", () => {
    const guessedWordRows = getByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe.skip("some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
  });
  test("adds row to guessedWords table", () => {
    const guessedWordNodes = getByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNodes).toHaveLength(2);
  });
});

describe.skip("guess secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });

    // add value to input box
    const inputBox = getByTestAttribute(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    // simulate click on submit button
    const submitButton = getByTestAttribute(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });
  test("adds row to guessedWords table", () => {
    const guessedWordNodes = getByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNodes).toHaveLength(3);
  });
  test("displays congrats component", () => {
    const congrats = getByTestAttribute(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });
  test("does not display input component contents", () => {
    const inputBox = getByTestAttribute(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);

    const submitButton = getByTestAttribute(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(false);
  });
});
