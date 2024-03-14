import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

export type TextProps = NativeTextProps;

export function Text(props: TextProps) {
  return <NativeText {...props} />;
}
