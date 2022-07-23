import { mount } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  it("renders job title", () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          title: "Vue Developer",
        },
      },
    });
    expect(wrapper.text()).toMatch("Vue Developer");
  });
});
