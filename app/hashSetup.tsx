import { Text } from "@/components/atoms/Text";
import { CrudHashForm } from "@/components/layouts/CrudHashForm";
import Layout from "@/constants/Layout";
import { Linking, StyleSheet, View } from "react-native";

export default function HashSetupScreen() {
  return (
    <View style={styles.container}>
      <Text>
        Copy hash from{" "}
        <Text
          weight="bold"
          color="secondary"
          onPress={() => Linking.openURL("https://crudcrud.com")}
        >
          Crud Crud
        </Text>
      </Text>
      <CrudHashForm redirectTo="/" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: Layout.containerPadding,
  },
});
