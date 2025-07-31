import { View, Text, Platform } from "react-native";
import { Redirect } from "expo-router";

export default function HomeScreen() {
  if (Platform.OS !== "web") {
    return <Redirect href="/hero" />;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Home screen</Text>
    </View>
  );
}
