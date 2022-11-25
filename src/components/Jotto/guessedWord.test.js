import { mount } from "enzyme";

import { Jotto } from "./Jotto";

import { getByTestAttribute } from "./testUtils";

const setup = (state = {}) => {
  const wrapper = mount(<Jotto />);

  const inputBox = getByTestAttribute(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });
  const submitBtn = getByTestAttribute(wrapper, "submit-button");
  submitBtn.simulate("click", { perventDefault() {} });

  return wrapper;
};

describe("invalid word guessed", () => {
  test.todo("guessed words table does not get another row");
});

describe.skip("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ secretWord: "party", success: false, guessedWords: [] });
  });
  test("creates GuseedsWords table with one row", () => {
    const guessedWordRows = getByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe.skip("some letters guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", lettersMatchCount: 1 }],
    });
  });
  test("one letter guessed, should have 2 rows", () => {
    const guessedWordRows = getByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(2);
  });
});

describe.skip("guessed secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", lettersMatchCount: 1 }],
    });

    // add value to input box
    const inputBox = getByTestAttribute(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    // simulate button click
    const submitBtn = getByTestAttribute(wrapper, "submit-button");
    submitBtn.simulate("click", { perventDefault() {} });
  });
  test("adds row to guessed words table", () => {
    const guessedWordsNodes = getByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordsNodes).toHaveLength(3);
  });

  test("displays congrats component", () => {
    const congrats = getByTestAttribute(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });

  test("does not display input component contents", () => {
    const inputBox = getByTestAttribute(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);

    const submitBtn = getByTestAttribute(wrapper, "submit-button");
    expect(submitBtn.exists()).toBe(false);
  });
});
