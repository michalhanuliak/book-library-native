import { Book, BookCreateData } from "@/domain";
import { faker } from "@faker-js/faker";

export const generateBookMocks = (): BookCreateData[] => {
  const booksCount = faker.number.int({ min: 5, max: 15 });
  const books: BookCreateData[] = [];

  for (let i = 0; i < booksCount; i++) {
    const book: BookCreateData = {
      title: faker.lorem.sentence(5).replace(/\.$/, ""), // Remove the trailing period
      author: faker.person.fullName(),
      description: faker.lorem.paragraph(),
      coverImageUrl: faker.image.url(),
      pageCount: faker.number.int({ min: 100, max: 1000 }),
      rating: parseFloat(faker.number.float({ min: 1, max: 5 }).toFixed(1)),
      releaseDate: faker.date
        .between({ from: "2010-01-01", to: new Date().toISOString() })
        .toISOString()
        .split("T")[0], // YYYY-MM-DD format
    };
    books.push(book);
  }

  return books;
};
