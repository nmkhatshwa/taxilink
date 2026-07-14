import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { supabase } from '../services/supabase';

export default function HomeScreen() {
  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TaxiLink</Text>
      <Text style={styles.subtitle}>You are logged in! 🎉</Text>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#AAAAAA',
    marginBottom: 48,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#FFD000',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD000',
  },
});