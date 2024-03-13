export type Book = {
  _id: string;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  pageCount: number;
  rating: number;
  releaseDate: string;
};

export type BookCreateData = Omit<Book, "_id">;
