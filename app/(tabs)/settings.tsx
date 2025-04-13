import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { AppLayout } from '@/components/AppLayout';

interface SettingsItemProps {
  title: string;
  subtitle?: string;
}

export default function SettingsScreen() {
  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.section}>
          <SettingsItem title="Profile" />
          <SettingsItem title="Notifications" />
          <SettingsItem title="Security" />
        </View>
        
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.section}>
          <SettingsItem title="Currency" subtitle="AED" />
          <SettingsItem title="Language" subtitle="English" />
          <SettingsItem title="Theme" subtitle="Light" />
        </View>
        
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.section}>
          <SettingsItem title="Help Center" />
          <SettingsItem title="Contact Us" />
          <SettingsItem title="About" />
        </View>
      </ScrollView>
    </AppLayout>
  );
}

function SettingsItem({ title, subtitle }: SettingsItemProps) {
  return (
    <TouchableOpacity style={styles.settingsItem}>
      <View>
        <Text style={styles.settingsItemTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingsItemSubtitle}>{subtitle}</Text>}
      </View>
      <ChevronRight size={20} color="#6B7280" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#6B7280',
    marginBottom: 8,
    marginLeft: 4,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  settingsItemTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
  },
  settingsItemSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginTop: 2,
  },
});
