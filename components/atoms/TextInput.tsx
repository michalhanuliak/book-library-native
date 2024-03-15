import Colors from "@/constants/Colors";
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
    <View style={{ ...styles.container, ...style }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <NativeTextInput style={styles.input} {...props} />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    borderColor: Colors.grayLight,
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    fontSize: 20,
  },
  label: { fontSize: 15, marginBottom: 5, color: Colors.gray },
  error: {
    color: Colors.danger,
  },
});
