import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const saveToStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    Alert.alert("Error", "Failed to save data to storage");
  }
};

export const loadStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    Alert.alert("Error", "Failed to load data from storage");
  }
};
