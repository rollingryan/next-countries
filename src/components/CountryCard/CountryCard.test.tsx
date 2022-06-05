import { fireEvent, render, screen } from "@testing-library/react";

import CountryCard from ".";

const mockOnClick = jest.fn();

const Props = {
  name: "United States",
  population: 3922928,
  flag: "https://via.placeholder.com/400x200",
  capital: "Washington, D.C.",
  onClick: mockOnClick,
  className: "test-class",
};

beforeEach(() => {
  render(<CountryCard {...Props} />);
});

describe("CountryCard", () => {
  it("should render correctly", () => {
    const countryCard = screen.getByTestId("country-card");
    const Button = screen.getByTestId("country-card__button");
    const Flag = screen.getByTestId("country-card__flag");
    const Name = screen.getByTestId("country-card__name");
    const Capital = screen.getByTestId("country-card__capital");
    const Population = screen.getByTestId("country-card__population");

    expect(countryCard).toBeInTheDocument();
    expect(countryCard).toHaveClass(Props.className);
    expect(Button).toBeInTheDocument();
    expect(Flag).toBeInTheDocument();
    expect(Name).toBeInTheDocument();
    expect(Capital).toBeInTheDocument();
    expect(Population).toBeInTheDocument();
  });

  it("should call onClick prop when button is clicked", () => {
    const Button = screen.getByTestId("country-card__button");

    fireEvent.click(Button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
