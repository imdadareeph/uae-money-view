import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Card } from './Card';
import { PieChart } from 'react-native-chart-kit';

export function ExpenseChart() {
  const data = [
    {
      name: 'Bills/Utilities',
      amount: 15000,
      color: '#F87171',
      legendFontColor: '#1F2937',
    },
    {
      name: 'Shopping',
      amount: 5388,
      color: '#60A5FA',
      legendFontColor: '#1F2937',
    },
    {
      name: 'Grocery',
      amount: 1644,
      color: '#34D399',
      legendFontColor: '#1F2937',
    },
    {
      name: 'Travel',
      amount: 1366,
      color: '#FBBF24',
      legendFontColor: '#1F2937',
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Distribution</Text>
      <Card style={styles.card}>
        <PieChart
          data={data}
          width={Dimensions.get('window').width - 64}
          height={220}
          chartConfig={chartConfig}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="0"
          absolute
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 12,
  },
  card: {
    padding: 16,
    alignItems: 'center',
  },
});