import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr as getByTestAttribute } from "../../test/testUtils";
import { Input } from "./Input";

const setup = (secretWord = "party") =>
  shallow(<Input secretWord={secretWord} />);

test("renders without errors", () => {
  const wrapper = setup();
  const inputWrapper = getByTestAttribute(wrapper, "input-component");
  expect(inputWrapper.length).toBe(1);
});

describe("state controlled input field", () => {
  test("state updates with value on input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = getByTestAttribute(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
