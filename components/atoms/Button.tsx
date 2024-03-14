import {
  Button as NativeButton,
  ButtonProps as NativeButtonProps,
} from "react-native";

export type ButtonProps = NativeButtonProps;

export function Button(props: ButtonProps) {
  return <NativeButton {...props} />;
}
