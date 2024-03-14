import { CreateEntriesForm } from "@/components/layouts/CreateEntriesForm";
import { CrudHashForm } from "@/components/layouts/CrudHashForm";
import { StyleSheet, View } from "react-native";

export default function TabSettingsScreen() {
  return (
    <View style={styles.container}>
      <CreateEntriesForm />
      <CrudHashForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
