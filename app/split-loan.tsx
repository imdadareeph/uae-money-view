import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { AppLayout } from '@/components/AppLayout';
import { Users, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react-native';

export default function SplitLoanScreen() {
  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Split/Loan</Text>
          <Text style={styles.subtitle}>Track shared expenses and loans</Text>
          
          <View style={styles.balanceContainer}>
            <View style={styles.balanceCard}>
              <View style={[styles.iconContainer, { backgroundColor: '#ECFDF5' }]}>
                <ArrowUpRight size={24} color="#10B981" />
              </View>
              <Text style={styles.balanceLabel}>You'll Get</Text>
              <Text style={styles.balanceAmount}>AED 0</Text>
            </View>
            
            <View style={styles.balanceCard}>
              <View style={[styles.iconContainer, { backgroundColor: '#FEF2F2' }]}>
                <ArrowDownRight size={24} color="#EF4444" />
              </View>
              <Text style={styles.balanceLabel}>You'll Pay</Text>
              <Text style={styles.balanceAmount}>AED 0</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color="#FFFFFF" />
            <Text style={styles.addButtonText}>Add New Split or Loan</Text>
          </TouchableOpacity>
          
          <View style={styles.contactsContainer}>
            <Text style={styles.contactsTitle}>Your Contacts</Text>
            <View style={styles.emptyContactsContainer}>
              <Users size={40} color="#D1D5DB" />
              <Text style={styles.emptyContactsText}>No contacts added yet</Text>
              <Text style={styles.emptyContactsSubtext}>Add contacts to split expenses and track loans</Text>
            </View>
          </View>
          
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Recent Activity</Text>
            <Text style={styles.emptyState}>No recent activity</Text>
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
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  balanceCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
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
  contactsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
    marginBottom: 24,
  },
  contactsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  emptyContactsContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
  },
  emptyContactsText: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  emptyContactsSubtext: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
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
