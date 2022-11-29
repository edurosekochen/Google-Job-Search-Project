import { mount } from "@vue/test-utils";

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar";

describe("JobFiltersSidebarOrgnizations", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("renders unique list of organizations for filtering jobs", () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
    };
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig());
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    clickableArea.trigger("click");
    const organizationLabels = wrapper.findAll("[data-test='organization'");
    const organizations = organizationLabels.map((node) => node.text());
    expect(organizations).toEqual(["Google", "Amazon"]);
  });
});

describe("JobFiltersSidebarOrgnizations", () => {
  it("communicates that user has selected checkbox for organization", async () => {
    const commit = jest.fn();
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
      commit,
    };
    const wrapper = mount(JobFiltersSidebarOrganizations, {
      global: {
        mocks: {
          $store,
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    clickableArea.trigger("click");
    const googleInput = wrapper.find("[data-test='Google']");
    await googleInput.setChecked();

    expect(commit).toHaveBeenCalledWith("ADD_SELECTED_ORGANIZATIONS", [
      "Google",
    ]);
  });
});
