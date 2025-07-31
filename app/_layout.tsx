import "react-native-reanimated";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";

import theme from "@/ui/styles/theme";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        {Platform.OS !== "web" ? <Stack.Screen name="hero" /> : null}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
