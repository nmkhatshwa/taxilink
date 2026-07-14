import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { supabase } from '../services/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSendOTP() {
    if (!email) {
      Alert.alert('Please enter your email address');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Check your email for a login link!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.brand}>TaxiLink</Text>
        <Text style={styles.subtitle}>Enter your email address to get started</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="you@example.com"
          placeholderTextColor="#666666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSendOTP}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#0D0D0D" />
          ) : (
            <Text style={styles.buttonText}>Send Login Link</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 24,
    paddingVertical: 80,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#AAAAAA',
    marginBottom: 4,
  },
  brand: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFD000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 22,
  },
  form: {
    gap: 12,
  },
  label: {
    fontSize: 14,
    color: '#AAAAAA',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFD000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0D0D',
  },
});