import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';

export function BankBalance() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Total Balance</Text>
        <Text style={styles.amount}>AED 47,445</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Bank Balance</Text>
            <Text style={styles.value}>AED 277,933</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Bills Due</Text>
            <Text style={[styles.value, styles.warning]}>AED 278</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Spent</Text>
            <Text style={styles.value}>AED 2,277</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 4,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  warning: {
    color: '#EF4444',
  },
});