import React from "react";
import { Controller, FieldValues, Control, Path } from "react-hook-form";
import { TextInput, TextInputProps } from "../atoms/TextInput";

export type ControlledTextInputProps<T extends FieldValues> = TextInputProps & {
  name: Path<T>;
  control: Control<T>;
};

export function ControlledTextInput<T extends FieldValues>({
  name,
  control,
  ...props
}: ControlledTextInputProps<T>) {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          errorMessage={error?.message}
          {...props}
        />
      )}
      name={name}
      rules={{ required: true }}
    />
  );
}
