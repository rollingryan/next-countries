import { render, screen } from "@testing-library/react";

import Error from ".";

const errorProps = {
  error: {
    message: "This is an error message",
  },
};

describe("Error", () => {
  describe("should render correctly", () => {
    it("with no props", () => {
      render(<Error {...errorProps} />);

      const error = screen.getByTestId("error");
      const errorMessage = screen.getByTestId("error__message");

      expect(error).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("This is an error message");
    });
  });
});
