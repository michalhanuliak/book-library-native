import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Button } from "../Button"; // Adjust the import path as necessary

describe("Button", () => {
  it("renders correctly with default props", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Press me" onPress={onPressMock} />
    );

    expect(getByText("Press me")).toBeTruthy();
  });

  it("renders outlined variant correctly", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button variant="outlined" title="Press me" onPress={onPressMock} />
    );

    expect(getByText("Press me")).toBeDefined();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Press me" onPress={onPressMock} />
    );

    fireEvent.press(getByText("Press me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("displays an activity indicator when loading", () => {
    const onPressMock = jest.fn();
    const { getByText, getByTestId } = render(
      <Button isLoading title="Press me" onPress={onPressMock} />
    );

    expect(getByText("Press me")).toBeTruthy();
    expect(getByTestId("loading-indicator")).toBeTruthy();
  });

  it("is disabled when disabled prop is true", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button disabled title="Press me" onPress={onPressMock} />
    );

    expect(getByTestId("button").props.accessibilityState.disabled).toBe(true);
  });

  it("is disabled when isLoading prop is true", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button isLoading title="Press me" onPress={onPressMock} />
    );

    expect(getByTestId("button").props.accessibilityState.disabled).toBe(true);
  });
});
