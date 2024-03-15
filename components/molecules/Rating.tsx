import Colors from "@/constants/Colors";
import { range } from "@/utils/helpers";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const TOTAL_STARS = 5;

export type RatingProps = {
  rating: number;
};

export function Rating({ rating }: RatingProps) {
  const renderedFullStars = range(1, TOTAL_STARS).map((index) => {
    const isFilled = index <= rating;

    return (
      <View key={index} testID={isFilled ? "filled-star" : "empty-star"}>
        <FontAwesome
          key={index}
          name={isFilled ? "star" : "star-o"}
          size={18}
          color={Colors.gold}
        />
      </View>
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
