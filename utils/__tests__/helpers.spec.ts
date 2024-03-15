import { range } from "../helpers";

describe("range", () => {
  it("creates a range of numbers between min and max", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("creates a range with negative numbers", () => {
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });

  it("creates a range where min equals max", () => {
    expect(range(3, 3)).toEqual([3]);
  });

  // Additional test: large range
  it("creates a large range of numbers", () => {
    expect(range(1, 10000).length).toBe(10000);
    expect(range(1, 10000)[0]).toBe(1);
    expect(range(1, 10000)[9999]).toBe(10000);
  });
});
