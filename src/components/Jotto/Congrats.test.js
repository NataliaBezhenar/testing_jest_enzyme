import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

import { findByTestAttr as getByTestAttribute } from "../../test/testUtils";
import { Congrats } from "./Congrats";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component prop specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<Congrats {...props} />);

test("renders without error", () => {
  const wrapper = setup();
  const component = getByTestAttribute(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = getByTestAttribute(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = getByTestAttribute(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
