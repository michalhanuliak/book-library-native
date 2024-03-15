import { BookCreateData } from "@/domain";
import { faker } from "@faker-js/faker";

export const generateBookMocks = (entriesCount: number): BookCreateData[] => {
  const books: BookCreateData[] = [];

  for (let i = 0; i < entriesCount; i++) {
    const book: BookCreateData = {
      title: faker.lorem.sentence(5).replace(/\.$/, ""), // Remove the trailing period
      author: faker.person.fullName(),
      description: faker.lorem.paragraph(),
      coverImageUrl: faker.image.url(),
      pageCount: faker.number.int({ min: 100, max: 1000 }),
      rating: parseFloat(faker.number.int({ min: 1, max: 5 }).toFixed(1)),
    };
    books.push(book);
  }

  return books;
};
