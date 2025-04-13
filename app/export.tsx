import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { AppLayout } from '@/components/AppLayout';
import { Mail, Calendar, FileText, Check } from 'lucide-react-native';

export default function ExportDataScreen() {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  return (
    <AppLayout>
      <StatusBar backgroundColor="#10B981" barStyle="light-content" />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <View style={styles.headerBanner}>
            <Text style={styles.newBadge}>NEW</Text>
            <Text style={styles.title}>Export Data</Text>
            <Text style={styles.subtitle}>Download your transaction history</Text>
          </View>
          
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Email Transaction CSV File</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <View style={styles.inputContainer}>
                <Mail size={20} color="#6B7280" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email address"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>
            
            <View style={styles.dateContainer}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
                <Text style={styles.inputLabel}>Start Date</Text>
                <View style={styles.inputContainer}>
                  <Calendar size={20} color="#6B7280" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    value={startDate}
                    onChangeText={setStartDate}
                  />
                </View>
              </View>
              
              <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
                <Text style={styles.inputLabel}>End Date</Text>
                <View style={styles.inputContainer}>
                  <Calendar size={20} color="#6B7280" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    value={endDate}
                    onChangeText={setEndDate}
                  />
                </View>
              </View>
            </View>
            
            <View style={styles.optionsContainer}>
              <Text style={styles.optionsTitle}>Include in Export</Text>
              
              <View style={styles.optionItem}>
                <View style={styles.checkboxChecked}>
                  <Check size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.optionText}>All Transactions</Text>
              </View>
              
              <View style={styles.optionItem}>
                <View style={styles.checkbox} />
                <Text style={styles.optionText}>Income Only</Text>
              </View>
              
              <View style={styles.optionItem}>
                <View style={styles.checkbox} />
                <Text style={styles.optionText}>Expenses Only</Text>
              </View>
              
              <View style={styles.optionItem}>
                <View style={styles.checkboxChecked}>
                  <Check size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.optionText}>Include Categories</Text>
              </View>
              
              <View style={styles.optionItem}>
                <View style={styles.checkboxChecked}>
                  <Check size={16} color="#FFFFFF" />
                </View>
                <Text style={styles.optionText}>Include Notes</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.exportButton}>
              <FileText size={20} color="#FFFFFF" />
              <Text style={styles.exportButtonText}>Export CSV File</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>About Data Export</Text>
            <Text style={styles.infoText}>
              • The CSV file will be sent to your email address{'\n'}
              • You can open CSV files with Excel, Google Sheets, or any spreadsheet software{'\n'}
              • Your data is encrypted during the export process{'\n'}
              • Allow up to 5 minutes for the email to arrive{'\n'}
              • Check your spam folder if you don't see the email
            </Text>
          </View>
          
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Export History</Text>
            <Text style={styles.emptyState}>No previous exports</Text>
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
  formContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  formTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#4B5563',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
  },
  inputIcon: {
    marginLeft: 12,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: 8,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionsTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#4B5563',
    marginBottom: 12,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    marginRight: 12,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    backgroundColor: '#10B981',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#1F2937',
  },
  exportButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exportButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginLeft: 8,
  },
  infoContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  infoTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#4B5563',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    lineHeight: 18,
  },
  historyContainer: {
    padding: 16,
  },
  historyTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#4B5563',
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
