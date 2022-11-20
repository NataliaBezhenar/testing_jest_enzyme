import { shallow } from "enzyme";
import { findByTestAttr as getByTestAttribute } from "../../test/testUtils";
import { Jotto } from "./Jotto";

const setup = () => shallow(<Jotto />);

test("renders without error", () => {
  const wrapper = setup();
  const jottoComponent = getByTestAttribute(wrapper, "jotto-component");
  expect(jottoComponent).toHaveLength(1);
});
