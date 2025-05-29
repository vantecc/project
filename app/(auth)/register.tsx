import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { StatusCard } from '../../components/StatusCard';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateInputs = () => {
    if (!name.trim()) {
      setError('Por favor, informe seu nome completo');
      return false;
    }
    
    if (!email.trim()) {
      setError('Por favor, informe seu e-mail');
      return false;
    }
    
    if (!password) {
      setError('Por favor, crie uma senha');
      return false;
    }
    
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    
    if (password !== confirmPassword) {
      setError('As senhas não conferem');
      return false;
    }
    
    return true;
  };

  const handleRegister = () => {
    if (!validateInputs()) return;
    
    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      // Show success message and navigate to login
      Alert.alert(
        "Cadastro realizado",
        "Sua conta foi criada com sucesso!",
        [
          { 
            text: "OK", 
            onPress: () => router.replace('/(auth)/login') 
          }
        ]
      );
    }, 1500);
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header title="Criar conta" />
      
      <View style={styles.container}>
        <Text style={[Typography.body, styles.subtitle]}>
          Crie sua conta para acessar os serviços SESC
        </Text>

        {error && (
          <StatusCard
            type="error"
            title="Erro no cadastro"
            message={error}
            style={styles.errorCard}
          />
        )}

        <View style={styles.form}>
          <Input
            label="Nome completo"
            placeholder="Seu nome completo"
            value={name}
            onChangeText={setName}
          />

          <Input
            label="E-mail"
            placeholder="Seu melhor e-mail"
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

          <Input
            label="Confirmar senha"
            placeholder="Confirme sua senha"
            isPassword
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <Button
            title="Criar conta"
            onPress={handleRegister}
            loading={loading}
            style={styles.registerButton}
          />

          <View style={styles.loginContainer}>
            <Text style={Typography.body}>Já tem uma conta? </Text>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginLink}>Faça login</Text>
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
    padding: 24,
  },
  subtitle: {
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  registerButton: {
    marginTop: 16,
    marginBottom: 24,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLink: {
    ...Typography.body,
    color: Colors.primary,
    fontWeight: '500',
  },
  errorCard: {
    marginBottom: 16,
  },
});