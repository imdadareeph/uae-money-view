import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Chrome as Home, ChartPie as PieChart, Settings, CreditCard } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function GlobalTabBar() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const tabs = [
    {
      name: 'Home',
      icon: Home,
      route: '/(tabs)',
    },
    {
      name: 'Transactions',
      icon: CreditCard,
      route: '/(tabs)/transactions',
    },
    {
      name: 'Budget',
      icon: PieChart,
      route: '/(tabs)/budget',
    },
    {
      name: 'Settings',
      icon: Settings,
      route: '/(tabs)/settings',
    },
  ];

  const isActive = (route: string) => {
    if (route === '/(tabs)' && pathname === '/(tabs)/index') {
      return true;
    }
    return pathname === route;
  };

  return (
    <View style={[
      styles.container, 
      { 
        height: 60 + (insets.bottom > 0 ? insets.bottom - 10 : 0),
        paddingBottom: insets.bottom > 0 ? insets.bottom - 10 : 8,
      }
    ]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.route}
          style={styles.tab}
          onPress={() => router.push(tab.route as any)}
        >
          <tab.icon
            size={24}
            color={isActive(tab.route) ? '#10B981' : '#6B7280'}
          />
          <Text
            style={[
              styles.tabText,
              { color: isActive(tab.route) ? '#10B981' : '#6B7280' },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingTop: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Inter-Regular',
  },
});
