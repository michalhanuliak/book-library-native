import { Book } from "@/domain";
import { Text } from "@/components/atoms/Text";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Rating } from "../molecules/Rating";

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

      <Text style={styles.title} weight="bold">
        {title}
      </Text>

      <Text color="secondary" weight="bold">
        by {author}
      </Text>
      <Rating rating={rating} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  image: {
    borderRadius: 6,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
  },
});
