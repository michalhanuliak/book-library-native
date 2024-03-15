import { FontAwesome } from "@expo/vector-icons";
import { useRemoveBookAdapter } from "@/adapters/useBooksAdapter";
import { router } from "expo-router";
import { useGlobalSearchParams } from "expo-router";
import Colors from "@/constants/Colors";

export function RemoveBookIcon() {
  const param = useGlobalSearchParams();
  const id = param.id as string;

  const { removeBook } = useRemoveBookAdapter(id);

  return (
    <FontAwesome.Button
      name="trash-o"
      backgroundColor="transparent"
      color={Colors.primary}
      underlayColor="transparent"
      onPress={() => {
        removeBook();
        router.push("/");
      }}
    />
  );
}
