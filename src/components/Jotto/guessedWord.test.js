import { mount } from "enzyme";

import { Jotto } from "./Jotto";

import { findByTestAttr as getByTestAttr } from "../../test/testUtils";

const setup = (state = {}) => {
  const wrapper = mount(<Jotto />);

  const inputBox = getByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });
  const submitBtn = getByTestAttr(wrapper, "submit-button");
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
    const guessedWordRows = getByTestAttr(wrapper, "guessed-word");
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
    const guessedWordRows = getByTestAttr(wrapper, "guessed-word");
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
    const inputBox = getByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    // simulate button click
    const submitBtn = getByTestAttr(wrapper, "submit-button");
    submitBtn.simulate("click", { perventDefault() {} });
  });
  test("adds row to guessed words table", () => {
    const guessedWordsNodes = getByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes).toHaveLength(3);
  });

  test("displays congrats component", () => {
    const congrats = getByTestAttr(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });

  test("does not display input component contents", () => {
    const inputBox = getByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);

    const submitBtn = getByTestAttr(wrapper, "submit-button");
    expect(submitBtn.exists()).toBe(false);
  });
});
