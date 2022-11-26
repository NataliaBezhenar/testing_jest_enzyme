import { mount } from "enzyme";
import { Provider } from "react-redux";

import { getByTestAttribute, storeFactory } from "./testUtils";
import { Jotto } from "./Jotto";

//activate global mock to make sure getSecretWord doesn't make network call
import { getSecretWord as mockGetSecretWord } from "./actions";
jest.mock("./actions");
console.log("Jotto app");
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
  console.log(wrapper);
  const jottoComponent = getByTestAttribute(wrapper, "jotto-component");
  expect(jottoComponent).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test.skip("get secret word is retrieved on Jotto mount", () => {
    const wrapper = setup();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("get secret word is not retrieved on Jotto update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
