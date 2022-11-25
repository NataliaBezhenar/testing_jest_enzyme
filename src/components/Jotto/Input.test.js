import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import {
  findByTestAttr as getByTestAttribute,
  storeFactory,
} from "../../test/testUtils";
import { Input } from "./Input";

const setup = (initialState = {}, secretWord = "party") => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Input secretWord={secretWord} />
    </Provider>
  );
};

describe("render", () => {
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
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
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("renders without errors", () => {
      const inputWrapper = getByTestAttribute(wrapper, "input-component");
      expect(inputWrapper.length).toBe(1);
    });

    // test("input box does not show", () => {
    //   const inputBox = getByTestAttribute(wrapper, "input-box");
    //   expect(inputBox.exists()).toBe(false);
    // });

    // test("submit button does not show", () => {
    //   const submitButton = getByTestAttribute(wrapper, "submit-button");
    //   expect(submitButton.exists()).toBe(false);
    // });
  });
});

describe("state controlled input field", () => {
  let wrapper;
  let mockSetCurrentGuess = jest.fn();

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({ success: false });
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
