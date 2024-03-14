import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  StyleSheet,
  TextStyle,
  Text,
  View,
} from "react-native";

export type TextInputProps = Omit<NativeTextInputProps, "style"> & {
  label?: string;
  errorMessage?: string;
  style?: TextStyle;
};

export function TextInput({
  style,
  label,
  errorMessage,
  ...props
}: TextInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <NativeTextInput style={{ ...styles.input, ...style }} {...props} />
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 10,
    width: "100%",
  },
  input: {
    fontSize: 20,
  },
  label: { fontSize: 15, marginBottom: 5 },
});
