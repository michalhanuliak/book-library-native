import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { QueryClientProvider } from "@/infrastructure/QueryClientProvider";
import { loadStorage } from "@/utils/storage";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "Books",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
  const param = useGlobalSearchParams();
  const id = param.id as string;

  useEffect(() => {
    const syncStorage = async () => {
      const crudHash = await loadStorage("crudHash");
      if (!crudHash) {
        router.push("/hashSetup");
      }
    };
    syncStorage();
  });

  return (
    <QueryClientProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="hashSetup" options={{ headerBackVisible: false }} />
        <Stack.Screen
          name="detail"
          options={{
            headerShadowVisible: true,
            headerTitle: "Book detail",
            headerRight: () => {
              return (
                <FontAwesome.Button
                  name="pencil"
                  backgroundColor="transparent"
                  color="black"
                  onPress={() => {
                    router.push({
                      pathname: "/edit",
                      params: { id: id },
                    });
                  }}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="edit"
          options={{
            headerShadowVisible: true,
            headerTitle: "Book edit",
            headerRight: () => {
              return (
                <FontAwesome.Button
                  name="trash"
                  backgroundColor="transparent"
                  color="black"
                  onPress={() => {
                    router.push("/:id/edit");
                  }}
                />
              );
            },
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
