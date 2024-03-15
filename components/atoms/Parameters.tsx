import { View, StyleSheet } from "react-native";
import { Text } from "@/components/atoms/Text";

export type ParametersProps = {
  label: string;
  value: string | number;
};

export function Parameters({ label, value }: ParametersProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} weight="bold">
        {label}
      </Text>
      <Text style={styles.value} color="secondary">
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 20,
  },
});
