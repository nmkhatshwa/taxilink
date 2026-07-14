import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

export default function WelcomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TaxiLink</Text>
        <Text style={styles.subtitle}>
          Connecting drivers and commuters in real time
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonPrimaryText}>I am a Commuter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonSecondaryText}>I am a Driver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFD000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#AAAAAA',
    lineHeight: 24,
  },
  buttons: {
    gap: 12,
  },
  buttonPrimary: {
    backgroundColor: '#FFD000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0D0D',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD000',
  },
  buttonSecondaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD000',
  },
});