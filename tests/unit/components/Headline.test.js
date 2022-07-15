import { mount } from "@vue/test-utils";

import Headline from "@/components/Headline";

describe("Headline", () => {
  it("displays introductory action verbs", () => {
    jest.useFakeTimers();
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    jest.useRealTimers();
  });
});
