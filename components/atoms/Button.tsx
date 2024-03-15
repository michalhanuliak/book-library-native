import Colors from "@/constants/Colors";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Text";

export type ButtonProps = {
  variant?: "filled" | "outlined";
  disabled?: boolean;
  isLoading?: boolean;
  title: string;
  onPress: () => void;
};

export function Button({
  variant,
  disabled,
  isLoading,
  title,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        ...styles.button,
        ...(variant === "outlined" && styles.buttonOutlined),
        ...((disabled || isLoading) && styles.buttonDisabled),
      }}
      disabled={disabled || isLoading}
    >
      <Text style={styles.buttonText}>{title}</Text>
      {isLoading && <ActivityIndicator />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    flexDirection: "row",
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: "transparent",
  },
  buttonDisabled: {
    backgroundColor: Colors.grayLight,
    color: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
