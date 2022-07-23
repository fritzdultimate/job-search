import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "C2GEN",
    ...jobProps,
  });
  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });
  it("renders job title", () => {
    const props = createJobProps({ title: "Vue Pro" });
    const wrapper = mount(JobListing, createConfig(props));
    expect(wrapper.text()).toMatch("Vue Developer");
  });

  it("renders job organization", () => {
    const wrapper = mount(JobListing, createConfig());
    expect(wrapper.text()).toMatch("C2GEN");
  });
});
