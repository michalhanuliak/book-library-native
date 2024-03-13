import { useMocks } from "@/hooks/useMocks";
import { StyleSheet, View, Text, Button } from "react-native";

export default function TabSettingsScreen() {
  const { createBookEntries } = useMocks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Create book entries" onPress={createBookEntries} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
