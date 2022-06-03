import getHeadTitle from "./getHeadTitle";

describe("getHeadTitle", () => {
  describe("When called with the correct arguments", () => {
    it("should return a string", () => {
      expect(typeof getHeadTitle("/")).toBe("string");
    });

    it("should return a string with the correct value", () => {
      expect(getHeadTitle("/")).toBe("Welcome - Next Countries");

      expect(getHeadTitle("/country")).toBe("Country - Next");

      expect(getHeadTitle("/country-name")).toBe("Country Name - Next");
    });
  });
});
