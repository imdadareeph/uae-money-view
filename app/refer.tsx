import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { AppLayout } from '@/components/AppLayout';
import { UserPlus, Share2, Gift } from 'lucide-react-native';

export default function ReferScreen() {
  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.headerBanner}>
            <Text style={styles.newBadge}>NEW</Text>
            <Text style={styles.title}>Refer and Earn</Text>
            <Text style={styles.subtitle}>Invite friends and earn rewards</Text>
          </View>
          
          <View style={styles.rewardCard}>
            <View style={styles.rewardIconContainer}>
              <Gift size={32} color="#10B981" />
            </View>
            <View style={styles.rewardDetails}>
              <Text style={styles.rewardTitle}>Earn AED 50</Text>
              <Text style={styles.rewardDescription}>
                For each friend who signs up and completes their first transaction
              </Text>
            </View>
          </View>
          
          <View style={styles.referralCodeContainer}>
            <Text style={styles.referralCodeLabel}>Your Referral Code</Text>
            <View style={styles.referralCodeBox}>
              <Text style={styles.referralCode}>UAEMONEY25</Text>
              <TouchableOpacity style={styles.copyButton}>
                <Text style={styles.copyButtonText}>Copy</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity style={styles.shareButton}>
            <Share2 size={20} color="#FFFFFF" />
            <Text style={styles.shareButtonText}>Share Your Invite</Text>
          </TouchableOpacity>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Friends Invited</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Friends Joined</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>AED 0</Text>
              <Text style={styles.statLabel}>Total Earned</Text>
            </View>
          </View>
          
          <View style={styles.howItWorksContainer}>
            <Text style={styles.howItWorksTitle}>How It Works</Text>
            
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Invite Friends</Text>
                <Text style={styles.stepDescription}>Share your unique referral code with friends</Text>
              </View>
            </View>
            
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Friends Sign Up</Text>
                <Text style={styles.stepDescription}>They create an account using your referral code</Text>
              </View>
            </View>
            
            <View style={styles.stepContainer}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Earn Rewards</Text>
                <Text style={styles.stepDescription}>Get AED 50 when they complete their first transaction</Text>
              </View>
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
  rewardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  rewardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  rewardDetails: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  rewardDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 20,
  },
  referralCodeContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  referralCodeLabel: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#4B5563',
    marginBottom: 8,
  },
  referralCodeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
  },
  referralCode: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    letterSpacing: 1,
  },
  copyButton: {
    backgroundColor: '#10B981',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  copyButtonText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  shareButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  howItWorksContainer: {
    padding: 16,
  },
  howItWorksTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 2,
  },
  stepDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
});
