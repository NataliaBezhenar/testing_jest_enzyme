import { mount } from "enzyme";
import { getSecretWord as mockGetSecretWord } from "../../actions";
import { findByTestAttr as getByTestAttribute } from "../../test/testUtils";
import { Jotto } from "./Jotto";

//activate global mock to make sure getSecretWord doesn't make network call
jest.mock("../../actions");

const setup = () => mount(<Jotto />);

test("renders without error", () => {
  const wrapper = setup();
  const jottoComponent = getByTestAttribute(wrapper, "jotto-component");
  expect(jottoComponent).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test("get secret word is retrieved on Jotto mount", () => {
    const wrapper = setup();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("get secret word is not retrieved on Jotto update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
