import { mount } from "@vue/test-utils";

import Subnav from "@/components/Navigation/Subnav.vue";

describe("Subnav", () => {
  describe("when the user is on the job page", () => {
    it("displays job count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            fontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when the user is on the job page", () => {
    it("does not display jobs count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            fontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
