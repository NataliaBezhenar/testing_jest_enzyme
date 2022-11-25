import { shallow } from "enzyme";

import { GuessedWords } from "./GuessedWords";
import { getByTestAttribute } from "../testUtils";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", lettersMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = getByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = getByTestAttribute(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    { guessedWord: "train", lettersMatchCount: 3 },
    { guessedWord: "agile", lettersMatchCount: 1 },
    { guessedWord: "party", lettersMatchCount: 5 },
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = getByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders guessed words section", () => {
    const guessedWordsNode = getByTestAttribute(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordsNodes = getByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
