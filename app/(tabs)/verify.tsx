import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { StatusCard } from '../../components/StatusCard';
import { Colors } from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { Shadows } from '../../constants/Colors';

export default function VerifyScreen() {
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatBirthDate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1');
  };

  const handleCpfChange = (value: string) => {
    setCpf(formatCPF(value));
  };

  const handleBirthDateChange = (value: string) => {
    setBirthDate(formatBirthDate(value));
  };

  const validateInputs = () => {
    if (!cpf.trim() || cpf.length < 14) {
      setError('CPF inválido. Por favor, verifique.');
      return false;
    }

    if (!birthDate.trim() || birthDate.length < 10) {
      setError('Data de nascimento inválida. Por favor, verifique.');
      return false;
    }

    return true;
  };

  const handleVerify = () => {
    if (!validateInputs()) return;

    setLoading(true);
    setError(null);
    setSuccess(false);
    setStatusMessage(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);

      // Mock response - in a real app, this would come from the API
      const hasCredential = Math.random() > 0.5;

      if (hasCredential) {
        setSuccess(true);
        setStatusMessage('Credencial encontrada! Status: Ativa');
      } else {
        setSuccess(false);
        setStatusMessage('Nenhuma credencial encontrada para os dados informados.');
      }
    }, 1500);
  };

  const clearResults = () => {
    setCpf('');
    setBirthDate('');
    setError(null);
    setSuccess(false);
    setStatusMessage(null);
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header title="Consultar Credencial" showBackButton={false} />

      <View style={styles.container}>
        {!statusMessage ? (
          <>
            <Text style={[Typography.body, styles.description]}>
              Preencha os campos abaixo para consultar o status da sua credencial SESC.
            </Text>

            {error && (
              <StatusCard
                type="error"
                title="Erro na consulta"
                message={error}
                style={styles.statusCard}
              />
            )}

            <View style={styles.form}>
              <Input
                label="CPF"
                placeholder="000.000.000-00"
                keyboardType="numeric"
                value={cpf}
                onChangeText={handleCpfChange}
                maxLength={14}
              />

              <Input
                label="Data de Nascimento"
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
                value={birthDate}
                onChangeText={handleBirthDateChange}
                maxLength={10}
              />

              <Button
                title="Consultar"
                onPress={handleVerify}
                loading={loading}
                style={styles.button}
              />
            </View>
          </>
        ) : (
          <View style={styles.resultContainer}>
            <StatusCard
              type={success ? 'success' : 'info'}
              title={success ? 'Credencial Encontrada' : 'Resultado da Consulta'}
              message={statusMessage}
              style={styles.statusCard}
            />

            {success && (
              <View style={[styles.credentialCard, Shadows.medium]}>
                <Text style={[Typography.h3, styles.credentialTitle]}>
                  Informações da Credencial
                </Text>
                
                <View style={styles.credentialInfo}>
                  <Text style={Typography.bodySmall}>CPF:</Text>
                  <Text style={Typography.body}>{cpf}</Text>
                </View>
                
                <View style={styles.credentialInfo}>
                  <Text style={Typography.bodySmall}>Status:</Text>
                  <Text style={[Typography.body, styles.activeStatus]}>
                    Ativa
                  </Text>
                </View>
                
                <View style={styles.credentialInfo}>
                  <Text style={Typography.bodySmall}>Validade:</Text>
                  <Text style={Typography.body}>31/12/2025</Text>
                </View>
                
                <View style={styles.credentialInfo}>
                  <Text style={Typography.bodySmall}>Categoria:</Text>
                  <Text style={Typography.body}>Comerciário</Text>
                </View>
              </View>
            )}

            <Button
              title="Nova Consulta"
              onPress={clearResults}
              style={styles.button}
            />
          </View>
        )}
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  description: {
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: 24,
  },
  statusCard: {
    marginBottom: 24,
  },
  resultContainer: {
    flex: 1,
    width: '100%',
  },
  credentialCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  credentialTitle: {
    marginBottom: 16,
  },
  credentialInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
  },
  activeStatus: {
    color: Colors.success,
    fontWeight: '500',
  },
});