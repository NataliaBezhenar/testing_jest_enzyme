import { mount } from "enzyme";
import { Provider } from "react-redux";

import { getSecretWord as mockGetSecretWord } from "./actions";
import { getByTestAttribute, storeFactory } from "./testUtils";
import { Jotto } from "./Jotto";

//activate global mock to make sure getSecretWord doesn't make network call
jest.mock("./actions");

const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <Jotto />
    </Provider>
  );
};

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
