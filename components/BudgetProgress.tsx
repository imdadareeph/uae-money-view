import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';

export function BudgetProgress() {
  const budgets = [
    {
      category: 'Dining',
      spent: 750,
      total: 1000,
      color: '#10B981',
    },
    {
      category: 'Shopping',
      spent: 1200,
      total: 1500,
      color: '#F59E0B',
    },
    {
      category: 'Transportation',
      spent: 300,
      total: 500,
      color: '#6366F1',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Progress</Text>
      <Card style={styles.card}>
        {budgets.map((budget, index) => {
          const progress = (budget.spent / budget.total) * 100;
          return (
            <View 
              key={budget.category} 
              style={[styles.budgetItem, index < budgets.length - 1 && styles.borderBottom]}
            >
              <View style={styles.budgetHeader}>
                <Text style={styles.category}>{budget.category}</Text>
                <Text style={styles.percentage}>{Math.round(progress)}%</Text>
              </View>
              <View style={styles.progressContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: `${progress}%`, backgroundColor: budget.color }
                  ]} 
                />
              </View>
              <View style={styles.budgetDetails}>
                <Text style={styles.spentText}>
                  AED {budget.spent.toLocaleString()}
                  <Text style={styles.totalText}> / {budget.total.toLocaleString()}</Text>
                </Text>
              </View>
            </View>
          );
        })}
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
  budgetItem: {
    marginBottom: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 16,
    marginBottom: 16,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
  },
  percentage: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#6B7280',
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  budgetDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  spentText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1F2937',
  },
  totalText: {
    color: '#6B7280',
  },
});