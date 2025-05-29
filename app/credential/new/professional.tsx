import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../../components/SafeAreaContainer';
import { Header } from '../../../components/Header';
import { FormStep } from '../../../components/FormStep';
import { Input } from '../../../components/Input';
import { Colors } from '../../../constants/Colors';

export default function ProfessionalInfoScreen() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [role, setRole] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [terminationDate, setTerminationDate] = useState('');
  const [income, setIncome] = useState('');
  const [workCard, setWorkCard] = useState('');
  const [pisPasep, setPisPasep] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const formatCNPJ = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  };

  const formatDate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  };

  const handleCNPJChange = (value: string) => {
    setCnpj(formatCNPJ(value));
  };

  const handleHireDateChange = (value: string) => {
    setHireDate(formatDate(value));
  };

  const handleTerminationDateChange = (value: string) => {
    setTerminationDate(formatDate(value));
  };

  const handlePhoneChange = (value: string) => {
    setPhone(formatPhone(value));
  };

  const validateInputs = () => {
    if (!companyName.trim()) {
      setError('Por favor, informe a razão social da empresa');
      return false;
    }
    
    if (!cnpj.trim() || cnpj.length < 18) {
      setError('Por favor, informe o CNPJ da empresa');
      return false;
    }
    
    if (!role.trim()) {
      setError('Por favor, informe seu cargo');
      return false;
    }
    
    if (!hireDate.trim() || hireDate.length < 10) {
      setError('Por favor, informe a data de admissão');
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateInputs()) {
      router.push('/credential/new/address');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header title="Nova Credencial" />
      
      <FormStep
        title="Informações Profissionais"
        subtitle="Preencha seus dados profissionais"
        onNext={handleNext}
        onBack={handleBack}
      >
        <View style={styles.inputGroup}>
          <Input
            label="Razão Social"
            placeholder="Nome da empresa"
            value={companyName}
            onChangeText={setCompanyName}
          />
          
          <Input
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            keyboardType="numeric"
            value={cnpj}
            onChangeText={handleCNPJChange}
            maxLength={18}
          />
          
          <Input
            label="Cargo"
            placeholder="Seu cargo na empresa"
            value={role}
            onChangeText={setRole}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Input
            label="Data de Admissão"
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            value={hireDate}
            onChangeText={handleHireDateChange}
            maxLength={10}
          />
          
          <Input
            label="Data de Desligamento (se aplicável)"
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            value={terminationDate}
            onChangeText={handleTerminationDateChange}
            maxLength={10}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Input
            label="Renda Mensal"
            placeholder="R$ 0,00"
            keyboardType="numeric"
            value={income}
            onChangeText={setIncome}
          />
          
          <Input
            label="Carteira de Trabalho (CTPS)"
            placeholder="Número da CTPS"
            value={workCard}
            onChangeText={setWorkCard}
          />
          
          <Input
            label="PIS/PASEP"
            placeholder="Número do PIS/PASEP"
            value={pisPasep}
            onChangeText={setPisPasep}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Input
            label="Telefone Comercial"
            placeholder="(00) 00000-0000"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={handlePhoneChange}
            maxLength={15}
          />
          
          <Input
            label="E-mail Comercial"
            placeholder="email@empresa.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </FormStep>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 16,
  },
});