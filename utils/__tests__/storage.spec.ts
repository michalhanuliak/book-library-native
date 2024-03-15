import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { saveToStorage, loadStorage } from "../storage";

// Mocking AsyncStorage and Alert with proper typing
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock("react-native", () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

// TypeScript cast to jest.Mock
const mockSetItem = AsyncStorage.setItem as jest.MockedFunction<
  typeof AsyncStorage.setItem
>;
const mockGetItem = AsyncStorage.getItem as jest.MockedFunction<
  typeof AsyncStorage.getItem
>;
const mockAlert = Alert.alert as jest.Mock;

describe("Storage Functions", () => {
  beforeEach(() => {
    // Clear mock calls before each test
    jest.clearAllMocks();
  });

  describe("saveToStorage", () => {
    it("saves data to AsyncStorage successfully", async () => {
      mockSetItem.mockResolvedValue(void 0); // Simulate successful save
      await saveToStorage("testKey", "testValue");
      expect(mockSetItem).toHaveBeenCalledWith("testKey", "testValue");
      expect(mockAlert).not.toHaveBeenCalled(); // Ensure no error alert was shown
    });

    it("shows an error if saving to AsyncStorage fails", async () => {
      mockSetItem.mockRejectedValue(new Error("Storage error")); // Simulate a failure
      await saveToStorage("testKey", "testValue");
      expect(mockSetItem).toHaveBeenCalledWith("testKey", "testValue");
      expect(mockAlert).toHaveBeenCalledWith(
        "Error",
        "Failed to save data to storage"
      );
    });
  });

  describe("loadStorage", () => {
    it("loads data from AsyncStorage successfully", async () => {
      mockGetItem.mockResolvedValue("retrievedValue"); // Simulate successful retrieval
      const result = await loadStorage("testKey");
      expect(mockGetItem).toHaveBeenCalledWith("testKey");
      expect(result).toEqual("retrievedValue");
      expect(mockAlert).not.toHaveBeenCalled(); // Ensure no error alert was shown
    });

    it("shows an error if loading from AsyncStorage fails", async () => {
      mockGetItem.mockRejectedValue(new Error("Storage error")); // Simulate a failure
      await loadStorage("testKey");
      expect(mockGetItem).toHaveBeenCalledWith("testKey");
      expect(mockAlert).toHaveBeenCalledWith(
        "Error",
        "Failed to load data from storage"
      );
    });
  });
});
