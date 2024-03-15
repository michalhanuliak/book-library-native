import React from "react";
import { render } from "@testing-library/react-native";
import { Rating } from "../Rating"; // Adjust the import path as necessary

describe("Rating", () => {
  it("renders the correct number of filled and empty stars based on rating", () => {
    const ratingValue = 4;
    const { getAllByTestId } = render(<Rating rating={ratingValue} />);

    const filledStars = getAllByTestId("filled-star");
    const emptyStars = getAllByTestId("empty-star");

    expect(filledStars.length).toBe(ratingValue);
    expect(emptyStars.length).toBe(5 - ratingValue);
  });

  it("renders all empty stars when rating is 0", () => {
    const { getAllByTestId, queryAllByTestId } = render(<Rating rating={0} />);

    const filledStars = queryAllByTestId("filled-star");
    const emptyStars = getAllByTestId("empty-star");

    expect(filledStars.length).toBe(0);
    expect(emptyStars.length).toBe(5);
  });

  it("renders all filled stars when rating is 5", () => {
    const { getAllByTestId, queryAllByTestId } = render(<Rating rating={5} />);

    const filledStars = getAllByTestId("filled-star");

    const emptyStars = queryAllByTestId("empty-star");

    expect(filledStars.length).toBe(5);
    expect(emptyStars.length).toBe(0);
  });
});
