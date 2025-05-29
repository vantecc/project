import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../../components/SafeAreaContainer';
import { Header } from '../../../components/Header';
import { FormStep } from '../../../components/FormStep';
import { Input } from '../../../components/Input';
import { Colors } from '../../../constants/Colors';

export default function AddressInfoScreen() {
  const router = useRouter();
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatZipCode = (value: string) => {
    return value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  };

  const handleZipCodeChange = (value: string) => {
    setZipCode(formatZipCode(value));
  };

  const handlePhoneChange = (value: string) => {
    setPhone(formatPhone(value));
  };

  const handleCellPhoneChange = (value: string) => {
    setCellPhone(formatPhone(value));
  };

  const validateInputs = () => {
    if (!street.trim()) {
      setError('Por favor, informe o logradouro');
      return false;
    }
    
    if (!number.trim()) {
      setError('Por favor, informe o número');
      return false;
    }
    
    if (!neighborhood.trim()) {
      setError('Por favor, informe o bairro');
      return false;
    }
    
    if (!city.trim()) {
      setError('Por favor, informe a cidade');
      return false;
    }
    
    if (!state.trim()) {
      setError('Por favor, informe o estado (UF)');
      return false;
    }
    
    if (!zipCode.trim() || zipCode.length < 9) {
      setError('Por favor, informe o CEP');
      return false;
    }
    
    if (!cellPhone.trim()) {
      setError('Por favor, informe o telefone celular');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateInputs()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push('/credential/new/complete');
    }, 1500);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background}>
      <Header title="Nova Credencial" />
      
      <FormStep
        title="Endereço Residencial"
        subtitle="Preencha os dados do seu endereço"
        onNext={handleSubmit}
        onBack={handleBack}
        loading={loading}
        isLastStep={true}
        nextLabel="Finalizar"
      >
        <View style={styles.inputGroup}>
          <Input
            label="CEP"
            placeholder="00000-000"
            keyboardType="numeric"
            value={zipCode}
            onChangeText={handleZipCodeChange}
            maxLength={9}
          />
          
          <View style={styles.row}>
            <Input
              label="Logradouro"
              placeholder="Rua, Avenida, etc."
              value={street}
              onChangeText={setStreet}
              containerStyle={styles.streetInput}
            />
            
            <Input
              label="Número"
              placeholder="123"
              keyboardType="numeric"
              value={number}
              onChangeText={setNumber}
              containerStyle={styles.numberInput}
            />
          </View>
          
          <Input
            label="Complemento"
            placeholder="Apto, Bloco, etc."
            value={complement}
            onChangeText={setComplement}
          />
          
          <Input
            label="Bairro"
            placeholder="Seu bairro"
            value={neighborhood}
            onChangeText={setNeighborhood}
          />
          
          <View style={styles.row}>
            <Input
              label="Cidade"
              placeholder="Sua cidade"
              value={city}
              onChangeText={setCity}
              containerStyle={styles.cityInput}
            />
            
            <Input
              label="UF"
              placeholder="SP"
              value={state}
              onChangeText={setState}
              maxLength={2}
              autoCapitalize="characters"
              containerStyle={styles.stateInput}
            />
          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <Input
            label="Telefone Residencial"
            placeholder="(00) 0000-0000"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={handlePhoneChange}
            maxLength={14}
          />
          
          <Input
            label="Telefone Celular"
            placeholder="(00) 00000-0000"
            keyboardType="phone-pad"
            value={cellPhone}
            onChangeText={handleCellPhoneChange}
            maxLength={15}
          />
          
          <Input
            label="E-mail Pessoal"
            placeholder="seu@email.com"
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
  row: {
    flexDirection: 'row',
  },
  streetInput: {
    flex: 3,
    marginRight: 8,
  },
  numberInput: {
    flex: 1,
  },
  cityInput: {
    flex: 3,
    marginRight: 8,
  },
  stateInput: {
    flex: 1,
  },
});