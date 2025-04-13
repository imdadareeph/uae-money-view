import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { AppLayout } from '@/components/AppLayout';
import { Award, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function CreditsScreen() {
  const router = useRouter();

  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.headerBanner}>
            <Text style={styles.newBadge}>NEW</Text>
            <Text style={styles.title}>Referral Credits</Text>
            <Text style={styles.subtitle}>Track and use your earned credits</Text>
          </View>
          
          <View style={styles.balanceCard}>
            <View style={styles.balanceIconContainer}>
              <Award size={32} color="#10B981" />
            </View>
            <View style={styles.balanceDetails}>
              <Text style={styles.balanceAmount}>AED 0</Text>
              <Text style={styles.balanceLabel}>Available Credits</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.useCreditsButton}>
            <Text style={styles.useCreditsButtonText}>Use Credits</Text>
          </TouchableOpacity>
          
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Credit History</Text>
            
            <View style={styles.emptyContainer}>
              <Award size={40} color="#D1D5DB" />
              <Text style={styles.emptyText}>No credits earned yet</Text>
              <Text style={styles.emptySubtext}>
                Invite friends to earn credits that you can use towards premium features
              </Text>
              
              <TouchableOpacity 
                style={styles.inviteButton}
                onPress={() => router.push('/refer' as any)}
              >
                <Text style={styles.inviteButtonText}>Invite Friends</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>How to Use Credits</Text>
            
            <View style={styles.infoCard}>
              <Text style={styles.infoCardTitle}>Premium Features</Text>
              <Text style={styles.infoCardDescription}>
                Use credits to unlock premium features like advanced analytics and custom categories
              </Text>
              <TouchableOpacity style={styles.infoCardButton}>
                <Text style={styles.infoCardButtonText}>Explore Premium</Text>
                <ChevronRight size={16} color="#10B981" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.infoCard}>
              <Text style={styles.infoCardTitle}>Subscription Discounts</Text>
              <Text style={styles.infoCardDescription}>
                Apply credits towards subscription fees for UAE Expense Tracker Pro
              </Text>
              <TouchableOpacity style={styles.infoCardButton}>
                <Text style={styles.infoCardButtonText}>View Plans</Text>
                <ChevronRight size={16} color="#10B981" />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.termsContainer}>
            <Text style={styles.termsTitle}>Terms & Conditions</Text>
            <Text style={styles.termsText}>
              • Credits expire 12 months after they are earned{'\n'}
              • Minimum credit balance required for redemption{'\n'}
              • Cannot be combined with other promotional offers{'\n'}
              • Cannot be transferred to other users
            </Text>
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
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 24,
  },
  headerBanner: {
    backgroundColor: '#10B981',
    padding: 20,
    alignItems: 'center',
  },
  newBadge: {
    backgroundColor: '#FF4757',
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    opacity: 0.9,
  },
  balanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  balanceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  balanceDetails: {
    flex: 1,
  },
  balanceAmount: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  balanceLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  useCreditsButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    padding: 12,
    margin: 16,
    alignItems: 'center',
  },
  useCreditsButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  historyContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  historyTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
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
    marginBottom: 16,
  },
  inviteButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  infoContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  infoTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  infoCardTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 4,
  },
  infoCardDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 12,
  },
  infoCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoCardButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#10B981',
    marginRight: 4,
  },
  termsContainer: {
    padding: 16,
  },
  termsTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#4B5563',
    marginBottom: 8,
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 18,
  },
});
