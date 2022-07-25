import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";
import { shallowMount } from "@vue/test-utils";

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for each received job", () => {
    axios.get.mockResolvedValue({ data: [] });
    const wrapper = shallowMount(JobListings);
  });
});
