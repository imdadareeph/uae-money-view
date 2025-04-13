import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GlobalTabBar } from '@/components/GlobalTabBar';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Stack screenOptions={{ 
          headerShown: false,
          contentStyle: { 
            backgroundColor: '#F8FAFC',
            paddingBottom: 80, // Add padding to prevent content from being hidden behind the tab bar
          }
        }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
        </Stack>
        <GlobalTabBar />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
