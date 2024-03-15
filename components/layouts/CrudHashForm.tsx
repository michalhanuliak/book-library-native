import { Alert, StyleSheet, View } from "react-native";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { useEffect, useState } from "react";
import { loadStorage, saveToStorage } from "@/utils/storage";
import { Href, router, useLocalSearchParams } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

export type CrudHashFormProps = {
  redirectTo?: Href<string>;
};

export function CrudHashForm({ redirectTo }: CrudHashFormProps) {
  const queryClient = useQueryClient();
  const params = useLocalSearchParams();
  const error = params["errorMessage"];

  const [input, setInput] = useState("");

  const handleInputChange = (text: string) => {
    setInput(text);
  };

  const handleSaveToStorage = () => {
    saveToStorage("crudHash", input).then(() => {
      queryClient.invalidateQueries({ queryKey: ["/books"] });
      Alert.alert("Hash saved successfully!");
      if (redirectTo) {
        router.push(redirectTo);
      }
    });
  };

  useEffect(() => {
    const syncStorage = async () => {
      const crudHash = await loadStorage("crudHash");
      if (crudHash) {
        setInput(crudHash);
      }
    };
    syncStorage();
  }, []);

  return (
    <View style={style.container}>
      <Text>CRUD CRUD HASH</Text>
      <TextInput
        placeholder="Crud hash"
        onChangeText={handleInputChange}
        value={input}
        style={style.input}
      />
      {error && <Text color="danger">Error: {error}</Text>}
      <Button title="Save" onPress={handleSaveToStorage} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    backgroundColor: "#fff",
  },
});
