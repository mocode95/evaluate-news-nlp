// TODO: import the url check function
import { isURL } from "../js/checkURL";

describe("Test checkURL functionality", () => {
  test("Testing the checkURL function", () => {
    expect(isURL).toBeDefined();
  });

  test("checkURL return false for invalid url", () => {
    expect(isURL("invalid Url")).toBeFalsy();
  });

  test("checkURL return true for valid url", () => {
    expect(isURL("google.com")).toBeTruthy();
  });
});
