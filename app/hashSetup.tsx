import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { CrudHashForm } from "@/components/layouts/CrudHashForm";
import { Link } from "expo-router";
import { Linking, View } from "react-native";

export default function HashSetupScreen() {
  return (
    <View>
      <Text>
        Copy hash from{" "}
        <Button
          title="Crud Crud"
          onPress={() => Linking.openURL("https://crudcrud.com")}
        />
      </Text>
      <CrudHashForm />
    </View>
  );
}
