import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const TOTAL_STARS = 5;

export type RatingProps = {
  rating: number;
};

export function Rating({ rating }: RatingProps) {
  const renderedFullStars = [...Array(TOTAL_STARS).keys()].map((index) => {
    return (
      <FontAwesome
        key={index}
        name={index < rating ? "star" : "star-o"}
        size={18}
        color={Colors.gold}
      />
    );
  });

  return <View style={styles.container}>{renderedFullStars}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },
});
