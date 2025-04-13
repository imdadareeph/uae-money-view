import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="transactions" />
      <Stack.Screen name="budget" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="accounts" />
      <Stack.Screen name="bills" />
      <Stack.Screen name="cash" />
      <Stack.Screen name="credits" />
      <Stack.Screen name="export" />
      <Stack.Screen name="refer" />
      <Stack.Screen name="reimbursements" />
      <Stack.Screen name="spend-summary" />
      <Stack.Screen name="split-loan" />
    </Stack>
  );
}
