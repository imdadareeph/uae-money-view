import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react-native';

export function SpendingSummary() {
  const spendingData = {
    daily: {
      amount: 250.60,
      trend: 'up',
      percentage: 15,
    },
    weekly: {
      amount: 1580.75,
      trend: 'down',
      percentage: 8,
    },
    monthly: {
      amount: 5890.20,
      trend: 'neutral',
      percentage: 0,
    },
  };

  const renderTrendIcon = (trend: string, size: number = 16) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={size} color="#EF4444" />;
      case 'down':
        return <TrendingDown size={size} color="#10B981" />;
      default:
        return <Minus size={size} color="#6B7280" />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Overview</Text>
      <Card style={styles.card}>
        {Object.entries(spendingData).map(([period, data], index) => (
          <View key={period} style={[
            styles.section,
            index < 2 && styles.borderBottom
          ]}>
            <View>
              <Text style={styles.label}>{period.charAt(0).toUpperCase() + period.slice(1)}</Text>
              <Text style={styles.amount}>AED {data.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
            </View>
            <View style={styles.trendContainer}>
              {renderTrendIcon(data.trend)}
              <Text style={[
                styles.trendText,
                { color: data.trend === 'up' ? '#EF4444' : data.trend === 'down' ? '#10B981' : '#6B7280' }
              ]}>
                {data.percentage}%
              </Text>
            </View>
          </View>
        ))}
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
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  amount: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 8,
  },
  trendText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginLeft: 4,
  },
});