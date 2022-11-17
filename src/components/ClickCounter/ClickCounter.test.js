import { shallow } from "enzyme";

import { ClickCounter } from "./ClickCounter";

/**
 * Factory function to create ShallowWrapper for the ClickCounter component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<ClickCounter />);

const getByTestAttribute = (wrapper, dataTestValue) =>
  wrapper.find(`[data-test='${dataTestValue}']`);

test("renders without errors", () => {
  const wrapper = setup();
  const clickCounterComponent = getByTestAttribute(wrapper, "component-app");

  expect(clickCounterComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = getByTestAttribute(wrapper, "increment-button");

  expect(button.length).toBe(1);
});

test("shows counter display", () => {
  const wrapper = setup();
  const counterDisplay = getByTestAttribute(wrapper, "counter-display");

  expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = getByTestAttribute(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking button increments counter display", () => {
  const wrapper = setup();
  const button = getByTestAttribute(wrapper, "increment-button");
  button.simulate("click");
  const count = getByTestAttribute(wrapper, "count").text();
  expect(count).toBe("1");
});

test("renders decrement button", () => {
  const wrapper = setup();
  const button = getByTestAttribute(wrapper, "decrement-button");

  expect(button.length).toBe(1);
});

test("clicking decrement button cannot go below zero", () => {
  const wrapper = setup();
  const decrementButton = getByTestAttribute(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const count = getByTestAttribute(wrapper, "count").text();
  const errorText = getByTestAttribute(wrapper, "error-message").text();

  expect(count).toBe("0");
  expect(errorText).toBe("The counter cannot go below 0");
});

test("clicking decrement button decrements counter display, display is 2", () => {
  const wrapper = setup();

  let incrementButton = getByTestAttribute(wrapper, "increment-button");
  incrementButton.simulate("click");
  incrementButton = getByTestAttribute(wrapper, "increment-button");
  incrementButton.simulate("click");
  incrementButton = getByTestAttribute(wrapper, "increment-button");
  incrementButton.simulate("click");

  const decrementButton = getByTestAttribute(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const count = getByTestAttribute(wrapper, "count").text();

  expect(count).toBe("2");
});
