import { StyleSheet, View } from "react-native";
import { Button } from "../atoms/Button";
import { useMocks } from "@/hooks/useMocks";
import { Text } from "../atoms/Text";

export type CreateEntriesFormProps = {};

export function CreateEntriesForm(props: CreateEntriesFormProps) {
  const { createBookEntries, isPending } = useMocks();

  return (
    <View style={style.container}>
      <Text>DATA MOCK</Text>
      <Button
        title="Create 5 book entries"
        onPress={() => createBookEntries(5)}
        isLoading={isPending}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 10,
  },
});
