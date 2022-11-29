import { state } from "@/store/state";

describe("state", () => {
  it("keeps track of wheter user is logegd in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
  it("store job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });

  it("stores organizations that the user would like to filter jobs by", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });
});
