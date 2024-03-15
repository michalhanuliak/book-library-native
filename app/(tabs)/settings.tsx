import { CreateEntriesForm } from "@/components/layouts/CreateEntriesForm";
import { CrudHashForm } from "@/components/layouts/CrudHashForm";
import { StyleSheet, View } from "react-native";

export default function TabSettingsScreen() {
  return (
    <View style={styles.container}>
      <CrudHashForm />
      <CreateEntriesForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
});
