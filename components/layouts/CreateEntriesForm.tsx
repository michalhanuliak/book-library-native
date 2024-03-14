import { View } from "react-native";
import { Button } from "../atoms/Button";
import { useMocks } from "@/hooks/useMocks";

export type CreateEntriesFormProps = {};

export function CreateEntriesForm(props: CreateEntriesFormProps) {
  const { createBookEntries } = useMocks();

  return (
    <View>
      <Button
        title="Create 5 book entries"
        onPress={() => createBookEntries(5)}
      />
    </View>
  );
}
