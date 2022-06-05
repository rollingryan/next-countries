import { render, screen } from "@testing-library/react";

import Loader from ".";

describe("Loader", () => {
  describe("should render correctly", () => {
    it("with no props", () => {
      render(<Loader />);

      const loader = screen.getByTestId("loader");

      expect(loader).toBeInTheDocument();
      expect(loader).not.toHaveClass("contained");
    });

    it("with contained prop", () => {
      render(<Loader contained />);

      const loader = screen.getByTestId("loader");

      expect(loader).toHaveClass("contained");
    });
  });
});
