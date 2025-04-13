import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { CreditCard, ShoppingBag, Coffee, Car } from 'lucide-react-native';

export function TransactionList() {
  const transactions = [
    {
      id: 1,
      merchant: 'CAREEM RIDE',
      category: 'Transportation',
      amount: -15.60,
      date: '10 Apr',
      icon: Car,
      color: '#6366F1',
    },
    {
      id: 2,
      merchant: 'HADIYYA COFFEE',
      category: 'Dining',
      amount: -2.00,
      date: '10 Apr',
      icon: Coffee,
      color: '#10B981',
    },
    {
      id: 3,
      merchant: 'AWS EMEA',
      category: 'Bills',
      amount: -1.06,
      date: '10 Apr',
      icon: CreditCard,
      color: '#F59E0B',
    },
    {
      id: 4,
      merchant: 'FINE BERRY MINIMART',
      category: 'Shopping',
      amount: -3.00,
      date: '10 Apr',
      icon: ShoppingBag,
      color: '#EC4899',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Transactions</Text>
      <Card style={styles.card}>
        {transactions.map((transaction, index) => {
          const Icon = transaction.icon;
          return (
            <View 
              key={transaction.id}
              style={[
                styles.transaction,
                index < transactions.length - 1 && styles.borderBottom
              ]}
            >
              <View style={[styles.iconContainer, { backgroundColor: transaction.color }]}>
                <Icon size={20} color="#FFFFFF" />
              </View>
              <View style={styles.details}>
                <Text style={styles.merchant}>{transaction.merchant}</Text>
                <Text style={styles.category}>{transaction.category}</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={[
                  styles.amount,
                  { color: transaction.amount < 0 ? '#EF4444' : '#10B981' }
                ]}>
                  AED {Math.abs(transaction.amount).toFixed(2)}
                </Text>
                <Text style={styles.date}>{transaction.date}</Text>
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
    paddingBottom: 32,
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
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  merchant: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 2,
  },
  category: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    marginBottom: 2,
  },
  date: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
});