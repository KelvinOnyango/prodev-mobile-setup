import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" /> // Home screen
      <Stack.Screen name="join" /> // Join screen
      <Stack.Screen name="signin" /> // Signin screen
    </Stack>
  );
}
