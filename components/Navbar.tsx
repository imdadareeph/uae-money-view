import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Bell, Filter } from 'lucide-react-native';
import { Link } from 'expo-router';

export function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <TouchableOpacity style={styles.menuButton}>
            <View style={styles.menuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </TouchableOpacity>
          <Text style={styles.month}>Apr</Text>
        </View>

        <View style={styles.rightSection}>
          <Link href="/notifications" asChild>
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color="#1F2937" />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.iconButton}>
            <Filter size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#10B981',
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#0EA271',
  },
  content: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 8,
    marginRight: 16,
  },
  menuIcon: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  month: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
});