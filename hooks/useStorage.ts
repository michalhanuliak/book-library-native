import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage() {
  const saveToStorage = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  const getFromStorage = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      // error reading value
    }
  };

  return { getFromStorage, saveToStorage };
}
