import { View, Text, StyleSheet } from "react-native";

export type ParametersProps = {
  label: string;
  value: string | number;
};

export function Parameters({ label, value }: ParametersProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
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
    fontWeight: "bold",
  },
  value: {
    fontSize: 20,
  },
});
