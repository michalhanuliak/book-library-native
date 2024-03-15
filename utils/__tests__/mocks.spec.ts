import { generateBookMocks } from "../mocks";

describe("generateBookMocks", () => {
  it("generates the correct number of entries", () => {
    const entriesCount = 5;
    const books = generateBookMocks(entriesCount);
    expect(books.length).toBe(entriesCount);
  });

  it("ensures each entry has the correct structure", () => {
    const entries = generateBookMocks(1);
    const book = entries[0];

    expect(book).toHaveProperty("title");
    expect(book).toHaveProperty("author");
    expect(book).toHaveProperty("description");
    expect(book).toHaveProperty("coverImageUrl");
    expect(book).toHaveProperty("pageCount");
    expect(book).toHaveProperty("rating");

    // Check data types
    expect(typeof book.title).toBe("string");
    expect(typeof book.author).toBe("string");
    expect(typeof book.description).toBe("string");
    expect(typeof book.coverImageUrl).toBe("string");
    expect(typeof book.pageCount).toBe("number");
    expect(typeof book.rating).toBe("number");
  });

  it("verifies pageCount and rating are within expected ranges", () => {
    const books = generateBookMocks(10); // Generate multiple books to test the range effectively
    books.forEach((book) => {
      expect(book.pageCount).toBeGreaterThanOrEqual(100);
      expect(book.pageCount).toBeLessThanOrEqual(1000);
      expect(book.rating).toBeGreaterThanOrEqual(1);
      expect(book.rating).toBeLessThanOrEqual(5);
    });
  });
});
