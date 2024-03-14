import { z } from "zod";

export const EditBookSchema = z.object({
  title: z.string().min(1).max(64),
  author: z.string().min(1).max(64),
  description: z.string().max(1024),
  pageCount: z.preprocess((a) => parseInt(a as string), z.number().min(1)),
  rating: z.preprocess((a) => parseInt(a as string), z.number().min(1).max(5)),
  coverImageUrl: z.string().url(),
});
