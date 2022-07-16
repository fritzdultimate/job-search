import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Shared/ActionButton.vue";

describe("ActionButton", () => {
  it("it renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("clickable");
  });

  it("applies on or several style to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
