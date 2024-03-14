import { Book, BookCreateData, BookEditForm } from "@/domain";
import { View, Text, Image, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledTextInput } from "../molecules/ControlledTextInput";
import { Button } from "../atoms/Button";
import { EditBookSchema } from "@/schemas/booksSchemas";

export type BookEditProps = {
  book: Book;
  onSubmit: (book: BookEditForm) => void;
};

export function BookEdit({ book, onSubmit }: BookEditProps) {
  const { _id, rating, pageCount, ...bookData } = book;
  const { control, handleSubmit } = useForm<BookEditForm>({
    defaultValues: {
      ...bookData,
      pageCount: pageCount.toString(),
      rating: rating.toString(),
    },
    resolver: zodResolver(EditBookSchema),
  });

  return (
    <View style={styles.container}>
      <ControlledTextInput label="Title" name="title" control={control} />
      <ControlledTextInput label="Author" name="author" control={control} />
      <ControlledTextInput
        label="Description"
        name="description"
        control={control}
      />
      <ControlledTextInput
        label="Page count"
        name="pageCount"
        control={control}
      />
      <ControlledTextInput label="Rating" name="rating" control={control} />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 16,
  },
});