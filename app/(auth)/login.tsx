import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SescLogo } from '../../assets/logo';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { StatusCard } from '../../components/StatusCard';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    // Validate inputs
    if (!email.trim()) {
      setError('Por favor, informe seu e-mail');
      return;
    }
    
    if (!password) {
      setError('Por favor, informe sua senha');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Successful login
      router.replace('/(tabs)');
    }, 1500);
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <SescLogo size={120} />
        </View>

        <Text style={[Typography.h2, styles.title]}>Bem-vindo</Text>
        <Text style={[Typography.body, styles.subtitle]}>
          Faça login para acessar suas credenciais
        </Text>

        {error && (
          <StatusCard
            type="error"
            title="Erro no login"
            message={error}
            style={styles.errorCard}
          />
        )}

        <View style={styles.form}>
          <Input
            label="E-mail"
            placeholder="Seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            label="Senha"
            placeholder="Sua senha"
            isPassword
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <Button
            title="Entrar"
            onPress={handleLogin}
            loading={loading}
            style={styles.loginButton}
          />

          <View style={styles.registerContainer}>
            <Text style={Typography.body}>Não tem uma conta? </Text>
            <Link href="/(auth)/register" asChild>
              <TouchableOpacity>
                <Text style={styles.registerLink}>Cadastre-se</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: Colors.textSecondary,
    marginBottom: 32,
  },
  form: {
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    ...Typography.bodySmall,
    color: Colors.primary,
  },
  loginButton: {
    marginBottom: 24,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerLink: {
    ...Typography.body,
    color: Colors.primary,
    fontWeight: '500',
  },
  errorCard: {
    marginBottom: 16,
  },
});