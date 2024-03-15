import { CreateEntriesForm } from "@/components/layouts/CreateEntriesForm";
import { CrudHashForm } from "@/components/layouts/CrudHashForm";
import Layout from "@/constants/Layout";
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
    padding: Layout.containerPadding,
  },
});
