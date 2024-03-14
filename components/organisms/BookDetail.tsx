import { Book } from "@/domain";
import { View, Text, Image, StyleSheet } from "react-native";
import { Parameters } from "../atoms/Parameters";

export type BookDetailProps = {
  book: Book;
};

export function BookDetail({ book }: BookDetailProps) {
  const { title, author, description, pageCount, rating, coverImageUrl } = book;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: coverImageUrl }}
        height={200}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.description}>{description}</Text>
        <Parameters label="Page Count" value={pageCount} />
        <Parameters label="Rating" value={rating} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  image: {
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
    color: "gray",
  },
  aboutContainer: {
    gap: 12,
    justifyContent: "flex-start",
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  pageCount: {
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
  },
});
