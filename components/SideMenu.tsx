import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Settings,
  CreditCard,
  BarChart3,
  Banknote,
  Users,
  RefreshCw,
  UserPlus,
  Award,
  FileText,
  Mail,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface SideMenuProps {
  isVisible: boolean;
  onClose: () => void;
  email?: string;
}

export function SideMenu({ isVisible, onClose, email = 'user@example.com' }: SideMenuProps) {
  const router = useRouter();
  const translateX = React.useRef(new Animated.Value(-width)).current;
  const [isRendered, setIsRendered] = React.useState(isVisible);

  React.useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
    }
    
    Animated.timing(translateX, {
      toValue: isVisible ? 0 : -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (!isVisible) {
        setIsRendered(false);
      }
    });
  }, [isVisible, translateX]);

  const handleNavigation = (route: string) => {
    onClose();
    // Use type assertion to handle the route string
    router.push(route as any);
  };

  const MenuItem = ({ icon, title, route, badge }: { icon: React.ReactNode; title: string; route: string; badge?: string }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation(route)}>
      <View style={styles.menuIconContainer}>{icon}</View>
      <Text style={styles.menuItemText}>{title}</Text>
      {badge && <View style={styles.badgeContainer}><Text style={styles.badgeText}>{badge}</Text></View>}
    </TouchableOpacity>
  );

  const handleOverlayPress = (e: any) => {
    // Only close if the actual overlay background is pressed (not the menu)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isRendered) {
    return null;
  }

  return (
    <View style={[styles.overlay, { display: isVisible ? 'flex' : 'none' }]} onTouchEnd={handleOverlayPress}>
      <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>M</Text>
            </View>
            <Text style={styles.appName}>UAE Expense Tracker</Text>
          </View>
          <Text style={styles.email}>{email}</Text>
        </View>

        <ScrollView style={styles.menuItems}>
          <MenuItem 
            icon={<CreditCard size={24} color="#555" />} 
            title="Accounts" 
            route="/accounts" 
          />
          <MenuItem 
            icon={<FileText size={24} color="#555" />} 
            title="Bills" 
            route="/bills" 
          />
          <MenuItem 
            icon={<Banknote size={24} color="#555" />} 
            title="Cash" 
            route="/cash" 
          />
          <MenuItem 
            icon={<BarChart3 size={24} color="#555" />} 
            title="Spend Summary" 
            route="/spend-summary" 
          />
          <MenuItem 
            icon={<Users size={24} color="#555" />} 
            title="Split/Loan" 
            route="/split-loan" 
          />
          <MenuItem 
            icon={<RefreshCw size={24} color="#555" />} 
            title="Reimbursements" 
            route="/reimbursements" 
          />
          <MenuItem 
            icon={<UserPlus size={24} color="#555" />} 
            title="Refer and Earn" 
            route="/refer" 
            badge="NEW"
          />
          <MenuItem 
            icon={<Award size={24} color="#555" />} 
            title="Referral credits" 
            route="/credits" 
            badge="NEW"
          />
          <MenuItem 
            icon={<Settings size={24} color="#555" />} 
            title="Settings" 
            route="/(tabs)/settings" 
          />
          <View style={styles.settingsSubtext}>
            <Text style={styles.settingsSubtextContent}>PIN setup, Backup, Alerts</Text>
          </View>
          <MenuItem 
            icon={<Mail size={24} color="#555" />} 
            title="Export Data" 
            route="/export" 
            badge="NEW"
          />
          <View style={styles.settingsSubtext}>
            <Text style={styles.settingsSubtextContent}>Email transaction CSV file</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>No backup yet!</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
  container: {
    width: width * 0.8,
    maxWidth: 300,
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    backgroundColor: '#10B981',
    padding: 16,
    paddingTop: 48,
    paddingBottom: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10B981',
  },
  appName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    color: 'white',
    fontSize: 14,
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIconContainer: {
    width: 30,
    marginRight: 16,
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
  badgeContainer: {
    backgroundColor: '#ff4757',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  settingsSubtext: {
    paddingLeft: 62,
    paddingRight: 16,
    paddingBottom: 16,
    marginTop: -12,
  },
  settingsSubtextContent: {
    fontSize: 12,
    color: '#10B981',
  },
  footer: {
    backgroundColor: '#00a8ff',
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});
