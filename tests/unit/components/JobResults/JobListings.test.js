import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";
import { shallowMount, flushPromises } from "@vue/test-utils";

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = {
      query: {
        page: "5",
      },
    };
    shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for a maximum of ten job", async () => {
    jest.setTimeout(10000000000000000000000);
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const $route = {
      query: {
        page: "5",
      },
    };
    const wrapper = shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
