import { Feather, Entypo } from "@expo/vector-icons";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextInput } from "./TextInput";

export type SearchBarProps = {
  clicked: boolean;
  searchPhrase: string;
  containerStyle?: ViewStyle;
  setSearchPhrase: (text: string) => void;
  setClicked: (clicked: boolean) => void;
};

export const SearchBar = ({
  clicked,
  searchPhrase,
  containerStyle,
  setSearchPhrase,
  setClicked,
}: SearchBarProps) => {
  return (
    <View style={Object.assign(styles.container, containerStyle)}>
      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          placeholder="Search"
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
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchInput: {
    borderWidth: 0,
  },
});
