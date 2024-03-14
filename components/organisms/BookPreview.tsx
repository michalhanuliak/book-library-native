import { Book } from "@/domain";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export type BookPreviewProps = Pick<
  Book,
  "title" | "author" | "rating" | "coverImageUrl"
> & {
  handleNavigate: () => void;
};

export function BookPreview({
  title,
  author,
  rating,
  coverImageUrl,
  handleNavigate,
}: BookPreviewProps) {
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: coverImageUrl,
          }}
          height={250}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.author}>{author}</Text>
        <Text>{rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  image: {
    borderRadius: 8,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  author: {
    fontSize: 13,
    color: "gray",
  },
});
