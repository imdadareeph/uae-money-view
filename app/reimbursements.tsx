import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { AppLayout } from '@/components/AppLayout';
import { RefreshCw, Plus, FileText } from 'lucide-react-native';

export default function ReimbursementsScreen() {
  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Reimbursements</Text>
          <Text style={styles.subtitle}>Track your expense reimbursements</Text>
          
          <View style={styles.summaryCard}>
            <View style={styles.summaryIconContainer}>
              <RefreshCw size={32} color="#10B981" />
            </View>
            <View style={styles.summaryDetails}>
              <Text style={styles.summaryAmount}>AED 0</Text>
              <Text style={styles.summaryLabel}>Total Pending Reimbursements</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color="#FFFFFF" />
            <Text style={styles.addButtonText}>Add New Reimbursement</Text>
          </TouchableOpacity>
          
          <View style={styles.listContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listTitle}>Your Reimbursements</Text>
              <TouchableOpacity>
                <Text style={styles.filterText}>Filter</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.emptyContainer}>
              <FileText size={40} color="#D1D5DB" />
              <Text style={styles.emptyText}>No reimbursements yet</Text>
              <Text style={styles.emptySubtext}>Add expenses that need to be reimbursed</Text>
            </View>
          </View>
          
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>Tips</Text>
            <View style={styles.tipCard}>
              <Text style={styles.tipText}>Keep your receipts organized for faster reimbursement processing</Text>
            </View>
            <View style={styles.tipCard}>
              <Text style={styles.tipText}>Add detailed descriptions to help identify expenses easily</Text>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  summaryIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  summaryDetails: {
    flex: 1,
  },
  summaryAmount: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  addButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginLeft: 8,
  },
  listContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
    marginBottom: 24,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
  },
  emptyContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  emptySubtext: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  tipsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  tipsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  tipCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#4B5563',
  },
});
