import { state, mutations } from "@/store";

describe("state", () => {
  it("keeps track of wheter user is logegd in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
});

describe("mutatiions", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });
});
