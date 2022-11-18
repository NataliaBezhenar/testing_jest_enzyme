import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr as getByTestAttribute } from "../../test/testUtils";
import { Input } from "./Input";

const setup = (success = false, secretWord = "party") =>
  shallow(<Input success={success} secretWord={secretWord} />);

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("renders without errors", () => {
      const inputWrapper = getByTestAttribute(wrapper, "input-component");
      expect(inputWrapper.length).toBe(1);
    });

    test("input box does not show", () => {
      const inputBox = getByTestAttribute(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });

    test("submit button does not show", () => {
      const submitButton = getByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("renders without errors", () => {
      const inputWrapper = getByTestAttribute(wrapper, "input-component");
      expect(inputWrapper.length).toBe(1);
    });

    test("input box shows", () => {
      const inputBox = getByTestAttribute(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });

    test("submit button shows", () => {
      const submitButton = getByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe("state controlled input field", () => {
  let wrapper,
    mockSetCurrentGuess = jest.fn(),
    originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value on input box upon change", () => {
    const inputBox = getByTestAttribute(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("the field is cleared upon submit button click", () => {
    const submitButton = getByTestAttribute(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
