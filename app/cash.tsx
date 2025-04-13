import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { AppLayout } from '@/components/AppLayout';
import { Banknote } from 'lucide-react-native';

export default function CashScreen() {
  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Cash</Text>
          <Text style={styles.subtitle}>Track your cash transactions</Text>
          
          <View style={styles.cashCard}>
            <View style={styles.cashIconContainer}>
              <Banknote size={32} color="#10B981" />
            </View>
            <View style={styles.cashDetails}>
              <Text style={styles.cashAmount}>AED 0</Text>
              <Text style={styles.cashLabel}>Current Cash Balance</Text>
            </View>
          </View>
          
          <View style={styles.actionsContainer}>
            <View style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Add Cash</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Spend Cash</Text>
            </View>
          </View>
          
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Recent Cash Transactions</Text>
            <Text style={styles.emptyState}>No cash transactions recorded yet</Text>
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
  cashCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  cashIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cashDetails: {
    flex: 1,
  },
  cashAmount: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  cashLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#10B981',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  historyContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  historyTitle: {
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
