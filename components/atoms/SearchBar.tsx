import { Feather, Entypo } from "@expo/vector-icons";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextInput } from "./TextInput";
import Colors from "@/constants/Colors";

export type SearchBarProps = {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (text: string) => void;
  setClicked: (clicked: boolean) => void;
};

export const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}: SearchBarProps) => {
  return (
    <View style={styles.searchBar}>
      <Feather
        name="search"
        size={20}
        color="black"
        style={{ marginLeft: 1 }}
      />
      <TextInput
        value={searchPhrase}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setClicked(true);
        }}
        onBlur={() => {
          setClicked(false);
        }}
        style={styles.searchInput}
      />
      {clicked && (
        <Entypo
          name="cross"
          size={20}
          color="black"
          style={{ position: "absolute", right: 10 }}
          onPress={() => {
            setSearchPhrase("");
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  searchInput: {
    borderWidth: 0,
  },
});
