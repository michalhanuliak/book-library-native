import { Book } from "@/domain";
import { View, Image, StyleSheet } from "react-native";
import { Parameters } from "../atoms/Parameters";
import { Text } from "../atoms/Text";
import { Rating } from "../molecules/Rating";

export type BookDetailProps = {
  book: Book;
};

export function BookDetail({ book }: BookDetailProps) {
  const { title, author, description, pageCount, rating, coverImageUrl } = book;

  return (
    <View style={styles.container}>
      <View style={styles.mainInfoContainer}>
        <View style={styles.mainInfo}>
          <Image
            style={styles.image}
            source={{ uri: coverImageUrl }}
            height={250}
          />
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.title} weight="bold">
            {title}
          </Text>
          <Text color="secondary" weight="bold">
            by {author}
          </Text>
          <Rating rating={rating} />
        </View>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text color="gray">{description}</Text>
      </View>

      <Parameters label="Page Count" value={pageCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 16,
  },
  mainInfoContainer: {
    gap: 12,
    flexDirection: "row",
  },
  mainInfo: {
    flex: 1,
  },
  additionalInfo: {
    flex: 1,
    gap: 8,
  },
  image: {
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
  },
  aboutContainer: {
    gap: 8,
    justifyContent: "flex-start",
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
