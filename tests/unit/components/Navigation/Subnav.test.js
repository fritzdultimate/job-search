import { mount } from "@vue/test-utils";

import Subnav from "@/components/Navigation/Subnav.vue";

describe("Subnav", () => {
  describe("when the user is on the job page", () => {
    it("displays job count", () => {
      // this.$route
      const $route = {
        name: "JobsResults",
      };
      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            fontAwesomeIcon: true,
          },
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when the user is on the job page", () => {
    it("does not display jobs count", () => {
      // this.$route
      const $route = {
        name: "Home",
      };
      const wrapper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            fontAwesomeIcon: true,
          },
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
