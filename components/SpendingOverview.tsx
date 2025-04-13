import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';

export function SpendingOverview() {
  const categories = [
    { name: 'Bills/Utilities', amount: 15000, icon: '📄' },
    { name: 'Shopping', amount: 5388, icon: '🛍️' },
    { name: 'Grocery', amount: 1644, icon: '🛒' },
    { name: 'Travel', amount: 1366, icon: '✈️' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Spend Areas</Text>
      <Card style={styles.card}>
        <View style={styles.grid}>
          {categories.map((category, index) => (
            <View key={index} style={styles.category}>
              <Text style={styles.icon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.amount}>AED {category.amount}</Text>
            </View>
          ))}
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1F2937',
  },
  card: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  category: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
    textAlign: 'center',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
});