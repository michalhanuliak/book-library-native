import { PropsWithChildren } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export function DismissKeyboard({ children }: PropsWithChildren) {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}
