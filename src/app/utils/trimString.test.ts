import trimString from "./trimString";

describe("trimString", () => {
  it("should return a trimmed string if called with the correct arguments", () => {
    const string = "This is a string";

    expect(trimString(string, 7)).toBe("This is...");
  });

  it("should return the original string if called with the wrong arguments", () => {
    const string = "This is a string";

    expect(trimString(string, -1)).toBe(string);
  });

  it("should return the original string if string is shorter than length", () => {
    const string = "This is a string";

    expect(trimString(string, 40)).toBe(string);
  });
});
