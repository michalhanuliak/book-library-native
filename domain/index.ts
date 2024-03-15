export type Book = {
  _id: string;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  pageCount: number;
  rating: number;
};

export type BookCreateData = Omit<Book, "_id">;

export type BookEditData = Omit<Partial<Book>, "_id">;

export type BookRemoveData = Pick<Book, "_id">;

export type BookEditForm = Pick<Book, "title" | "author" | "description"> & {
  pageCount: string;
  rating: string;
};
