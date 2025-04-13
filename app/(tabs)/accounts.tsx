import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import { 
  ArrowLeft, 
  Edit, 
  MoreVertical
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Navbar } from '@/components/Navbar';

interface BankAccount {
  id: string;
  name: string;
  accountNumber: string;
  balance: number;
  currency: string;
  lastUpdated?: string;
  estimated?: boolean;
  logoColor: string;
}

const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: '1',
    name: 'Emirates NBD',
    accountNumber: 'ENBD-x891',
    balance: 1572830,
    currency: 'AED',
    lastUpdated: '09 Dec',
    logoColor: '#003DA5', // ENBD blue color
  },
  {
    id: '2',
    name: 'Mashreq Bank',
    accountNumber: 'MSRQ-x2945',
    balance: 236786,
    currency: 'AED',
    estimated: true,
    logoColor: '#E41B17', // Mashreq red color
  },
  {
    id: '3',
    name: 'ADCB Bank',
    accountNumber: 'ADCB-x9221',
    balance: 479320,
    currency: 'AED',
    lastUpdated: '09 Dec',
    logoColor: '#007A3D', // ADCB green color
  }
];

const TABS = ['BANK A/C', 'CREDIT CARDS', 'WALLETS', 'GREEN ACCOUNT'];

export default function AccountsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState(0);
  
  const totalBalance = BANK_ACCOUNTS.reduce((sum: number, account: BankAccount) => {
    return sum + account.balance;
  }, 0);
  
  const formatCurrency = (amount: number, currency: string) => {
    if (currency === 'AED') {
      return `${currency} ${amount.toLocaleString()}`;
    } else {
      return `${currency} ${amount.toLocaleString()}`;
    }
  };
  
  // Function to get bank logo
  const getBankLogo = (account: BankAccount) => {
    // Use the PNG logo images
    let logoSource;
    
    switch(account.name) {
      case 'Emirates NBD':
        logoSource = require('@/assets/images/enbd-logo.png');
        break;
      case 'Mashreq Bank':
        logoSource = require('@/assets/images/mashreq-logo.png');
        break;
      case 'ADCB Bank':
        logoSource = require('@/assets/images/adcb-logo.png');
        break;
      default:
        // Fallback to colored background with initial
        return (
          <View style={[styles.logoContainer, { backgroundColor: account.logoColor }]}>
            <Text style={styles.logoText}>
              {account.name.split(' ')[0].charAt(0)}
            </Text>
          </View>
        );
    }
    
    // Return Image component with the logo
    return (
      <View style={styles.logoContainer}>
        <Image 
          source={logoSource}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
    );
  };
  
  // Function to render bank logo
  const renderBankLogo = (account: BankAccount) => {
    return getBankLogo(account);
  };
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <StatusBar backgroundColor="#8BC34A" barStyle="light-content" />
      <Navbar />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>
          
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.editButton}>
              <Edit color="#fff" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreButton}>
              <MoreVertical color="#fff" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Current Total Balance</Text>
          <Text style={styles.accountsCount}>{BANK_ACCOUNTS.length} Accounts</Text>
          <Text style={styles.totalBalance}>AED {totalBalance.toLocaleString()}</Text>
        </View>
      </View>
      
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {TABS.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              activeTab === index && styles.activeTab
            ]}
            onPress={() => setActiveTab(index)}
          >
            <Text style={[
              styles.tabText,
              activeTab === index && styles.activeTabText
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Account List */}
      <ScrollView style={styles.accountsList}>
        {BANK_ACCOUNTS.map(account => (
          <TouchableOpacity key={account.id} style={styles.accountItem}>
            <View style={styles.accountInfo}>
              {renderBankLogo(account)}
              <View style={styles.accountDetails}>
                <Text style={styles.bankName}>{account.name}</Text>
                <Text style={styles.accountNumber}>{account.accountNumber}</Text>
              </View>
            </View>
            
            <View style={styles.balanceInfo}>
              <Text style={styles.accountBalance}>
                {formatCurrency(account.balance, account.currency)}
              </Text>
              <Text style={styles.updateInfo}>
                {account.estimated ? 'Estimated Balance' : `Updated ${account.lastUpdated}`}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#8BC34A',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  headerActions: {
    flexDirection: 'row',
  },
  editButton: {
    padding: 5,
    marginRight: 10,
  },
  moreButton: {
    padding: 5,
  },
  balanceContainer: {
    paddingHorizontal: 10,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  accountsCount: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.7,
    marginBottom: 5,
  },
  totalBalance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#8BC34A',
  },
  tabText: {
    fontSize: 12,
    color: '#757575',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#8BC34A',
    fontWeight: 'bold',
  },
  accountsList: {
    flex: 1,
    padding: 16,
  },
  accountItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoImage: {
    width: '90%',
    height: '90%',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  accountDetails: {
    justifyContent: 'center',
  },
  bankName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  accountNumber: {
    fontSize: 14,
    color: '#757575',
    marginTop: 2,
  },
  balanceInfo: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  accountBalance: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  updateInfo: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 4,
  },
});
