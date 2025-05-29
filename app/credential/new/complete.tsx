import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaContainer } from '../../../components/SafeAreaContainer';
import { StatusCard } from '../../../components/StatusCard';
import { Button } from '../../../components/Button';
import { Colors } from '../../../constants/Colors';
import { Typography } from '../../../constants/Fonts';
import { CircleCheck as CheckCircle } from 'lucide-react-native';

export default function CompleteScreen() {
  const router = useRouter();
  const scaleAnim = new Animated.Value(0);
  
  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);
  
  const handleDone = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaContainer backgroundColor={Colors.background} style={styles.container}>
      <Animated.View style={[
        styles.successContainer,
        {
          transform: [{ scale: scaleAnim }],
          opacity: scaleAnim,
        },
      ]}>
        <View style={styles.iconContainer}>
          <CheckCircle size={64} color={Colors.success} />
        </View>
        
        <Text style={[Typography.h2, styles.title]}>
          Solicitação Enviada
        </Text>
        
        <Text style={[Typography.body, styles.message]}>
          Seus dados foram enviados para análise. Você receberá uma notificação quando a sua credencial for aprovada.
        </Text>
        
        <StatusCard
          type="pending"
          title="Próximos passos"
          message="A análise da sua solicitação pode levar até 5 dias úteis. Você pode acompanhar o status da sua credencial a qualquer momento na aba 'Credenciais'."
          style={styles.statusCard}
        />
        
        <Button
          title="Concluir"
          onPress={handleDone}
          style={styles.button}
        />
      </Animated.View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  successContainer: {
    width: '100%',
    alignItems: 'center',
    maxWidth: 400,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(40, 154, 93, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  message: {
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.textSecondary,
  },
  statusCard: {
    marginBottom: 32,
    width: '100%',
  },
  button: {
    width: '100%',
  },
});