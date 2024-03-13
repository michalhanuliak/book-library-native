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
      <Image
        source={{
          uri: coverImageUrl,
        }}
        height={200}
        style={styles.image}
      />
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
  title: {
    fontSize: 16,
  },
  author: {
    fontSize: 13,
    color: "gray",
  },
});
