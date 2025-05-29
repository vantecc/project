import { Stack } from 'expo-router';

export default function CredentialLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="personal" />
      <Stack.Screen name="professional" />
      <Stack.Screen name="address" />
      <Stack.Screen name="complete" />
    </Stack>
  );
}