import Colors from "@/constants/Colors";
import {
  Text as NativeText,
  TextProps as NativeTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";

export type TextProps = Omit<NativeTextProps, "style"> & {
  style?: TextStyle;
  color?: "primary" | "secondary" | "gray";
  weight?: "bold" | "normal";
};

export function Text({
  style,
  weight = "normal",
  color = "primary",
  ...props
}: TextProps) {
  return (
    <NativeText
      style={{
        ...styles.common,
        ...(color === "primary" && styles.colorPrimary),
        ...(color === "secondary" && styles.colorSecondary),
        ...(color === "gray" && styles.colorGray),
        ...(weight === "bold" ? styles.bold : styles.normal),
        ...style,
      }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  common: {
    fontSize: 13,
  },
  colorPrimary: {
    color: Colors.primary,
  },
  colorSecondary: {
    color: Colors.secondary,
  },
  colorGray: {
    color: Colors.gray,
  },
  bold: {
    fontWeight: "bold",
  },
  normal: {
    fontWeight: "normal",
  },
});
