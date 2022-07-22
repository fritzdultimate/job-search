import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to search result page with user's search parameters", async () => {
      const $router = { push }
      const wrapper = mount(JobSearchForm, {
        global: {
          mocks: {
            $route: {},
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = wrapper.find("[data-test='role-input']");
      roleInput.setValue("Vue Developer");

      const locationInput = wrapper.find("[data-test='role-input']");
      locationInput.setValue("Vue Developer");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");
    });
  });
});
