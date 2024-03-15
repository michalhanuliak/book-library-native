import { StyleSheet, View } from "react-native";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { useEffect, useState } from "react";
import { loadStorage, saveToStorage } from "@/utils/storage";

export type CrudHashFormProps = {};

export function CrudHashForm(props: CrudHashFormProps) {
  const [input, setInput] = useState("");

  const handleInputChange = (text: string) => {
    setInput(text);
  };

  const handleSaveToStorage = () => {
    saveToStorage("crudHash", input);
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
