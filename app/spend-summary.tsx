import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { AppLayout } from '@/components/AppLayout';
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react-native';

export default function SpendSummaryScreen() {
  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Spend Summary</Text>
          <Text style={styles.subtitle}>Track your spending patterns</Text>
          
          <View style={styles.summaryCard}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryTitle}>April 2025</Text>
              <Text style={styles.summarySubtitle}>Current Month</Text>
            </View>
            
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#ECFDF5' }]}>
                  <TrendingDown size={24} color="#10B981" />
                </View>
                <View>
                  <Text style={styles.summaryLabel}>Total Expenses</Text>
                  <Text style={styles.summaryValue}>AED 0</Text>
                </View>
              </View>
              
              <View style={styles.summaryItem}>
                <View style={[styles.iconContainer, { backgroundColor: '#EFF6FF' }]}>
                  <TrendingUp size={24} color="#3B82F6" />
                </View>
                <View>
                  <Text style={styles.summaryLabel}>Total Income</Text>
                  <Text style={styles.summaryValue}>AED 0</Text>
                </View>
              </View>
            </View>
          </View>
          
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Monthly Spending Trend</Text>
            <View style={styles.chartPlaceholder}>
              <BarChart3 size={48} color="#D1D5DB" />
              <Text style={styles.chartPlaceholderText}>No spending data available yet</Text>
            </View>
          </View>
          
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesTitle}>Top Spending Categories</Text>
            <Text style={styles.emptyState}>No spending categories to display</Text>
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 24,
  },
  summaryCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  summaryHeader: {
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  summarySubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
  },
  chartContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
    marginBottom: 24,
  },
  chartTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  chartPlaceholder: {
    height: 180,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPlaceholderText: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  categoriesContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  categoriesTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  emptyState: {
    textAlign: 'center',
    color: '#6B7280',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    paddingVertical: 24,
  },
});
