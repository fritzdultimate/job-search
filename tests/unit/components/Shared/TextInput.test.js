import { mount } from "@vue/test-utils";

import TextInput from "@/components/shared/TextInput";

describe("TextInput", () => {
  IDBTransaction("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("N");
    input.setValue("NY");
    input.setValue("NYC");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
