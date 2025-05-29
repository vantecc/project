import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../../components/SafeAreaContainer';
import { Header } from '../../../components/Header';
import { FormStep } from '../../../components/FormStep';
import { Input } from '../../../components/Input';
import { Colors } from '../../../constants/Colors';

export default function PersonalInfoScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [issuer, setIssuer] = useState('');
  const [nationality, setNationality] = useState('Brasileira');
  const [error, setError] = useState<string | null>(null);

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
    if (!name.trim()) {
      setError('Por favor, informe seu nome completo');
      return false;
    }
    
    if (!birthDate.trim() || birthDate.length < 10) {
      setError('Por favor, informe sua data de nascimento');
      return false;
    }
    
    if (!cpf.trim() || cpf.length < 14) {
      setError('Por favor, informe seu CPF');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateInputs()) {
      router.push('/credential/new/professional');
    }
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header title="Nova Credencial" />
      
      <FormStep
        title="Informações Pessoais"
        subtitle="Preencha seus dados pessoais para criar uma nova credencial"
        onNext={handleNext}
        backLabel="Cancelar"
        onBack={() => router.back()}
      >
        <View style={styles.inputGroup}>
          <Input
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={setName}
          />
          
          <Input
            label="Data de Nascimento"
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            value={birthDate}
            onChangeText={handleBirthDateChange}
            maxLength={10}
          />
          
          <Input
            label="Sexo"
            placeholder="Masculino / Feminino / Outro"
            value={gender}
            onChangeText={setGender}
          />
          
          <Input
            label="Estado Civil"
            placeholder="Solteiro(a), Casado(a), etc."
            value={maritalStatus}
            onChangeText={setMaritalStatus}
          />
        </View>
        
        <View style={styles.sectionTitle}>
          <Input
            label="Documentos"
            placeholder="RG"
            value={rg}
            onChangeText={setRg}
          />
          
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            keyboardType="numeric"
            value={cpf}
            onChangeText={handleCpfChange}
            maxLength={14}
          />
          
          <Input
            label="Órgão Emissor"
            placeholder="Ex: SSP/SP"
            value={issuer}
            onChangeText={setIssuer}
          />
          
          <Input
            label="Nacionalidade"
            value={nationality}
            onChangeText={setNationality}
          />
        </View>
      </FormStep>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 24,
  },
});