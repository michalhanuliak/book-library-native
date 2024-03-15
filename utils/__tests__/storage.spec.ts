import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveToStorage, loadStorage } from "../storage"; // adjust the import path as necessary

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe("AsyncStorage", () => {
  const testKey = "key";
  const testValue = "value";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("saves a value", async () => {
    (AsyncStorage.setItem as jest.Mock).mockResolvedValue(null);
    await saveToStorage(testKey, testValue);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(testKey, testValue);
  });

  it("loads a value", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(testValue);
    const result = await loadStorage(testKey);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(testKey);
    expect(result).toBe(testValue);
  });

  it("handles error on saving", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    const error = new Error("Failed to save");
    (AsyncStorage.setItem as jest.Mock).mockRejectedValue(error);

    await saveToStorage(testKey, testValue);
    expect(console.error).toHaveBeenCalledWith(error);

    consoleErrorSpy.mockRestore();
  });
});
